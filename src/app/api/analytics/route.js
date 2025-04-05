import { BetaAnalyticsDataClient } from '@google-analytics/data';

const KEY_FILE_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS || "analytic-test-455910-50f579456eae.json";

const PROPERTY_ID = '484633945';

function processAnalyticsData(data) {
  const metrics = {
    totalUsers: 0,
    totalPageViews: 0,
    totalSessions: 0,
    bounceRate: 0,
    averageSessionDuration: 0,
    topPages: {},
    topCities: {},
    deviceDistribution: {},
    trafficSources: {},
  };

  data.forEach((row) => {
    const activeUsers = Number(row.activeUsers) || 0;
    const pageViews = Number(row.pageViews) || 0;
    const sessions = Number(row.sessions) || 0;
    const bounceRate = Number(row.bounceRate) || 0;
    const avgSessionDuration = Number(row.averageSessionDuration) || 0;

    metrics.totalUsers += activeUsers;
    metrics.totalPageViews += pageViews;
    metrics.totalSessions += sessions;
    metrics.bounceRate += bounceRate;
    metrics.averageSessionDuration += avgSessionDuration;

    // Top Pages
    const pagePath = row.pagePath;
    metrics.topPages[pagePath] = (metrics.topPages[pagePath] || 0) + pageViews;

    // Top Cities
    const city = row.city;
    metrics.topCities[city] = (metrics.topCities[city] || 0) + activeUsers;

    // Device Distribution
    const device = row.device;
    metrics.deviceDistribution[device] = (metrics.deviceDistribution[device] || 0) + activeUsers;

    // Traffic Sources
    const source = row.source || 'direct';
    const medium = row.medium || 'none';
    const sourceMedium = `${source} / ${medium}`;
    metrics.trafficSources[sourceMedium] = (metrics.trafficSources[sourceMedium] || 0) + activeUsers;
  });

  const safeLength = data.length || 1;
  metrics.bounceRate = (metrics.bounceRate / safeLength).toFixed(2);
  metrics.averageSessionDuration = (metrics.averageSessionDuration / safeLength).toFixed(2);

  metrics.topPages = Object.entries(metrics.topPages).sort((a, b) => b[1] - a[1]).slice(0, 10);
  metrics.topCities = Object.entries(metrics.topCities).sort((a, b) => b[1] - a[1]).slice(0, 10);
  metrics.deviceDistribution = Object.entries(metrics.deviceDistribution).sort((a, b) => b[1] - a[1]);
  metrics.trafficSources = Object.entries(metrics.trafficSources).sort((a, b) => b[1] - a[1]).slice(0, 10);

  return metrics;
}

export async function GET(req) {
  try {
    if (!KEY_FILE_PATH) {
      return Response.json({ error: 'Missing GOOGLE_APPLICATION_CREDENTIALS environment variable' }, { status: 500 });
    }

    const url = new URL(req.url);
    const range = url.searchParams.get('range') || 'weekly';

    let startDate = '7daysAgo';
    if (range === 'daily') startDate = '1daysAgo';
    else if (range === 'monthly') startDate = '30daysAgo';
    else if (range === 'yearly') startDate = '365daysAgo';

    const analyticsDataClient = new BetaAnalyticsDataClient({ keyFilename: KEY_FILE_PATH });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate: 'today' }],
      dimensions: [
        { name: 'date' }, { name: 'country' }, { name: 'city' },
        { name: 'deviceCategory' }, { name: 'operatingSystem' },
        { name: 'browser' }, { name: 'pagePath' },
        { name: 'source' }, { name: 'medium' }
      ],
      metrics: [
        { name: 'activeUsers' }, { name: 'screenPageViews' },
        { name: 'sessions' }, { name: 'bounceRate' },
        { name: 'averageSessionDuration' }
      ],
    });

    const rawData = response.rows?.map((row) => {
      const dimensions = row.dimensionValues.map(d => d?.value || '');
      const metrics = row.metricValues.map(m => m?.value || '0');

      return {
        date: dimensions[0],
        country: dimensions[1],
        city: dimensions[2],
        device: dimensions[3],
        operatingSystem: dimensions[4],
        browser: dimensions[5],
        pagePath: dimensions[6],
        source: dimensions[7],
        medium: dimensions[8],

        activeUsers: metrics[0],
        pageViews: metrics[1],
        sessions: metrics[2],
        bounceRate: metrics[3],
        averageSessionDuration: metrics[4],
      };
    }) || [];

    const processedData = processAnalyticsData(rawData);

    return Response.json({ rawData, processedData });
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error.message);
    return Response.json({
      error: 'Failed to fetch Google Analytics data',
      details: error.message
    }, { status: 500 });
  }
}

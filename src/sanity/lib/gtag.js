export const pageview = (url) => {
    if (window.gtag) {
      window.gtag("config", "G-11YBXNKLZ7", {
        page_path: url,
      });
    }
  };
  

  export const event = ({ action, category, label, value }) => {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };
  
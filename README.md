# README.md - Next.js Application with Sanity Integration

This is a fully developed Next.js application integrated with [Sanity](https://www.sanity.io/) for content management. The project includes a custom studio for managing Sanity data, accessible at `http://localhost:3000/studio`.

## Features
- **Next.js 13+ with App Router**
- **Sanity CMS Integration** for dynamic content management
- **Optimized Fonts** using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Automatic Page Updates** when modifying `app/page.js`
- **Vercel Deployment Ready**

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Start the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Access Sanity Studio
Sanity Studio is available at:
```
http://localhost:3000/studio
```
Use this to manage your content dynamically.

## Sanity Setup
If you haven't set up Sanity, follow these steps:
```bash
npx sanity init
```
Configure it with your Sanity project ID and dataset.

## Learn More
To learn more about the technologies used in this project:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Sanity Documentation](https://www.sanity.io/docs) - Learn how to manage and fetch content dynamically.
- [Vercel Deployment](https://vercel.com/docs) - Deploy your app seamlessly.

## Deployment on Vercel
To deploy your app, simply run:
```bash
git push origin main
```
Then, connect your repository to Vercel and deploy it.

## Contributing
Feel free to submit issues or pull requests to enhance the project.

## License
This project is licensed under the MIT License.


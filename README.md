# Limulus AI Landing Page

A modern landing page built with Astro for Limulus AI, designed to be deployed to GitHub Pages.

## 🚀 Features

- **Modern Design**: Clean, professional layout with purple/magenta branding
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Astro for optimal loading speeds
- **Interactive**: FAQ section with expand/collapse functionality
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm

### Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/limulus-web.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Update Configuration:**
   - Edit `astro.config.mjs`
   - Update the `site` URL to match your GitHub Pages URL
   - Update the `base` path if your repository name is different

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the built site ready for deployment

## 🎨 Customization

### Colors

The main brand color is defined as `#B02D9C` (purple/magenta). You can find and replace this color in the CSS to match your branding.

### Content

All content is in Polish and can be easily modified in the `src/pages/index.astro` file. Key sections include:

- Hero section text
- Features descriptions
- Statistics
- FAQ questions and answers
- Contact information

### Assets

Placeholder images are used throughout the design. Replace them by:

1. Adding your images to the `public/` folder
2. Updating the CSS background-image properties
3. Replacing placeholder elements with `<img>` tags

## 🔧 Configuration

### Astro Config

The `astro.config.mjs` file contains GitHub Pages-specific configuration:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/limulus-web',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
```

### SEO and Meta Tags

Update the meta tags in the `<head>` section of `index.astro`:

- Title
- Description
- Open Graph tags (if needed)
- Favicon

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Create a pull request

## 📄 License

This project is created for Limulus AI. Please respect intellectual property rights.

## 🆘 Troubleshooting

### Build Issues

- Ensure Node.js version is 18 or higher
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for any TypeScript errors

### Deployment Issues

- Verify GitHub Pages is enabled in repository settings
- Check GitHub Actions logs for build errors
- Ensure the `site` and `base` URLs in astro.config.mjs are correct

### Styling Issues

- Use browser developer tools to debug CSS
- Check responsive design at different screen sizes
- Validate HTML structure

## 🔗 Useful Links

- [Astro Documentation](https://docs.astro.build/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions for Astro](https://docs.astro.build/en/guides/deploy/github/)

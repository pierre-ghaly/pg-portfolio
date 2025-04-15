# Portfolio Website

A modern, responsive portfolio website built with React and TypeScript. This project was created using Vite as the build tool for optimal performance.

## Features

- Modern UI with responsive design for all device sizes
- Single-page application (SPA) with smooth scrolling
- Project showcase section
- Skills and expertise display
- Contact form
- GitHub Pages deployment

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS3 with custom properties
- GitHub Pages for deployment

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pg-portfolio.git
   cd pg-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### First-time setup:

1. Create a GitHub repository for your portfolio
2. Push your code to the repository
3. In your package.json, ensure the "homepage" field is set correctly:
   ```json
   "homepage": "https://yourusername.github.io/pg-portfolio"
   ```

### Deployment:

Simply run:

```bash
npm run deploy
```

This will:

1. Build your project
2. Deploy it to the `gh-pages` branch in your repository
3. Make it available at the URL specified in your homepage field

### Post-deployment:

If this is your first deployment, make sure to:

1. Go to your GitHub repository settings
2. Scroll down to the "GitHub Pages" section
3. Ensure the source is set to the `gh-pages` branch

## Customization

- Update personal information in the components
- Add your own projects to the `projectsData` array in the Projects component
- Modify the skills list in the Skills component
- Update contact information in the Contact component
- Add your own custom styling by modifying the CSS files

## License

MIT

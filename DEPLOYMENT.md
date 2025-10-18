# iBTIKAR IT SOLUTIONS - Deployment Guide

## 🚀 Render Deployment Instructions

This project is ready for deployment on Render. Follow these steps:

### 1. Connect to GitHub Repository
- Repository URL: `https://github.com/khalifa-IT09/iBTIKAR`
- Branch: `main`

### 2. Render Configuration
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x or higher
- **Environment**: Web Service (not Static Site)

### 3. Environment Variables (Optional)
The project works without environment variables, but you can add:
- `VITE_APP_TITLE`: iBTIKAR IT SOLUTIONS
- `VITE_APP_URL`: https://your-domain.onrender.com
- `VITE_APP_EMAIL`: contact@ibtikar.com
- `VITE_APP_PHONE`: +222 22 09 09 32

### 4. Features Included
✅ **Multi-language Support**: English (EN) and French (FR)  
✅ **Admin Panel**: Accessible via `/admin`  
✅ **Admin Login**: Username: `admin`, Password: `admin123`  
✅ **Responsive Design**: Mobile-first approach  
✅ **PWA Support**: Progressive Web App capabilities  
✅ **SEO Optimized**: Meta tags and structured data  
✅ **Contact Form**: Functional contact section  
✅ **Modern UI**: Built with Tailwind CSS  

### 5. Admin Panel Access
- URL: `https://your-domain.onrender.com/admin`
- Username: `admin`
- Password: `admin123`
- Features: Content management for both EN and FR versions

### 6. Build Verification
The project builds successfully with:
- TypeScript compilation
- Vite bundling
- Tailwind CSS processing
- PWA manifest generation
- Service worker creation

### 7. File Structure
```
dist/
├── index.html
├── manifest.webmanifest
├── registerSW.js
├── sw.js
├── workbox-*.js
└── assets/
    ├── index-*.css
    ├── index-*.js
    ├── vendor-*.js
    └── icons-*.js
```

## 🎯 Ready for Production!
The project is fully configured and ready for deployment on Render.

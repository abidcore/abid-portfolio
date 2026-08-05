# Abid Ali — AI & Machine Learning Engineer Portfolio

A premium, responsive, editorial personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed for both **Android mobile devices** and **Windows desktop/laptop** screens.

Live Website: [https://abidcore.github.io/abid-portfolio/](https://abidcore.github.io/abid-portfolio/)

---

## 🚀 Features

- **Technical Editorial Aesthetic**: Ultra-clean typography, monochrome color palette, asymmetrical layout, and high-contrast composition.
- **Dual Mode Theme**: White Mode (`#FAFAF8`) by default, Black Mode (`#0B0B0B`) with custom `--accent` amber/burnt orange (`#C9622B`). Persisted via `localStorage`.
- **Single Responsive Architecture**: Custom-built for touch targets on Android (360px–414px) and mouse/keyboard navigation on Windows (1280px–1920px+).
- **Desktop Custom Cursor**: Enabled only on fine pointer/mouse devices via `@media (hover: hover) and (pointer: fine)`. Automatically disabled on touch screens.
- **8 Real AI/ML Projects**: Top 3 featured deep-dive case studies + 5 interactive project ledger entries with direct links to GitHub repositories (`github.com/abidcore`).
- **Centralized Data Store**: All personal data, projects, education, skills, and contacts are managed inside `src/data/content.js`.
- **GitHub Pages Ready**: Includes `.github/workflows/deploy.yml` for automated GitHub Actions deployment.

---

## 📁 Folder Structure

```text
abid-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deployment workflow
├── public/
│   ├── favicon.svg               # Site favicon
│   ├── images/
│   │   ├── profile.jpg           # Profile photo location
│   │   └── projects/             # Project visual assets location
│   └── resume/
│       └── Abid-Ali-Resume.pdf   # Resume PDF location
├── src/
│   ├── components/               # Modular UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Internship.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── CustomCursor.jsx
│   ├── data/
│   │   └── content.js            # Centralized content file
│   ├── styles/
│   │   └── index.css             # CSS custom variables & Tailwind base
│   ├── App.jsx                   # Main layout container
│   └── main.jsx                  # React entry point
├── index.html                    # Entry HTML & SEO metadata
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite & base path configuration
└── README.md
```

---

## 🛠️ How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready static files will be placed in the `dist/` directory.

---

## ✏️ How to Edit Content & Replace Assets

### 1. Edit Personal Info, Skills & Projects
Edit `src/data/content.js`. You can update:
- Name, title, hero text, and bio.
- Contact info (`email`, `phone`, `github`, `linkedin`).
- Add or edit projects in the `featuredProjects` or `projectLedger` arrays.
- Skills and education entries.

### 2. Replace Profile Photo
Place your photo at `public/images/profile.jpg`.

### 3. Replace Resume PDF
Place your updated resume PDF at `public/resume/Abid-Ali-Resume.pdf`.

---

## 🌐 Deploying to GitHub Pages

### Option A: Automated GitHub Actions (Recommended)
1. Push this code to a repository named `abid-portfolio` under your GitHub account (`https://github.com/abidcore/abid-portfolio`).
2. Go to your repository **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to `GitHub Actions`.
4. Whenever you push changes to `main`, the site will automatically build and deploy to `https://abidcore.github.io/abid-portfolio/`.

---

© 2026 Abid Ali Mohd Yusuf Shaikh. All rights reserved.

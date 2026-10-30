# Keshav Sharma — Developer Portfolio & System Architecture Showcase

A modern, high-performance, responsive developer portfolio engineered with **HTML5, Tailwind CSS, Vanilla JavaScript (ES6+), FontAwesome 6, and Glassmorphism styling**.

---

## 🌟 Key Features

- **Theme Toggle**: Instant Dark / Light Mode with `localStorage` preference persistence.
- **Dynamic Projects Filter**: Filter projects between *Enterprise SaaS*, *Microservices*, and *Automation & Cloud*.
- **Interactive Architecture Deep Dive**: Clickable architecture tabs showcasing:
  - Metadata-Driven Dynamic Schema Synthesis (MassCapper)
  - Clean Architecture & CQRS Pattern (.NET 10 / EF Core)
  - Decoupled OAuth 2.0 & Microsoft Entra ID (Azure AD) SSO
- **One-Click Copy & Toast**: Copy Email and Phone Number directly to clipboard with animated toasts.
- **Working Contact Form**: Pre-wired to launch native email client with pre-filled subject and body.
- **Ultra-Lightweight**: Zero node modules or heavy bundlers required — runs at 100/100 Lighthouse speed.

---

## 🚀 How to Run Locally

You don't need to install anything! 
1. Simply go to `D:\Backup\KeshavSharma-Portfolio` and **double-click `index.html`** in your browser (Chrome, Edge, Brave, etc.).
2. Or open the folder in **VS Code** and click **"Go Live"** (Live Server extension).

---

## 🌐 How to Host for FREE (Step-by-Step)

### Option 1: GitHub Pages (100% Free Forever — 2 Minutes)
1. Go to [GitHub.com](https://github.com) and create a new public repository named:  
   `keshav-portfolio` (or `yourusername.github.io`).
2. Upload the contents of this folder (`index.html`, `assets/`, `README.md`).
3. In your GitHub repository, go to **Settings** $\rightarrow$ **Pages** (in the left sidebar).
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
5. Within 60 seconds, your site is live at:  
   👉 `https://<your-username>.github.io/keshav-portfolio/`

---

### Option 2: Vercel (Blazing Fast Global CDN — 1 Minute)
1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New"** $\rightarrow$ **"Project"** $\rightarrow$ Select your `keshav-portfolio` repository.
3. Click **"Deploy"** (Leave all build settings default).
4. Vercel will instantly give you a live HTTPS URL like:  
   👉 `https://keshav-sharma.vercel.app`

---

## 📸 How to Add / Change Your Photo

If you want to use your real photo instead of the monogram `KS` shield:
1. Copy your picture (PNG or JPG) into `assets/img/profile.jpg`.
2. Open `index.html`, find the `<div class="relative w-48 h-48...` inside the **About** section (Line ~165).
3. Replace the inner `<span class="text-6xl font-heading...">KS</span>` with:
   ```html
   <img src="assets/img/profile.jpg" alt="Keshav Sharma" class="w-full h-full object-cover rounded-[22px]">
   ```
4. It will automatically inherit the glowing ambient emerald/cyan border rings!

---

## 📄 How to Attach Your Resume PDF

1. Place your real resume file inside this folder and rename it: `Keshav_Sharma_Resume.pdf`.
2. In `index.html`, update the resume button link in the header:
   ```html
   <a href="Keshav_Sharma_Resume.pdf" download="Keshav_Sharma_Resume.pdf">
   ```


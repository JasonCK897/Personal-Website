# Jason Christov Kesuma - Personal Portfolio & Engineering Showcase

A modern, high-performance Single Page Application (SPA) portfolio website for **Jason Christov Kesuma**, an undergraduate Informatics Engineering student at Universitas Ma Chung specializing in **Embedded Systems**, **Firmware Engineering**, and **Web3 Smart Contracts**.

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/si`, `react-icons/fa6`, `react-icons/tb`) & [Lucide React](https://lucide.dev/)
- **Forms**: Formspree API with direct mailto fallback
- **Typography**: Space Grotesk & Inter via Google Fonts

---

## Key Features

1. **Distinct Framed Hero Section**:
   - Elevated container box with ambient background lighting and double trail-orbit avatar animation (`conic-gradient` + `radial-gradient` mask).
   - Instant CTA buttons: **"View CV"** (opens the original PDF directly) and **"Contact Me"**.
2. **Featured Projects (Visual-First & Concise)**:
   - **Project Shasta**: Touch Controller Noise Immunity Firmware Suite (STM32 DAC + ESP32 Wireless Relay).
   - **Sui Blockchain dApp**: Decentralized on-chain library management system using Move smart contracts and React.
   - **AiDiTech**: Research center web portal and admin CMS for Universitas Ma Chung.
3. **Direct Contact Channels**:
   - Clean, direct clickable cards opening Email, LinkedIn, GitHub, and Instagram without displaying messy raw URLs.
4. **Dark / Light Theme Toggle**:
   - Defaults to an ultra-modern Cyber Obsidian theme, with a crisp clean light mode alternative.
5. **Decoupled Architecture**:
   - Content and information are cleanly maintained inside [`src/data/portfolio.js`](src/data/portfolio.js).

---

## Getting Started Locally

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

1. Clone or navigate to the project directory:
   ```bash
   cd D:\PersonaWebsite\Website
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build

To generate the optimized static build:
```bash
npm run build
```
The compiled assets will be output to the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

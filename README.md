# 🏠 Sky Heights Avenue — Real Estate Platform

A premium real estate booking platform built with React and Vite. Browse residential, commercial, and industrial properties across India and book site visits seamlessly.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Property Listings** — Browse 2,400+ properties with detailed cards showing pricing, location, and type
- **Smart Filters** — Filter properties by category: All, Residential, Commercial, Industrial
- **Site Visit Booking** — Complete booking form with validation, date/time slot selection, and confirmation modal
- **Dark / Light Mode** — Toggle between dark and light themes with smooth transitions
- **Responsive Design** — Fully responsive layout that works on desktop, tablet, and mobile
- **Search Bar** — Search properties by city, location, or property type
- **Stats Dashboard** — Key metrics: properties listed, cities covered, homes booked, satisfied clients

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **Vite 6** | Build tool & dev server |
| **React Router v7** | Client-side routing |
| **Lucide React** | Icon library |
| **Vanilla CSS** | Custom styling with CSS variables & theming |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Archis009/Real-Estate.git
   cd Real-Estate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Real-Estate/
├── index.html                 # Entry HTML
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies & scripts
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Router & app shell
│   ├── index.css              # Global styles & theme variables
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with theme toggle
│   │   └── Navbar.css         # Navbar styles
│   ├── pages/
│   │   ├── Home.jsx           # Landing page with hero, stats & listings
│   │   ├── Home.css           # Home page styles
│   │   ├── Booking.jsx        # Site visit booking form
│   │   └── Booking.css        # Booking page styles
│   └── data/
│       └── properties.js      # Mock property data
└── .gitignore
```

---

## 📸 Screenshots

### Home Page (Dark Mode)
> Hero section with property background, search bar, and stats strip

### Property Listings
> Filterable property cards with pricing and book now functionality

### Booking Page
> Complete site visit booking form with validation and confirmation modal

---

## 🎨 Theming

The app supports **dark** and **light** modes using CSS custom properties. Toggle the theme using the sun/moon icon in the navbar.

| Token | Dark Mode | Light Mode |
|-------|-----------|------------|
| `--bg-primary` | `#0b0f19` | `#f8fafc` |
| `--text-primary` | `#e8e6e3` | `#1e293b` |
| `--accent-gold` | `#d4af37` | `#b8960c` |
| `--surface-color` | `#141926` | `#ffffff` |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Archis009">Archis009</a>
</p>

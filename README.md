# AXS Labs — Restaurant Technology & Digital Infrastructure Web Portal

A premium single-page agency website built for **AXS Labs**, a Kolkata-based digital infrastructure and growth agency for restaurants.

## 🎨 Design System & Strict Hex Palette

| Role | Color Name | Hex Code |
|---|---|---|
| **Main Background** | Cream Ivory | `#FAF0E6` |
| **Secondary Background/Sections** | Sand Beige | `#E1C7BA` |
| **Primary Brand Accent** | Mauve Pink | `#C77389` |
| **Secondary Accent** | Rose Blush | `#D8959B` |
| **Strong Emphasis (Buttons/CTAs)** | Deep Mauve | `#8E4A4D` |
| **Success/Botanical Accents** | Sage Green | `#AEBF97` |
| **Borders & Subtle Details** | Slate Grey | `#8F8A87` |
| **Text & Headings** | Charcoal | `#2E2E2E` |

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS (custom soft-tech rounded glassmorphism configuration)
- **Animations**: Framer Motion (fluid stagger reveals, floating cards, subtle hover physics)
- **Icons**: Lucide React (thin, modern stroke icons)

## 📁 Project Structure

```
axslabs-web/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   └── components/
│       ├── Navbar.jsx             # Sticky glassmorphism header with mobile drawer
│       ├── Hero.jsx               # Headline, CTAs, and live floating cards
│       ├── Services.jsx           # 5-card Core Services grid with hover-lift
│       ├── Ecosystem.jsx          # 3-column tri-pillar architecture (Lync, Studio, AXSessories)
│       ├── SavingsCalculator.jsx  # Interactive Aggregator Commission savings slider
│       ├── About.jsx              # Founder Affan Danish & agency mission
│       ├── ComplianceHub.jsx      # Razorpay/MSME legal hub (Refund, Terms, Privacy)
│       ├── ConsultationModal.jsx  # Interactive strategy session booking modal
│       └── Footer.jsx             # Official registered office, enterprise & founder lines
└── dist/                          # Production-ready build artifacts
```

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

# Wedding Website

This is a wedding website built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), following atomic design principles.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Architecture**: Atomic Design Pattern
- **File Extension**: .jsx for all components and pages

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.jsx           # Home page
│   ├── couple/            # About couple page
│   ├── gallery/           # Photo gallery
│   ├── rsvp/              # RSVP form
│   └── layout.jsx         # Root layout
├── components/
│   ├── atoms/             # Basic UI elements
│   ├── molecules/         # Simple component combinations
│   ├── organisms/         # Complex UI sections
│   └── templates/         # Page-level layouts
└── styles/
    └── globals.css        # Global styles
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 🎊 Beautiful wedding invitation design
- 👰‍♀️ Couple story section
- 📸 Photo gallery
- 📝 RSVP form
- 📅 Event details
- 🎵 Music player
- 📱 Mobile responsive design

## Atomic Design Structure

- **Atoms**: Buttons, inputs, typography, icons
- **Molecules**: Cards, forms, navigation items
- **Organisms**: Header, footer, hero sections
- **Templates**: Page layouts
- **Pages**: Complete pages combining all levels

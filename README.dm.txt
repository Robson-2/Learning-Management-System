# Amasiko Group - Learning Management System

A modern, full-featured Learning Management System (LMS) built for Amasiko Group, a 100% Black female-owned enterprise delivering high-quality training, recruitment, and development solutions across South Africa.

## 🌟 Features

- **Comprehensive Training Programs** - Browse and explore 30+ live qualification programs and 85+ cross-skilling courses
- **Multi-Service Platform** - Skills development, recruitment, construction, and media & branding services
- **User Authentication** - Secure sign-in and user management system
- **Responsive Design** - Fully responsive interface optimized for mobile, tablet, and desktop
- **Dark Mode Support** - Built-in theme switching for user preference
- **Modern UI Components** - Powered by shadcn/ui for consistent, accessible design
- **Contact Management** - Multiple office locations with integrated contact information

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Fonts**: Geist Sans, Geist Mono, Manrope
- **Theme**: next-themes for dark mode support
- **Icons**: Emoji-based icon system

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## 🛠️ Installation

### Option 1: Using shadcn CLI (Recommended)

1. Download the project ZIP from v0
2. Extract the files to your desired location
3. Run the shadcn CLI setup command:

\`\`\`bash
npx shadcn@latest init
\`\`\`

4. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### Option 2: Manual Setup

1. Clone the repository:

\`\`\`bash
git clone <your-repo-url>
cd my-lms-app
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

## 🏃 Running the Development Server

Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

\`\`\`
my-lms-app/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── gallery/        # Gallery page
│   ├── services/       # Services page
│   ├── signin/         # Sign-in page
│   ├── training/       # Training programs page
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles and theme variables
├── components/
│   ├── ui/             # shadcn/ui components
│   └── navigation.tsx  # Main navigation component
├── contexts/
│   └── auth-context.tsx # Authentication context provider
├── hooks/
│   ├── use-mobile.tsx  # Mobile detection hook
│   └── use-toast.ts    # Toast notification hook
├── lib/
│   └── utils.ts        # Utility functions (cn, etc.)
├── public/             # Static assets and images
└── README.md           # This file
\`\`\`

## 🎨 Customization

### Theme Colors

The primary brand color is defined throughout the application as `#27586B`. To change the theme:

1. Update the color values in `app/globals.css`
2. Modify inline styles in component files
3. Adjust Tailwind configuration in `tailwind.config.ts`

### Fonts

The project uses three font families:
- **Geist Sans** - Primary sans-serif font
- **Geist Mono** - Monospace font
- **Manrope** - Secondary display font

Fonts are configured in `app/layout.tsx`.



Your application will be live in minutes!

### Alternative Deployment Options

This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Digital Ocean App Platform

## 📊 Key Statistics

- **30+** Live Qualification Programs
- **85+** Cross-Skilling Courses
- **1,500+** Delegates Trained
- **23** Years of Excellence

## 🏢 About Amasiko Group

Amasiko Group is a 100% Black female-owned enterprise (Level 1 B-BBEE) committed to empowering excellence through skills development. With 23 years of experience, we deliver comprehensive solutions across:

- Skills Development & Training
- Executive Recruitment
- Civil Engineering & Construction
- Media & Branding Services

### Contact Information

**Johannesburg Office**
- Howard House, Office No. 206, 2nd Floor
- 23 Loveday Street, Marshalltown
- Johannesburg, 2107
- Phone: +27 11 492 1264

**Durban Office**
- Commercial City Building, Office No. 1138
- 45 Dr AB Xuma Street
- Durban, 4001
- Phone: +27 31 301 1408

**Email**: admin@amasiko.co.za

## 📝 License

© 2025 Amasiko Group. All rights reserved.

## 🤝 Support

For technical support or inquiries, please contact us through the contact form on the website or email admin@amasiko.co.za.

---


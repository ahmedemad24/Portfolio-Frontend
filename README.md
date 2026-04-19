# AI Portfolio - Modern Frontend Developer Portfolio

A stunning, futuristic personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a dark theme with AI-inspired design, gradient glow effects, glassmorphism, and smooth animations.

![Portfolio Preview](./preview.png)

## ✨ Features

- **Modern Design**: Dark theme with purple/blue gradient glow effects
- **Glassmorphism**: Beautiful blur and transparency effects throughout
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth transitions
- **Fully Responsive**: Looks great on all devices
- **Scroll Reveal**: Elements animate as you scroll
- **Loading Screen**: Custom animated loading experience
- **Project Modal**: Detailed project view with links
- **Contact Form**: Integrated with EmailJS (client-side email service)
- **Data-Driven**: All content loaded from local JSON files

## 🛠️ Tech Stack

- **React** (Vite) - Fast, modern React development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **EmailJS** - Client-side email integration
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Technologies.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   └── ProjectModal.jsx
├── data/            # JSON data files
│   ├── personal-info.json
│   ├── skills.json
│   ├── technologies.json
│   ├── projects.json
│   └── experience.json
├── hooks/           # Custom React hooks
│   ├── useAnimation.js
│   └── useScroll.js
├── App.jsx          # Main application component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-portfolio
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

## 📧 EmailJS Setup

To enable the contact form to send emails:

1. Create an account at [EmailJS](https://www.emailjs.com/)

2. Create a new Email Service (e.g., Gmail)

3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content

4. Update the credentials in `src/components/Contact.jsx`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

5. Uncomment the EmailJS code in the `handleSubmit` function:

```javascript
await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  },
  EMAILJS_PUBLIC_KEY
);
```

## 📝 Customization

### Personal Information

Edit `src/data/personal-info.json` to update:
- Name, title, tagline
- Bio and location
- Social media links

### Skills

Edit `src/data/skills.json` to add/remove skills with proficiency levels.

### Projects

Edit `src/data/projects.json` to showcase your projects:
- Title, description, image
- Technologies used
- Live and GitHub links
- Featured status

### Experience

Edit `src/data/experience.json` to update your work history:
- Company, position
- Dates and achievements
- Job descriptions

### Technologies

Edit `src/data/technologies.json` to display your tech stack.

## 🎨 Color Scheme

The portfolio uses a custom color palette:

- **Background**: `#0a0a0f` (Deep dark blue-black)
- **Primary**: `#8b5cf6` (Purple)
- **Secondary**: `#3b82f6` (Blue)
- **Accent**: `#06b6d4` (Cyan)

Modify these in `src/index.css` CSS variables.

## 📦 Build & Deploy

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

## 🌟 Key Features Explained

### Glassmorphism Effect

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradient Text

```css
.gradient-text {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Scroll Animations

Using Framer Motion's `whileInView`:

```jsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

MIT License - feel free to use this template for your personal portfolio.

## 👨‍💻 Author

**Alex Chen**
- GitHub: [@alexchen](https://github.com/alexchen)
- LinkedIn: [alexchen](https://linkedin.com/in/alexchen)
- Twitter: [@alexchen](https://twitter.com/alexchen)

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion

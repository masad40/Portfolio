# Professional Portfolio Website

A modern, fully responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, contact form with EmailJS, and project detail pages.

## ✨ Features

- **🎨 Modern Design**: Clean, premium UI with glassmorphism effects and beautiful gradients
- **🌙 Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎭 Smooth Animations**: Powered by Framer Motion for page transitions and scroll animations
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds
- **📧 Contact Form**: Working contact form using EmailJS (no backend required)
- **🎯 SEO Optimized**: Meta tags and proper HTML structure for search engines
- **✨ Particles Background**: Subtle animated particles background
- **📄 Project Details**: Individual pages for each project with detailed information
- **🔝 Back to Top**: Smooth scroll to top button

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM v6+** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Contact form service
- **React Typed** - Typing animation
- **React Hot Toast** - Toast notifications
- **TSParticles** - Particle effects

## 📦 Installation

1. **Clone the repository** (or use this template):
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### 1. Personalize Your Portfolio

#### Update Personal Information

1. **Name & Title** - Edit `src/components/Hero.jsx`:
   ```jsx
   <h1>Hi, I'm <span>Your Name</span></h1>
   <p>MERN Stack Developer</p>
   ```

2. **Social Links** - Update URLs in `src/components/Hero.jsx` and `src/components/Footer.jsx`:
   ```jsx
   const socialLinks = [
     { icon: FaGithub, url: "https://github.com/yourusername" },
     { icon: FaLinkedin, url: "https://linkedin.com/in/yourusername" },
     // ... update all social links
   ];
   ```

3. **About Section** - Edit `src/components/About.jsx` with your story and hobbies

4. **Education** - Update `src/components/Education.jsx` with your academic details

5. **Experience** - Update `src/components/Experience.jsx` with your work history

6. **Skills** - Modify `src/components/Skills.jsx` to match your skill set and proficiency levels

#### Update Meta Tags

Edit `index.html` to update SEO meta tags:
```html
<meta name="description" content="Your portfolio description" />
<meta name="author" content="Your Name" />
<title>Your Name - MERN Stack Developer | Portfolio</title>
```

### 2. Add Your Images

Create the following folders in the `public` directory:
```
public/
  ├── me.jpg (Your profile photo - recommended: 400x400px)
  ├── about-image.jpg (About section image - recommended: 800x600px)
  ├── resume.pdf (Your resume)
  └── projects/
      ├── importwave.png
      ├── taskify.png
      └── foodie.png
```

**Image Recommendations:**
- Profile photo: Square image (400x400px minimum)
- Project images: 1200x600px or 16:9 aspect ratio
- About image: 800x600px or 4:3 aspect ratio

### 3. Configure EmailJS

The contact form uses EmailJS to send emails without a backend. Follow these steps:

1. **Create an EmailJS account**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**:
   - Go to Email Services
   - Add a new service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use these variables: `{{user_name}}`, `{{user_email}}`, `{{message}}`
   - Note your Template ID

4. **Get your Public Key**:
   - Go to Account → API Keys
   - Copy your Public Key

5. **Add credentials to your project**:

   **Option A: Environment Variables (Recommended)**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   **Option B: Direct Update**
   
   Update `src/components/Contact.jsx`:
   ```jsx
   emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     formRef.current,
     "YOUR_PUBLIC_KEY"
   )
   ```

### 4. Update Projects Data

Edit `src/data/projects.js` to add your projects:
```javascript
export const projects = [
  {
    id: "unique-project-id",
    title: "Project Name",
    image: "/projects/project-image.png",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Short description...",
    fullDescription: "Long detailed description...",
    live: "https://asaduzzaman-40.netlify.app/",
    repo: "https://github.com/masad40/Portfolio.git",
    challenges: ["Challenge 1", "Challenge 2"],
    future: ["Future improvement 1", "Future improvement 2"],
  },
  // Add more projects...
];
```

### 5. Update Contact Information

Edit `src/components/Contact.jsx`:
```jsx
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-8900",
    href: "tel:+12345678900",
  },
  // Update with your contact info
];
```

### 6. Update Footer

Edit `src/components/Footer.jsx`:
```jsx
<p>© {currentYear} Your Name. All rights reserved.</p>
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    DEFAULT: '#6366f1', // Your primary color
    // ... other shades
  },
}
```

### Fonts

The project uses Inter font. To change:
1. Update the Google Fonts link in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

### Animations

Animations are powered by Framer Motion. Adjust animation timing in component files:
```jsx
transition={{ duration: 0.6, delay: 0.2 }}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git → Import repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`

## 📝 Project Structure

```
Portfolio/
├── public/
│   ├── me.jpg
│   ├── resume.pdf
│   └── projects/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticlesBg.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── projects.js
│   ├── pages/
│   │   └── ProjectDetail.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🐛 Troubleshooting

### EmailJS not working?
- Verify your Service ID, Template ID, and Public Key
- Check browser console for errors
- Ensure template variables match: `{{user_name}}`, `{{user_email}}`, `{{message}}`

### Images not loading?
- Ensure images are in the `public` folder
- Use relative paths starting with `/` (e.g., `/me.jpg`)
- Check file names match exactly (case-sensitive)

### Build errors?
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires Node 16+)
- Update dependencies: `npm update`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Particles by [TSParticles](https://particles.js.org/)

## 📧 Contact

For questions or support, feel free to reach out!

---

**Happy Coding! 🚀**

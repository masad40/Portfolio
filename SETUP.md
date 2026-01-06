# Quick Setup Guide

## 🚀 Getting Started (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Your Assets

Create these files in the `public` folder:
- `public/me.jpg` - Your profile photo (400x400px recommended)
- `public/about-image.jpg` - About section image (800x600px recommended)
- `public/resume.pdf` - Your resume
- `public/projects/` - Add your project images here

### Step 3: Personalize Content

1. **Update Your Name & Info**:
   - `src/components/Hero.jsx` - Change name, title, social links
   - `src/components/About.jsx` - Update your story
   - `src/components/Contact.jsx` - Update contact info

2. **Update Your Projects**:
   - Edit `src/data/projects.js` with your project details
   - Add project images to `public/projects/`

3. **Update Education & Experience**:
   - `src/components/Education.jsx`
   - `src/components/Experience.jsx`

4. **Update Skills**:
   - `src/components/Skills.jsx` - Modify skill list and proficiency levels

### Step 4: Configure EmailJS (Optional but Recommended)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service and Template
3. Get your Service ID, Template ID, and Public Key
4. Create a `.env` file in the root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Step 5: Update Meta Tags

Edit `index.html`:
- Update title
- Update description
- Update author

### Step 6: Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📝 Checklist

- [ ] Installed dependencies
- [ ] Added profile photo (`public/me.jpg`)
- [ ] Added resume (`public/resume.pdf`)
- [ ] Added project images
- [ ] Updated personal information in Hero component
- [ ] Updated About section
- [ ] Updated Education section
- [ ] Updated Experience section
- [ ] Updated Skills section
- [ ] Updated Projects data
- [ ] Updated Contact information
- [ ] Configured EmailJS (optional)
- [ ] Updated meta tags in `index.html`
- [ ] Tested on mobile and desktop

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.js` to change the primary color
- **Fonts**: Update Google Fonts link in `index.html`
- **Animations**: Adjust timing in component files
- **Layout**: Modify component layouts in respective `.jsx` files

## 🚀 Ready to Deploy?

See the main README.md for deployment instructions to Vercel, Netlify, or GitHub Pages.


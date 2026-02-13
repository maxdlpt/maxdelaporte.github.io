# Personal Website Setup Guide

## 🎯 Project Structure

Your website is organized as follows:

```
PersWebsite/
├── index.html           # Main website page
├── css/
│   └── style.css        # Styling and responsive design
├── js/
│   └── script.js        # Interactive features
├── images/              # Folder for your photos and project images
│   ├── hero-image.jpg   # Your main profile photo (recommended: 600x800px)
│   ├── project-1.jpg    # Portfolio project images
│   ├── project-2.jpg
│   └── project-3.jpg
└── README.md            # This file
```

## 📋 Step-by-Step Setup Instructions

### Step 1: Customize Your Personal Information

Edit `index.html` and replace:
- **"your name"** in the header logo with your actual name
- **"COPYWRITER"** with your professional title/role
- All section content with your own information

Example sections to customize:
- Hero section: Change headline and description
- About section: Add your background and story
- Services: List your actual services/offerings
- Portfolio: Add your projects and descriptions
- Contact section: Your contact information

### Step 2: Add Your Images

Create or add images to the `images/` folder:

1. **Hero Image** (`hero-image.jpg`)
   - Your professional photo or portrait
   - Recommended size: 600x800px (portrait orientation)
   - Should match the professional style of your brand

2. **Portfolio Images** (`project-1.jpg`, `project-2.jpg`, `project-3.jpg`)
   - Showcase your best work
   - Recommended size: 400x300px minimum
   - Can be client work, case studies, or creative samples

**How to add images:**
- Take/download your desired images
- Save them in the `images/` folder
- Update the file references in `index.html` if you use different filenames

### Step 3: Customize the Design (Optional)

**Colors:**
- Edit `css/style.css` to change colors
- Key colors to modify:
  - `#8b9b7e` - Primary button/accent color (currently sage green)
  - `#f9f7f4` - Background sections (currently warm beige)
  - `#333` - Text color (currently dark gray)

**Fonts:**
- Currently using system fonts for fast loading
- To use Google Fonts, add to `index.html` `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

**Spacing/Layout:**
- Modify `padding` and `margin` values in CSS for different spacing
- Adjust `grid-template-columns` values for different layouts

### Step 4: Test Locally

1. **Open in a Browser:**
   - Right-click `index.html` → Open with your preferred browser
   - Or drag the file into a browser window

2. **Check Responsiveness:**
   - Resize your browser window to test mobile view
   - Or press F12 (DevTools) → Toggle device toolbar

### Step 5: Publishing Your Website

Once ready to go live, you have several options:

**Free Hosting Options:**
- **Netlify** - Drag & drop deployment, free tier
- **Vercel** - Optimized for modern web projects
- **GitHub Pages** - If you use GitHub
- **Surge.sh** - Simple command-line deployment

**Domain Registration:**
- Namecheap, GoDaddy, Google Domains - $10-15/year typical

**For Netlify (Easiest):**
1. Go to netlify.com
2. Sign up with GitHub or email
3. Drag your `PersWebsite` folder into Netlify
4. Your site goes live instantly
5. Connect a custom domain (optional)

## 🎨 Design Features Included

✅ Professional hero section with image- ✅ Responsive mobile design
✅ Smooth navigation and scrolling
✅ Contact form with validation
✅ Services/portfolio grid layouts
✅ Hover effects and animations
✅ Clean, modern aesthetic
✅ SEO-friendly structure

## 🔧 Common Customizations

### Change Button Color
Find in `css/style.css`:
```css
.cta-button {
    background-color: #8b9b7e;  /* Change this hex color */
}
```

### Add More Services/Portfolio Items
In `index.html`, copy a service card or portfolio item and modify:
```html
<div class="service-card">
    <h3>Your Service Name</h3>
    <p>Your service description here</p>
</div>
```

### Update Contact Form Destination
Currently the form logs to console. To send emails, you'll need:
- A backend service (Node.js, PHP)
- Or use a service like Formspree, Netlify Forms, or EmailJS

## ⚡ Next Steps

1. ✏️ Edit `index.html` with your information
2. 📸 Add your images to the `images/` folder
3. 🎨 Customize colors in `css/style.css` (optional)
4. 🌐 Test in your browser
5. 🚀 Deploy to Netlify or your hosting provider

## 📞 Need Help?

- Check the HTML comments in the files for additional guidance
- Browser DevTools (F12) is great for testing CSS changes live
- Validate HTML at html-validator.com

---

**Your website is ready to customize!** Start with Step 1 above.

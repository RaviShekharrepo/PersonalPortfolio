# 🚀 Ravi Shekhar - Modern React Portfolio

A stunning, fully responsive personal portfolio built with React, featuring modern animations, interactive elements, and a beautiful user experience.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-purple?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism Effects** - Beautiful frosted glass UI elements
- **Gradient Backgrounds** - Dynamic color schemes and gradients
- **Responsive Layout** - Perfect on all devices (mobile, tablet, desktop)
- **Dark/Light Theme Ready** - Easy theme customization
- **Professional Typography** - Inter and Poppins fonts

### 🎭 **Advanced Animations**
- **Framer Motion** - Smooth, performant animations
- **Scroll-triggered Animations** - Elements animate as you scroll
- **Hover Effects** - Interactive elements with micro-animations
- **Dynamic Animated Background** - Multiple layers of animated elements:
  - **Flowing Gradient Background** - Morphing, rotating gradients with blur effects
  - **Floating Geometric Shapes** - Interactive shapes with hover effects and smooth animations
  - **Animated Grid Pattern** - Pulsing grid lines for depth
  - **Glowing Orbs** - Floating light orbs with opacity animations
  - **Mouse Trail Effect** - Interactive cursor trail with gradient dots
- **Typing Animation** - Hero section with typewriter effect
- **Parallax Scrolling** - Depth and visual interest

### 📱 **Interactive Elements**
- **Smooth Scrolling Navigation** - Seamless section transitions
- **Project Filtering** - Filter projects by category
- **Modal Dialogs** - Detailed project information
- **Form Validation** - Real-time contact form validation
- **Toast Notifications** - User feedback and alerts
- **Scroll to Top** - Convenient navigation

### 🛠 **Technical Excellence**
- **React 18** - Latest React features and hooks
- **Performance Optimized** - Lazy loading and code splitting
- **SEO Optimized** - Meta tags and structured data
- **Accessibility** - WCAG compliant design
- **Cross-browser Compatible** - Works on all modern browsers

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravishekhar/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation component
│   ├── Hero.js         # Hero section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects section
│   ├── Experience.js   # Experience timeline
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer component
│   └── ScrollToTop.js  # Scroll to top button
├── data/
│   └── portfolioData.js # Portfolio content data
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details and bio
- Skills and technologies
- Projects and descriptions
- Experience and education
- Contact information
- Social media links

### Styling
- **Colors**: Modify CSS variables in `src/index.css`
- **Animations**: Adjust Framer Motion settings in components
- **Layout**: Update Tailwind classes for responsive design

### Content
- **Projects**: Add/remove projects in the data file
- **Skills**: Update skill categories and proficiency levels
- **Experience**: Modify timeline entries
- **Contact**: Update contact form and social links

## 🚀 Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy Options

#### **Netlify (Recommended)**
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy automatically

#### **Vercel**
```bash
npm install -g vercel
vercel
```

#### **GitHub Pages**
1. Add `homepage` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## 🛠 Technologies Used

### **Frontend**
- **React 18** - UI library
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling

### **Development**
- **Create React App** - Build tool
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **React Hot Toast** - Notifications

### **Performance**
- **React.memo** - Component optimization
- **useCallback/useMemo** - Hook optimization
- **Lazy loading** - Code splitting
- **Image optimization** - WebP support

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Features

- **Lazy Loading** - Components load on demand
- **Optimized Images** - WebP format with fallbacks
- **Minified CSS/JS** - Production builds
- **Caching** - Browser caching strategies
- **CDN Ready** - Static asset optimization

## 🔧 Configuration

### Environment Variables
Create `.env` file for custom configurations:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Custom Domain
Update `public/index.html` meta tags:
```html
<meta property="og:url" content="https://yourdomain.com" />
<meta property="twitter:url" content="https://yourdomain.com" />
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** - For amazing animations
- **Tailwind CSS** - For utility-first styling
- **React Icons** - For beautiful icons
- **React Hot Toast** - For notifications
- **React Scroll** - For smooth scrolling

## 📞 Contact

- **Email**: ravishekharcvbokaro@gmail.com
- **LinkedIn**: [Ravi Shekhar](https://www.linkedin.com/in/ravi-shekhar-79a671354/)
- **GitHub**: [@ravishekhar](https://github.com/ravishekhar)
- **Instagram**: [@smartravishekhar](https://www.instagram.com/smartravishekhar/)

---

**Made with ❤️ by Ravi Shekhar**

*Feel free to use this template for your own portfolio!*

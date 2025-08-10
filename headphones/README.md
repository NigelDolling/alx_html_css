# 🎧 Headphones Website Project

A modern, responsive headphones website built from scratch using HTML, CSS, and vanilla JavaScript. This project demonstrates progressive enhancement through multiple versions, each adding new features and improvements.

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [File Structure](#-file-structure)
- [Version History](#-version-history)
- [Technologies Used](#-technologies-used)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Responsive Design](#-responsive-design)
- [Custom Icon Font](#-custom-icon-font)
- [Animations](#-animations)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)

## 🎯 Project Overview

This project implements a complete headphones website from scratch without any external libraries or frameworks. It showcases modern web development techniques including responsive design, CSS animations, custom icon fonts, and interactive JavaScript functionality.

The website features a hero section, service showcase, results display, contact form, and footer with social media integration. Each version builds upon the previous one, demonstrating progressive enhancement and best practices in web development.

## ✨ Features

### Core Features
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Custom Icon Font**: Integration of `holberton_school-icon` font with 21 glyphs
- **CSS Animations**: Smooth transitions, hover effects, and keyframe animations
- **Interactive Elements**: Hamburger menu, form interactions, and hover states
- **Modern CSS**: Flexbox layouts, CSS Grid, clip-path shapes, and gradients
- **Accessibility**: Semantic HTML, proper alt texts, and keyboard navigation
- **Performance Optimized**: Lightweight code, optimized images, and efficient CSS

### Advanced Features
- **CSS Pentagon Shapes**: Custom geometric shapes using clip-path
- **Hamburger Menu**: Mobile navigation with smooth animations
- **Staggered Animations**: Sequential element animations for visual appeal
- **Form Styling**: Modern input designs with focus states
- **Social Media Integration**: Icon-based social media links
- **Cross-browser Compatibility**: Tested across modern browsers

## 📁 File Structure

```
headphones/
├── images/                          # Image assets
│   ├── logo_headphones.png         # Company logo
│   ├── headphones_hero_1.jpg       # Hero section background
│   ├── headphones_hero_2.jpg       # Results section background
│   └── pentagone.png               # Pentagon shape image
├── holberton_school-icon/          # Custom icon font
│   ├── fonts/                      # Font files
│   ├── style.css                   # Icon font CSS
│   └── demo.html                   # Icon demonstration
├── 1-index.html                    # Version 1: Basic structure + What We Do
├── 1-styles.css                    # Version 1: Basic styling
├── 2-index.html                    # Version 2: + Our Results section
├── 2-styles.css                    # Version 2: + Results styling
├── 3-index.html                    # Version 3: + Contact form
├── 3-styles.css                    # Version 3: + Contact styling
├── 4-index.html                    # Version 4: + Footer with social icons
├── 4-styles.css                    # Version 4: + Footer styling
├── 6-index.html                    # Version 6: CSS pentagons
├── 6-styles.css                    # Version 6: Pentagon shapes
├── 7-index.html                    # Version 7: + Animations
├── 7-styles.css                    # Version 7: + Animation effects
├── 8-index.html                    # Version 8: + Hamburger menu
├── 8-styles.css                    # Version 8: + Mobile navigation
├── 8-script.js                     # JavaScript for hamburger menu
├── demo.html                       # Icon font demonstration
├── Read Me.txt                     # Icon font usage instructions
└── README.md                       # This file
```

## 🔄 Version History

### Version 1 (`1-index.html`, `1-styles.css`)
- **Basic Structure**: Header, hero section, navigation
- **What We Do Section**: Service showcase with custom icons
- **Icon Integration**: holberton_school-icon font implementation
- **Responsive Foundation**: Mobile-first CSS structure

### Version 2 (`2-index.html`, `2-styles.css`)
- **Our Results Section**: Statistics display with pentagon images
- **Hero Background**: Added background image with overlay
- **Grid Layout**: Flexbox-based responsive grid system
- **Enhanced Typography**: Improved font sizing and spacing

### Version 3 (`3-index.html`, `3-styles.css`)
- **Contact Form**: Input fields, textarea, and submit button
- **Modern Form Design**: Underline-only borders with focus states
- **Form Validation**: CSS-based visual feedback
- **Improved Layout**: Better section spacing and alignment

### Version 4 (`4-index.html`, `4-styles.css`)
- **Footer Section**: Company logo and social media icons
- **Social Integration**: Facebook, Twitter, Instagram icons
- **Footer Layout**: Responsive design with centered elements
- **Copyright Notice**: Styled copyright text

### Version 6 (`6-index.html`, `6-styles.css`)
- **CSS Pentagons**: Replaced images with CSS clip-path shapes
- **Geometric Precision**: Perfect pentagon geometry using clip-path
- **Performance Improvement**: Reduced image dependencies
- **Scalable Shapes**: Vector-based pentagon implementation

### Version 7 (`7-index.html`, `7-styles.css`)
- **Animation System**: Comprehensive CSS animations
- **Hover Effects**: Interactive element responses
- **Keyframe Animations**: Floating, bouncing, and sliding effects
- **Staggered Timing**: Sequential animation delays for visual flow

### Version 8 (`8-index.html`, `8-styles.css`, `8-script.js`)
- **Hamburger Menu**: Mobile navigation system
- **JavaScript Integration**: Vanilla JS for menu functionality
- **Mobile Optimization**: Enhanced mobile user experience
- **Touch Interactions**: Mobile-friendly navigation controls

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Custom Fonts**: holberton_school-icon font integration

### CSS Features
- **Flexbox & Grid**: Modern layout systems
- **CSS Animations**: Keyframes and transitions
- **Media Queries**: Responsive breakpoints
- **CSS Variables**: Maintainable color schemes
- **Clip-path**: Custom geometric shapes
- **Backdrop Filter**: Modern blur effects

### JavaScript Features
- **DOM Manipulation**: Element selection and modification
- **Event Listeners**: User interaction handling
- **Class Toggling**: Dynamic styling changes
- **Responsive Handling**: Window resize events

## 🚀 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for testing)

### Quick Start
1. **Clone or Download** the project files
2. **Navigate** to the headphones folder
3. **Open** any HTML file in your browser
4. **For local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

### File Dependencies
- Ensure `images/` folder contains all required images
- Keep `holberton_school-icon/` folder for icon fonts
- Maintain relative file paths for proper linking

## 📱 Usage

### Viewing Different Versions
- **Version 1**: Basic structure with "What We Do" section
- **Version 2**: Adds "Our Results" with pentagon images
- **Version 3**: Includes contact form
- **Version 4**: Complete with footer and social icons
- **Version 6**: CSS pentagons instead of images
- **Version 7**: Enhanced with animations
- **Version 8**: Mobile-optimized with hamburger menu

### Testing Responsive Design
1. **Desktop**: View at full screen (>768px)
2. **Tablet**: Resize browser to 768px width
3. **Mobile**: Resize to 480px or use browser dev tools
4. **Hamburger Menu**: Test on screens ≤480px

### Interactive Features
- **Navigation**: Click nav links to scroll to sections
- **Hamburger Menu**: Click to toggle mobile navigation
- **Hover Effects**: Hover over icons and buttons
- **Form Interactions**: Focus on input fields
- **Social Icons**: Hover over footer social media icons

## 📱 Responsive Design

### Breakpoints
- **Mobile**: ≤480px (Hamburger menu active)
- **Tablet**: 481px - 768px
- **Desktop**: >768px

### Mobile Features
- **Hamburger Navigation**: 3-line menu icon
- **Full-screen Overlay**: Blurred background menu
- **Touch-friendly**: Large tap targets
- **Stacked Layout**: Vertical element arrangement

### Tablet Optimizations
- **Flexible Grid**: Responsive column layouts
- **Scaled Elements**: Appropriate sizing for medium screens
- **Touch Interactions**: Optimized for tablet use

### Desktop Enhancements
- **Horizontal Layout**: Full navigation bar
- **Hover States**: Rich interactive feedback
- **Large Displays**: Optimized for wide screens

## 🎨 Custom Icon Font

### holberton_school-icon Font
- **Total Glyphs**: 21 custom icons
- **Key Icons**: Sound, Video, Music, Hearing
- **Social Icons**: Facebook, Twitter, Instagram
- **Format**: Web font with CSS classes

### Usage
```html
<!-- Link the icon font CSS -->
<link rel="stylesheet" href="holberton_school-icon/style.css">

<!-- Use icons with span elements -->
<span class="holberton_school-icon-ic_sound"></span>
<span class="holberton_school-icon-ic_video"></span>
<span class="holberton_school-icon-ic_music"></span>
<span class="holberton_school-icon-ic_hearing"></span>
```

### Icon Classes
- `holberton_school-icon-ic_sound` - Sound/Audio icon
- `holberton_school-icon-ic_video` - Video icon
- `holberton_school-icon-ic_music` - Music note icon
- `holberton_school-icon-ic_hearing` - Hearing/Ear icon
- `holberton_school-icon-ic_facebook` - Facebook icon
- `holberton_school-icon-ic_twitter` - Twitter icon
- `holberton_school-icon-ic_instagram` - Instagram icon

## 🎬 Animations

### What We Do Section
- **Floating Icons**: Continuous up-down motion
- **Staggered Delays**: Icons start floating at different times
- **Hover Rotation**: 360° spin with scaling on hover
- **Color Transitions**: Smooth color changes
- **Lift Effect**: Items rise with shadow on hover

### Our Results Section
- **Slide-in Entrance**: Items appear from bottom
- **Pentagon Pulse**: Continuous opacity animation
- **Bouncing Stats**: Percentage numbers bounce
- **Hover Scaling**: Items grow and rotate on hover
- **Staggered Appearance**: Sequential item reveals

### Navigation & UI
- **Hamburger Transform**: 3-line to X animation
- **Menu Slide**: Full-screen overlay transition
- **Button Hover**: Scale and shadow effects
- **Form Focus**: Border color transitions

### Animation Timing
- **Duration**: 0.3s for interactions, 2-3s for continuous
- **Easing**: CSS ease functions for natural motion
- **Delays**: Staggered timing for visual flow
- **Performance**: GPU-accelerated transforms

## 🌐 Browser Support

### Fully Supported
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

### CSS Features
- **Flexbox**: Full support
- **CSS Grid**: Modern browsers
- **Clip-path**: Webkit and modern browsers
- **Backdrop Filter**: Limited support (graceful degradation)

### JavaScript Features
- **ES6**: Arrow functions, const/let
- **DOM Methods**: Modern selector APIs
- **Event Listeners**: Standard event handling

## 🤝 Contributing

### Development Guidelines
1. **Maintain Version Structure**: Keep numbered versions intact
2. **Follow Naming Conventions**: Use consistent file naming
3. **Responsive First**: Test on mobile devices
4. **Performance Focus**: Optimize images and CSS
5. **Accessibility**: Ensure semantic HTML and keyboard navigation

### Code Style
- **Indentation**: 4 spaces for HTML/CSS, 2 spaces for JS
- **Comments**: Document complex CSS and JavaScript
- **Organization**: Group related styles together
- **Naming**: Use descriptive class and variable names

### Testing Checklist
- [ ] All versions load correctly
- [ ] Responsive design works on all breakpoints
- [ ] Hamburger menu functions properly
- [ ] Animations are smooth and performant
- [ ] Icons display correctly
- [ ] Forms are accessible and functional
- [ ] Cross-browser compatibility verified

---

## 📄 License

This project is created for educational purposes. All images and icons are used for demonstration only.

## 📞 Contact

For questions or contributions, please refer to the project documentation or create an issue in the repository.

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**

**Author:** [Nigel Dolling](https://github.com/nigel-dolling)
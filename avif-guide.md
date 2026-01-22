# AVIF Image Format Implementation Guide

## Overview
This document explains how to implement AVIF (AV1 Image File Format) in your React project for improved performance and image quality.

## Benefits of AVIF
- Up to 50% smaller file sizes compared to JPEG at the same quality
- Better visual quality at the same file size
- Supports transparency and animations
- Open source and royalty-free
- Wider color gamut support

## Implementation

### 1. Using the Custom Image Component
We've created a custom Image component that automatically serves AVIF format with fallbacks:

```jsx
import Image from './components/Image';

// Usage
<Image 
  src="/path/to/image.png" 
  alt="Description" 
  className="your-classes"
/>
```

The component automatically:
- Tries to load AVIF format first
- Falls back to WebP if AVIF isn't supported
- Falls back to the original format as a last resort

### 2. Using Cloudinary for Dynamic Image Optimization
For dynamic image optimization, we've created a CloudinaryImage component:

```jsx
import CloudinaryImage from './components/CloudinaryImage';

// Usage
<CloudinaryImage 
  publicId="your-image-public-id" 
  alt="Description" 
  transformations={[
    // Add transformations here
  ]}
/>
```

## Converting Images to AVIF

### Automated Conversion (Recommended)
We've provided a script to automatically convert all your images to AVIF format:

```bash
node convert-to-avif.js
```

This script will:
- Find all PNG, JPG, JPEG, GIF, and WebP images in your public directory
- Convert them to AVIF format with high quality settings
- Save them alongside the original files

### Manual Conversion
If you prefer manual conversion, you can use online tools like:
- Squoosh (https://squoosh.app/)
- AVIF encoder tools
- ImageMagick with AVIF support

### Cloudinary Automatic Format Selection
With Cloudinary, you can automatically deliver the optimal format based on browser support:

```javascript
// In CloudinaryImage component
image.delivery(format('auto')).delivery(quality('auto'));
```

## Browser Support
AVIF is supported in:
- Chrome 85+
- Firefox 93+
- Safari 16.5+
- Edge 85+

For browsers that don't support AVIF, our Image component provides fallbacks.

## Best Practices

1. **Always use the custom Image component** instead of regular `<img>` tags
2. **Keep original images** as fallbacks
3. **Optimize images** for web delivery
4. **Consider lazy loading** for images below the fold
5. **Use appropriate image dimensions** to avoid unnecessary scaling

## Environment Variables (for Cloudinary)
Add to your `.env` file:
```
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

## Testing AVIF Implementation
1. Check browser developer tools Network tab to see which format is being loaded
2. Compare file sizes between original and AVIF versions
3. Verify fallback behavior in unsupported browsers
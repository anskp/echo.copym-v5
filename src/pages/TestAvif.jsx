import React, { useEffect } from 'react';
import Image from '../components/Image';

const TestAvif = () => {
  useEffect(() => {
    // Function to check if AVIF is supported in the browser
    const checkAvifSupport = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return false;
      
      // Draw a simple shape
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 1, 1);
      
      try {
        // Check if the browser supports AVIF
        const avifSupported = canvas.toDataURL('image/avif').startsWith('data:image/avif');
        console.log('AVIF supported:', avifSupported);
        return avifSupported;
      } catch (e) {
        console.log('AVIF not supported:', e.message);
        return false;
      }
    };

    console.log('Browser supports AVIF:', checkAvifSupport());
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>AVIF Test Page</h2>
      <p>This page tests if AVIF images are loading correctly.</p>
      
      {/* Test with an image from your assets */}
      <div>
        <h3>Test Image:</h3>
        <Image 
          src="/assets/copym/png/Copym-01-1.png" 
          alt="Test AVIF Image" 
          style={{ maxWidth: '300px', border: '1px solid #ccc' }}
        />
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h3>How to verify AVIF is working:</h3>
        <ol>
          <li>Open browser Developer Tools (F12)</li>
          <li>Go to the Network tab</li>
          <li>Refresh the page</li>
          <li>Look for image requests - you should see .avif files being loaded if your browser supports AVIF</li>
          <li>If .avif files don't appear, you'll see the original .png/.jpg files instead</li>
        </ol>
      </div>
    </div>
  );
};

export default TestAvif;
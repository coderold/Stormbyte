import { useEffect, useRef } from 'react';

const AdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Set the global Adsterra options
    window.atOptions = {
      key: '9f3faa17675d48546f127fd204927c2a',
      format: 'iframe',
      height: 60,
      width: 468,
      params: {}
    };

    // Create and append the ad script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//www.highperformanceformat.com/9f3faa17675d48546f127fd204927c2a/invoke.js';
    script.async = true;
    if (adRef.current) {
      adRef.current.innerHTML = ''; // Clear previous script if re-rendered
      adRef.current.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={adRef}
      style={{ width: 468, height: 60, overflow: 'hidden', margin: '0 auto' }}
    />
  );
};

export default AdBanner

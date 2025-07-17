import { useEffect } from 'react';

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.profitableratecpm.com/gay8y8bd?key=59ce0e8e1e6e0d48df7e6244098ab5ae';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Nothing to render visibly
};

export default AdsterraAd;

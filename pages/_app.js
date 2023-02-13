import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function AmaSundaysMarket({ Component, pageProps }) {
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default AmaSundaysMarket;

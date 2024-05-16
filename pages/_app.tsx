import { AppProps } from 'next/app';
import { ClerkProvider, ClerkProviderProps } from '@clerk/clerk-react';
import Layout from './Layout';
import '../styles/globals.css';
import { useRouter } from 'next/router'; // Import useRouter

const publicPages = ['/signin', '/signup', '/index'];

function MyApp({ Component, pageProps }: AppProps & ClerkProviderProps) {
  const { pathname } = useRouter(); // Use useRouter to get the current pathname

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} {...pageProps}>
      {publicPages.includes(pathname) ? (
        <Component {...pageProps} /> // Render only the component for public pages
      ) : (
        <Layout>
          <Component {...pageProps} /> 
        </Layout>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
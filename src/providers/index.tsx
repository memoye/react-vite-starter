import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

export default function AllProviders() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

import { HelmetProvider } from 'react-helmet-async';

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HelmetProvider>{children}</HelmetProvider>;
}

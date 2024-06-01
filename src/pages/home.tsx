import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/icons/logo-icon.svg" />
        <title>Home Page</title>
      </Helmet>
      Home
      <Link to="/login">Login</Link>
    </div>
  );
}

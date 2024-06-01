import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login Page</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/icons/logo-icon-white.svg"
        />
      </Helmet>
      <Link to="/">Home</Link>
      Login
    </div>
  );
}

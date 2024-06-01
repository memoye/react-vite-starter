import Logo from './assets/logo/Logo';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      Hello World
      <h1>
        <Logo />
      </h1>
      <Outlet />
    </div>
  );
}

export default App;

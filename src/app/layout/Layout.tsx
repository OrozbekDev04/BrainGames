import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="container">
      <header>Game Brain</header>
      
      <main>
        <Outlet />
      </main>

      <footer>© 2025 </footer>
    </div>
  );
};
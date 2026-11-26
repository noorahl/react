import {NavLink, Outlet} from 'react-router';

const Layout = () => {
  return (
    <>
      <header>
        <h1>Otsikko</h1>
        <nav>
          <ul>
            <li>
              <NavLink className="hover:bg-slate-950 flex" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Upload</NavLink>
            </li>
            <li>
              <NavLink to="/demo">Demo</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;

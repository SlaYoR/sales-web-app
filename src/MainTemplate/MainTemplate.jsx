import { Link, Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol></ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counters">Counters</Link>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>COPYRIGHT</footer>
    </>
  );
}

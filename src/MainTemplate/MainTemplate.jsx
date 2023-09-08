import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./styles.css";

export default function MainTemplate() {
  const { pathname } = useLocation();

  const menu = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/counters",
      label: "Counters",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <ol>
            {menu.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  // className={`menu-item ${to === pathname ? "current" : ""}`}
                  className={clsx("menu-item", { current: to === pathname })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>COPYRIGHT</footer>
    </>
  );
}

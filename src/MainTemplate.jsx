import { Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <header>
        <nav>
          <ol></ol>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>COPYRIGHT</footer>
    </>
  );
}

import { Outlet } from '@modern-js/runtime/router';
import './main.css'

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

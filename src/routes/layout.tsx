import { Outlet } from '@modern-js/runtime/router';
import { SideNav } from '@/components/ui/internal/side-nav/side-nav';
import { HeaderSimple } from '@/components/ui/internal/header-simple';
import { Content } from '@/components/ui/internal/content';
import { Helmet } from '@modern-js/runtime/head';

import "./index.css"

export default function Layout() {
  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <main className={`h-screen from-blue-500/60 to-slate-300/60 bg-gradient-to-tr flex justify-center`}>
        <div className="h-full w-full backdrop-blur-4 flex md:max-w-[1400px]">
          <SideNav />
          <div className="flex flex-col gap-7 flex-1 px-3">
            <HeaderSimple />
            <Content>
              <Outlet />
            </Content>
          </div>
        </div>
      </main>
    </div>
  );
}

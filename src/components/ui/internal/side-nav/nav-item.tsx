import { NavLink } from "@modern-js/runtime/router";
import path from "path";

export type navItemProps = {
    factorIcon: () => React.ReactNode,
    path: string
}

export function NavItem({ factorIcon, path }: navItemProps) {
    return (
        <NavLink to={path} >
            <div className="rounded-full bg-zinc-50 h-12 w-12 flex items-center justify-center cursor-pointer">
                {factorIcon()}
            </div>
        </NavLink>
    )
}
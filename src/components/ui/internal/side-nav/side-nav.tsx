import { IoExitOutline } from "react-icons/io5";
import { PiHouseSimpleLight } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { NavItem } from "./nav-item";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import image from "../../../../images/erickAvatar.jpg";

export function SideNav() {

    return (
        <div className="flex flex-col items-center w-32 h-full py-4">
            <div className="h-fit w-fit rounded-full overflow-hidden" >
                <Avatar>
                    <AvatarImage src={image} alt="@shadcn" height={48} width={48}/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <div className="flex flex-col flex-1 items-center justify-center gap-3">
                <NavItem factorIcon={() => <PiHouseSimpleLight />} />
                <NavItem factorIcon={() => <GrAppsRounded />} />
                <NavItem factorIcon={() => <SlEnergy />} />
            </div>

            <div className="flex items-center justify-center h-24">
                <NavItem factorIcon={() => <IoExitOutline />} />
            </div>
        </div>
    )
}
import Link from "next/link";
import NavLinks from "./navlinks";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}

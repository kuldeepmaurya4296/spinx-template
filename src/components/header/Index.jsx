import { getNavbarData } from "@/utills/getNavbarData";
import Header from "./Header";

export default async function Navbar() {
    const navbarData = await getNavbarData();
    // console.log('navbarData------', navbarData);
    return(
        <Header navItems={navbarData}/>
    )
}
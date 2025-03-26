import { getNavbarData } from "@/utills/getNavbarData";
import Header from "./Header";
import { getAllExperties } from "@/utills/experties";

export default async function Navbar() {
    const navbarData = await getNavbarData();
    const experties = await getAllExperties()
    // console.log('expertiesItem------', experties);
    return(
        <Header navItems={navbarData} expertiesItem = {experties}/>
    )
}
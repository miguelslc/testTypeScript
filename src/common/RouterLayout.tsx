import { Outlet } from "react-router"
import { NavBar } from "./NavBar"

export const RouterLayout: React.FC<{}> = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
}

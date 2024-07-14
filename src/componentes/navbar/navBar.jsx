import { NavLink } from "react-router-dom";


export function NavBar(){
    return(
        <div className="div-nav-bar">
            <NavLink to={"/"}>Void return</NavLink>
            <NavLink to={"steve"}>Steve</NavLink>
            <NavLink to={"docu"}>Docu</NavLink>
        </div>
    )
}
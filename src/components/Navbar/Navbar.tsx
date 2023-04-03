import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './style.scss'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__title">Sketch Curriculum Components</Link>
            <ul className="navbar__options">
                <CustomLink to="/ListExpertises">List Expertise</CustomLink>
                <CustomLink to="/About">About</CustomLink>
            </ul>
        </nav>
    );
}

interface CustumLinkProps {
    to: string,
    children: ReactNode
}

function CustomLink({ to, children, ...props }:CustumLinkProps) {
    // The CustomLink do the same thing of Link (react-router-dom) component, but also add the style classe "active", if the URL match the router link.   
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return(
        <li className={"navbar__options__option" + (isActive? " navbar__options__option--active" : "")}>
            <Link to={to} {...props} className="navbar__options__option__link">
                {children}
            </Link>
        </li>

    );
}
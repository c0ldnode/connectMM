import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/home' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/info' activeStyle>
                        Info
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/connect'>Connect wallet</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
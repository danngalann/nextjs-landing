import { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import Logo from "../Common/Logo";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";

const Navbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks toggle={toggle} isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;

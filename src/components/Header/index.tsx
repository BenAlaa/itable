import React,{ FC } from "react";
import { HeaderContainer, Logo, Brand } from "./styled";
import TableLogo from '../../assets/datatable.png';

 
const Header: FC = () => {
    return (
        <HeaderContainer>
            <Logo src={TableLogo} alt="itable"/>
            <Brand>iTable</Brand>
        </HeaderContainer>
    );
}
 
export default Header;
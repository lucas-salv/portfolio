import { HeaderComponent } from "./styles";
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <HeaderComponent>
            <Logo href="#" title="Lucas&sdot;Salvador" />
        </HeaderComponent>
    )
};

Header.displayName = "header";
export default Header;
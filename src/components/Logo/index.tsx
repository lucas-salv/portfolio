import { AnchorHTMLAttributes } from "react"
import { LinkLogo, TitleLogo } from "./styles"

type logoProps = {
    title: string,
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Logo = ({ title, ...props }: logoProps) => {
    return (
        <LinkLogo {...props}>
            <TitleLogo>{title}</TitleLogo>
        </LinkLogo>
    )
};

Logo.displayName = "logo";
export default Logo;
import { AnchorHTMLAttributes } from "react"
import { LinkLogo, TitleLogo } from "./styles"

type logoProps = {
    title: string,
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default ({ title, ...props }: logoProps) => {
    return (
        <LinkLogo {...props}>
            <TitleLogo>{title}</TitleLogo>
        </LinkLogo>
    )
}
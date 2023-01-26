import { SocialMedia } from "./styles";
import IconButton from "../IconButton";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

type socialMediaProps = {
    size?: 'md' | 'lg',
    variant?: 'solid' | 'outline'
}

export default ({ size = 'md', variant = 'outline' }:socialMediaProps) => {
    return (
        <SocialMedia size={size}>
            <IconButton icon={<FaLinkedinIn />} href="#" target="_blank" variant={variant} size={size} />
            <IconButton icon={<FaGithub />} href="#" target="_blank" variant={variant} size={size} />
        </SocialMedia>
    )
}
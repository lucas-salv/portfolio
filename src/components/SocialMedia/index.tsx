import { SocialMedia } from "./styles";
import IconButton from "../IconButton";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

type socialMediaProps = {
    size?: 'md' | 'lg',
    variant?: 'solid' | 'outline'
}

const Social = ({ size = 'md', variant = 'outline' }:socialMediaProps) => {
    return (
        <SocialMedia size={size}>
            <IconButton icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/lucas-salv" target="_blank" variant={variant} size={size} />
            <IconButton icon={<FaGithub />} href="https://www.github.com/lucas-salv" target="_blank" variant={variant} size={size} />
        </SocialMedia>
    )
};

Social.displayName = "social-media";
export default Social;
import { SocialMedia } from "./styles";
import IconButton from "../IconButton";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

type socialMediaProps = {
    size?: 'md' | 'lg',
}

const Social = ({ size = 'md' }:socialMediaProps) => {
    return (
        <SocialMedia size={size}>
            <IconButton icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/lucas-salv" target="_blank" size={size} />
            <IconButton icon={<FaGithub />} href="https://www.github.com/lucas-salv" target="_blank" size={size} />
        </SocialMedia>
    )
};

Social.displayName = "social-media";
export default Social;
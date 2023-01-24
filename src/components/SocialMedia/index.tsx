import { SocialMedia } from "./styles";
import IconButton from "../IconButton";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default () => {
    return (
        <SocialMedia>
            <IconButton icon={<FaLinkedinIn />} href="#" target="_blank" variant="outline" size="lg" />
            <IconButton icon={<FaGithub />} href="#" target="_blank" variant="outline" size="lg" />
        </SocialMedia>
    )
}
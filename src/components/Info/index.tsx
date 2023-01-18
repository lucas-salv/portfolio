import { Container, ContainerText, Text, ContainerSocialButtons } from "./styles"
import Button from "../Button"
import IconButton from "../IconButton"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default () => {
    return (
        <Container>
            <ContainerText>
                <Text>Sou desenvolvedor Front-End apaixonado por inovação, sempre em busca de colaborar e afixionado por resolver problemas.</Text>
                <Text>Para saber mais sobre mim acesse as redes abaixo ou me mande uma
                mensagem no e-mail <strong>salv.dev.br@gmail.com</strong></Text>
            </ContainerText>
            <ContainerSocialButtons>
                <IconButton icon={<FaLinkedinIn />} href="#" target="_blank" variant="outline" size="lg" />
                <IconButton icon={<FaGithub />} href="#" target="_blank" variant="outline" size="lg" />
            </ContainerSocialButtons>
        </Container>
    )
}
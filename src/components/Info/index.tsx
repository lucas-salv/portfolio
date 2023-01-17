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
                <Button label="Repositório" />
                <Button href="https://google.com" target="_blank" label="Repositório 2" variant="outline" />
                <IconButton icon={<FaLinkedinIn />} />
            </ContainerSocialButtons>
                <IconButton icon={<FaGithub />} variant="outline" size="lg" />
        </Container>
    )
}
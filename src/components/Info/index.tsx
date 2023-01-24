import { Container, ContainerText, MainText, Text, ContainerSocialButtons } from "./styles"
import SocialMedia from "../SocialMedia";

export default () => {
    return (
        <Container>
            <ContainerText>
                <MainText>Sou desenvolvedor Front-End apaixonado por inovação, sempre em busca de colaborar e afixionado por resolver problemas.</MainText>
                <Text>Para saber mais sobre mim acesse as redes abaixo ou me mande uma
                mensagem no e-mail <strong>salv.dev.br@gmail.com</strong></Text>
            </ContainerText>
            <ContainerSocialButtons>
                <SocialMedia />
            </ContainerSocialButtons>
        </Container>
    )
}
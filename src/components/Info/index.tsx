import { Container, ContainerText, Text, ContainerSocialButtons } from "./styles"
import Button from "../Button"

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
            </ContainerSocialButtons>
        </Container>
    )
}
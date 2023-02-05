import { ModalInfo, ModalInfoContainer, ModalInfoTitle, ModalInfoDesc, ModalInfoToolsTitle, ModalInfoTools, ModalInfoToolsItem, ModalInfoButtons } from "./styles"
import Button from "../Button"

export default () => {
    return (
        <ModalInfo>
            <ModalInfoContainer>
                <ModalInfoTitle>Nome do Projeto</ModalInfoTitle>
                <ModalInfoDesc>Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Viva Forevis aptent taciti sociosqu ad litora torquent.Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Vehicula non. Ut sed ex eros.Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Viva Forevis aptent taciti sociosqu ad litora torquent.Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Vehicula non. Ut sed ex eros.Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Suco de cevadiss deixa as pessoas mais interessantis.Viva Forevis aptent taciti sociosqu ad litora torquent.Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Vehicula non. Ut sed ex eros.</ModalInfoDesc>
                <ModalInfoToolsTitle>Tecnologias:</ModalInfoToolsTitle>
                <ModalInfoTools>
                    <ModalInfoToolsItem>Item 1</ModalInfoToolsItem>
                    <ModalInfoToolsItem>Item 2</ModalInfoToolsItem>
                    <ModalInfoToolsItem>Item 3</ModalInfoToolsItem>
                    <ModalInfoToolsItem>Item 4</ModalInfoToolsItem>
                </ModalInfoTools>
            </ModalInfoContainer>
            <ModalInfoButtons>
                <Button label="Demostração" fullWidth/>
                <Button label="Repositório" variant="outline" fullWidth/>
            </ModalInfoButtons>
        </ModalInfo>
    )
}
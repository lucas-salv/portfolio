import { ModalInfo, ModalInfoContainer, ModalInfoTitle, ModalInfoDesc, ModalInfoToolsTitle, ModalInfoTools, ModalInfoToolsItem, ModalInfoButtons } from "./styles"
import Button from "../Button"
import projectType from "@/utils/projectInfoType"

type modalInfoProps = {
    infos?: projectType
}

export default ({ infos }:modalInfoProps) => {
    return (
        <ModalInfo>
            {infos && 
                <>
                    <ModalInfoContainer>
                        <ModalInfoTitle>{infos.name}</ModalInfoTitle>
                        <ModalInfoDesc>{infos.description}</ModalInfoDesc>
                        <ModalInfoToolsTitle>Tecnologias Usadas:</ModalInfoToolsTitle>
                        <ModalInfoTools>
                            {infos.tools.map((tool, index) => (
                                <ModalInfoToolsItem key={index} >{tool}</ModalInfoToolsItem>
                            ))}
                        </ModalInfoTools>
                    </ModalInfoContainer>
                    <ModalInfoButtons>
                        {infos.links.website_url.length > 0 ? 
                            <Button label="Demostração" href={infos.links.website_url} fullWidth/>
                        :
                            <Button label="Demostração" href={infos.links.website_url} fullWidth disabled/>
                        }
                        <Button label="Repositório" href={infos.links.repo_url} variant="outline" fullWidth/>
                    </ModalInfoButtons>
                </>
            }
        </ModalInfo>
    )
}
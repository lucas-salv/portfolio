import { ModalInfoComponent, ModalInfoContainer, ModalInfoTitle, ModalInfoDesc, ModalInfoToolsTitle, ModalInfoTools, ModalInfoToolsItem, ModalInfoButtons } from "./styles"
import Button from "../Button"
import projectType from "@/utils/projectInfoType"

type modalInfoProps = {
    infos?: projectType
}

const ModalInfo = ({ infos }:modalInfoProps) => {
    return (
        <ModalInfoComponent>
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
                        <Button label="Repositório" href={infos.links.repo_url} fullWidth/>
                    </ModalInfoButtons>
                </>
            }
        </ModalInfoComponent>
    )
};

ModalInfo.displayName = 'modal-info';
export default ModalInfo;
import { useEffect, useRef, useState } from "react";
import { Main, MyProjects, FloatContainerSocialInfo, Email, ContainerPhrase, Phrase, Author} from "./styles";
import Info from "@/components/Info";
import MySkills from "@/components/MySkills";
import Card from "@/components/Card";
import CardSlider from "@/components/CardSlider";
import SocialMedia from "@/components/SocialMedia";
import Modal from '@/components/Modal'
import Gallery from '@/components/Gallery'
import ModalInfo from '@/components/ModalInfo'

import * as data from './../../helpers/database.json';
import projectType from "@/utils/projectInfoType";

export default () => {
    const myProjectsRef = useRef<HTMLDivElement>(null);
    const floatContainerSocialInfoRef = useRef<HTMLDivElement>(null);
    const containerPhraseRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [cardActivated, setCardActivated] = useState<projectType>();

    useEffect(() => {
        const animationName = 'move-up';
        const floatContainerAnimationClass = 'displayed';
        const containerPhraseAnimationClass = 'fadeIn';
        function toggleMoveUpAnimationClass(e:WheelEvent) {
            if(e.deltaY > 0) {
                if(!myProjectsRef.current?.classList.contains(animationName)){
                    myProjectsRef.current?.classList.add(animationName);
                    floatContainerSocialInfoRef.current?.classList.add(floatContainerAnimationClass);
                    containerPhraseRef.current?.classList.add(containerPhraseAnimationClass);
                }
              } else {
                if(myProjectsRef.current?.classList.contains(animationName)){
                    myProjectsRef.current?.classList.remove(animationName);
                    floatContainerSocialInfoRef.current?.classList.remove(floatContainerAnimationClass);
                    containerPhraseRef.current?.classList.remove(containerPhraseAnimationClass);
                }
              }
        }

        function checksWindowHeightToEnableScrollEvent() {
            if(window.matchMedia("(min-height:570px)").matches) {
                console.log(isOpen)
                if(isOpen) {
                    window.removeEventListener('wheel', toggleMoveUpAnimationClass);
                } else {
                    window.addEventListener('wheel', toggleMoveUpAnimationClass);
                }
            } else {
                myProjectsRef.current?.classList.remove(animationName);
                floatContainerSocialInfoRef.current?.classList.remove(floatContainerAnimationClass);;
                window.removeEventListener('wheel', toggleMoveUpAnimationClass)
            }
        }
        checksWindowHeightToEnableScrollEvent();
        window.addEventListener('resize', checksWindowHeightToEnableScrollEvent)

        return () => {
            window.removeEventListener('wheel', toggleMoveUpAnimationClass);
            window.removeEventListener('resize', checksWindowHeightToEnableScrollEvent)
        }
      }, [isOpen]);

    return (
        <Main>
            <Info />
            <MySkills />
            <FloatContainerSocialInfo ref={floatContainerSocialInfoRef}>
                <SocialMedia />
                <Email>
                    <strong>salv.dev.br@gmail.com</strong>
                </Email>
            </FloatContainerSocialInfo>
            <MyProjects ref={myProjectsRef}>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOverlayClick >
                {cardActivated ? 
                    <>
                        <Gallery images={cardActivated.photos} />
                        <ModalInfo infos={cardActivated} />
                    </>
                    :
                    <></>
                }
            </Modal>
                <CardSlider title="Meus Projetos:">
                    {data.projects?.map((item, index) => (
                        <Card
                            key={index}
                            title={item.name}
                            onClick={() => {
                                setIsOpen(true);
                                setCardActivated(item)
                            }}
                            backgroundUrl={item.background_image_url}/>
                    ))}
                </CardSlider>
                <ContainerPhrase ref={containerPhraseRef}>
                    <Phrase>"Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir."</Phrase>
                    <Author>Steve Jobs.</Author>
                </ContainerPhrase>
            </MyProjects>
        </Main>
    )
}
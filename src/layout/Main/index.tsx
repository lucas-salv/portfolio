import { useEffect, useRef } from "react";
import { Main, MyProjects, FloatContainerSocialInfo, Email, ContainerPhrase, Phrase, Author} from "./styles";
import Info from "@/components/Info";
import MySkills from "@/components/MySkills";
import Card from "@/components/Card";
import CardSlider from "@/components/CardSlider";
import SocialMedia from "@/components/SocialMedia";

export default () => {
    const myProjectsRef = useRef<HTMLDivElement>(null);
    const floatContainerSocialInfoRef = useRef<HTMLDivElement>(null);
    const containerPhraseRef = useRef<HTMLDivElement>(null);

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
                window.addEventListener('wheel', toggleMoveUpAnimationClass);
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
      }, []);

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
                <CardSlider title="Meus Projetos:">
                    <Card title='Space Tourism' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1634565177/Challenges/wudjsbv8g93aarlhvbud.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                </CardSlider>
                <ContainerPhrase ref={containerPhraseRef}>
                    <Phrase>"Cada sonho que você deixa pra trás, é um pedaço do seu futuro que deixa de existir."</Phrase>
                    <Author>Steve Jobs.</Author>
                </ContainerPhrase>
            </MyProjects>
        </Main>
    )
}
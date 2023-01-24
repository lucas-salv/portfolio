import { useEffect, useRef } from "react";
import { Main, MyProjects } from "./styles";
import Info from "@/components/Info";
import MySkills from "@/components/MySkills";
import Card from "@/components/Card";
import CardSlider from "@/components/CardSlider";

export default () => {
    const myProjectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function toggleMoveUpAnimationClass(e:WheelEvent) {
            const animationName = 'move-up'
            if(e.deltaY > 0) {
                if(!myProjectsRef.current?.classList.contains(animationName)){
                    myProjectsRef.current?.classList.add(animationName);
                }
              } else {
                if(myProjectsRef.current?.classList.contains(animationName)){
                    myProjectsRef.current?.classList.remove(animationName);
                }
              }
        }

        window.addEventListener('wheel', toggleMoveUpAnimationClass);

        return () => window.removeEventListener('wheel', toggleMoveUpAnimationClass);
      }, []);

    return (
        <Main>
            <Info />
            <MySkills />
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
            </MyProjects>
        </Main>
    )
}
import { Main, ContainerSlider } from "./styles";
import Info from "@/components/Info";
import MySkills from "@/components/mySkills";
import Card from "@/components/Card";
import CardSlider from "@/components/CardSlider";

export default () => {
    return (
        <Main>
            <Info />
            <MySkills />
            <ContainerSlider className="my-projects">
                <CardSlider title="Meus Projetos:">
                    <Card title='Space Tourism' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1634565177/Challenges/wudjsbv8g93aarlhvbud.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                </CardSlider>
            </ContainerSlider>
        </Main>
    )
}
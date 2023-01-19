import { Main } from "./styles"
import Info from "@/components/Info"
import Card from "@/components/Card"

export default () => {
    return (
        <Main>
            <Info />
            <div style={{ marginTop: '20px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'nowrap', width: '200%'}}>
                    <Card title='Space Tourism' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1634565177/Challenges/wudjsbv8g93aarlhvbud.jpg"/>
                    <Card title='Sunnyside' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1623250117/Challenges/lvj0udxz21q6bicxkysz.jpg"/>
                    <Card title='Audiophile' backgroundUrl="https://res.cloudinary.com/dz209s6jk/image/upload/v1619786083/Challenges/swxkgbgbn1z5yixxqwjb.jpg"/>
                </div>
            </div>
        </Main>
    )
}
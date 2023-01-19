import { Card, CardContainerTitle, CardTitle } from "./styles";

type cardProps = {
    title: string,
    backgroundUrl: string,
}

export default ({ title, backgroundUrl }:cardProps) => {
    return (
        <Card css={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: '265% auto'}}>
            <CardContainerTitle>
                <CardTitle>{title}</CardTitle>
            </CardContainerTitle>
        </Card>
    )
}
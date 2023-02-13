import { forwardRef, MouseEventHandler, Ref } from "react";
import { Card, CardContainerTitle, CardTitle, ComingSoon } from "./styles";

type cardProps = {
    title: string,
    backgroundUrl: string,
    comingSoon?: boolean,
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default forwardRef(({ title, backgroundUrl, comingSoon, onClick }:cardProps, ref: Ref<HTMLDivElement>) => {
    return (
        <Card ref={ref} onClick={onClick} css={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: '265% auto'}}>
            <CardContainerTitle>
                {comingSoon && <ComingSoon>Em Desenvolvimento</ComingSoon>}
                <CardTitle>{title}</CardTitle>
            </CardContainerTitle>
        </Card>
    )
})
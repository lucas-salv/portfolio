import { forwardRef, MouseEventHandler, Ref } from "react";
import { Card, CardContainerTitle, CardTitle } from "./styles";

type cardProps = {
    title: string,
    backgroundUrl: string,
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default forwardRef(({ title, backgroundUrl, onClick }:cardProps, ref: Ref<HTMLDivElement>) => {
    return (
        <Card ref={ref} onClick={onClick} css={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: '265% auto'}}>
            <CardContainerTitle>
                <CardTitle>{title}</CardTitle>
            </CardContainerTitle>
        </Card>
    )
})
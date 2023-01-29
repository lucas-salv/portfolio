import { forwardRef, Ref } from "react";
import { Card, CardContainerTitle, CardTitle } from "./styles";

type cardProps = {
    title: string,
    backgroundUrl: string,
}

export default forwardRef(({ title, backgroundUrl }:cardProps, ref: Ref<HTMLDivElement>) => {
    return (
        <Card ref={ref} css={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: '265% auto'}}>
            <CardContainerTitle>
                <CardTitle>{title}</CardTitle>
            </CardContainerTitle>
        </Card>
    )
})
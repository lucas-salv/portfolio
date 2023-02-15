import { forwardRef, MouseEventHandler, Ref } from "react";
import { CardComponent, CardContainerTitle, CardTitle, ComingSoon } from "./styles";

type cardProps = {
    title: string,
    backgroundUrl: string,
    comingSoon?: boolean,
    onClick?: MouseEventHandler<HTMLDivElement>
}

const Card = forwardRef(({ title, backgroundUrl, comingSoon, onClick }:cardProps, ref: Ref<HTMLDivElement>) => {
    return (
        <CardComponent ref={ref} onClick={onClick} css={{ backgroundImage: `url(${backgroundUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: '265% auto'}}>
            <CardContainerTitle>
                {comingSoon && <ComingSoon>Em Desenvolvimento</ComingSoon>}
                <CardTitle>{title}</CardTitle>
            </CardContainerTitle>
        </CardComponent>
    )
});

Card.displayName = "card"
export default Card;
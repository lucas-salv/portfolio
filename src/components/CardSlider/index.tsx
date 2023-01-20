import React, { PropsWithChildren, useRef } from "react";
import { CardSlider, CardSliderHeader, CardSliderTitle, CardSliderContainerButtons } from "./styles";
import IconButton from "../IconButton";
import { HiOutlineChevronLeft, HiOutlineChevronRight }  from 'react-icons/hi';

type cardSliderProps = {
    title?: string
} & PropsWithChildren

export default ({ children, title }:cardSliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    return (
        <CardSlider ref={sliderRef}>
            <CardSliderHeader>
                <CardSliderTitle>{title}</CardSliderTitle>
                <CardSliderContainerButtons>
                    <IconButton icon={<HiOutlineChevronLeft />} variant="outline" />
                    <IconButton icon={<HiOutlineChevronRight />} variant="outline" />
                </CardSliderContainerButtons>
            </CardSliderHeader>
            <div className="cardContainer">
                <div className="slider">
                    {children}
                </div>
            </div>
        </CardSlider>
    )
}
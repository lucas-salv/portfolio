import React, { PropsWithChildren, useEffect, useRef, Children, cloneElement, isValidElement } from "react";
import { CardSlider, CardSliderHeader, CardSliderTitle, CardSliderContainerButtons } from "./styles";
import IconButton from "../IconButton";
import { HiOutlineChevronLeft, HiOutlineChevronRight }  from 'react-icons/hi';
import mergeRefs from "@/utils/mergeRefs";

type cardSliderProps = {
    title?: string
} & PropsWithChildren

export default ({ children, title }:cardSliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const btnPreviousRef = useRef<HTMLButtonElement>(null);
    const btnNextRef = useRef<HTMLButtonElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(sliderRef.current){
            if(childRef.current) {
                sliderRef.current.style.width = `${(childRef.current.offsetWidth * Children.toArray(children).length + 120)}px`
            }
        }

        
        btnNextRef.current?.addEventListener('click', () => {
            if(containerRef.current){
                if(childRef.current) {
                    console.log((containerRef.current.scrollWidth - containerRef.current.clientWidth), containerRef.current.clientWidth)
                    if((containerRef.current.scrollWidth - containerRef.current.clientWidth) < containerRef.current.clientWidth / 2) {
                        containerRef.current.scrollLeft += (containerRef.current.scrollWidth - containerRef.current.clientWidth);
                    } else if((containerRef.current.scrollWidth - containerRef.current.clientWidth) > containerRef.current.clientWidth) {
                        containerRef.current.scrollLeft += (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 3;
                    } else {
                        containerRef.current.scrollLeft += (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 2;
                    }
                }
            }
        });
        
        btnPreviousRef.current?.addEventListener('click', () => {
            if(containerRef.current){
                if(childRef.current) {
                    if((containerRef.current.scrollWidth - containerRef.current.clientWidth) < containerRef.current.clientWidth / 2) {
                        containerRef.current.scrollLeft -= (containerRef.current.scrollWidth - containerRef.current.clientWidth);
                    } else if((containerRef.current.scrollWidth - containerRef.current.clientWidth) > containerRef.current.clientWidth) {
                        containerRef.current.scrollLeft -= (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 3;
                    } else {
                        containerRef.current.scrollLeft -= (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 2;
                    }
                }
            }
        })
    }, [])

    return (
        <CardSlider>
            <CardSliderHeader>
                <CardSliderTitle>{title}</CardSliderTitle>
                <CardSliderContainerButtons>
                    <IconButton ref={btnPreviousRef} icon={<HiOutlineChevronLeft />} variant="outline" />
                    <IconButton ref={btnNextRef} icon={<HiOutlineChevronRight />} variant="outline" />
                </CardSliderContainerButtons>
            </CardSliderHeader>
            <div className="cardContainer" ref={containerRef}>
                <div className="slider" ref={sliderRef}>
                    {Children.map(children, child => (
                        cloneElement(isValidElement(child) ? child : <></>, { ref: mergeRefs(childRef)})
                    ))}
                </div>
            </div>
        </CardSlider>
    )
}
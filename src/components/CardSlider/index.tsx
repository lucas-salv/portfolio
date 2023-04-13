import React, { PropsWithChildren, useEffect, useRef, Children, cloneElement, isValidElement } from "react";
import { CardSlider, CardSliderHeader, CardSliderTitle, CardSliderContainerButtons } from "./styles";
import IconButton from "../IconButton";
import { HiOutlineChevronLeft, HiOutlineChevronRight }  from 'react-icons/hi';
import mergeRefs from "@/utils/mergeRefs";

type cardSliderProps = {
    title?: string
} & PropsWithChildren

const CardSldr = ({ children, title }:cardSliderProps) => {
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
        };

        if(containerRef.current?.scrollLeft == 0) {
            btnPreviousRef.current?.setAttribute('disabled', 'true');
            if((containerRef.current.scrollWidth - containerRef.current.clientWidth) == 0) {
                btnNextRef.current?.setAttribute('disabled', 'true');
            }
        }

        window.addEventListener('resize', () => {
            if(containerRef.current) {
                if((containerRef.current.scrollWidth - containerRef.current.clientWidth) == 0) {
                    btnPreviousRef.current?.setAttribute('disabled', 'true');
                    btnNextRef.current?.setAttribute('disabled', 'true');
                } else {
                    btnNextRef.current?.removeAttribute('disabled');
                }
            }
        })

        
        btnNextRef.current?.addEventListener('click', () => {
            btnPreviousRef.current?.removeAttribute('disabled');
            if(containerRef.current){
                if(childRef.current) {
                    console.log(containerRef.current.scrollLeft)
                    if((containerRef.current.scrollWidth - containerRef.current.clientWidth) < containerRef.current.clientWidth / 2) {
                        containerRef.current.scrollLeft += (containerRef.current.scrollWidth - containerRef.current.clientWidth);
                    } else if((containerRef.current.scrollWidth - containerRef.current.clientWidth) > containerRef.current.clientWidth) {
                        containerRef.current.scrollLeft += (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 3;
                    } else {
                        containerRef.current.scrollLeft += (containerRef.current.scrollWidth - containerRef.current.clientWidth) / 2;
                    }

                    setTimeout(() => {
                        if(containerRef.current) {
                            console.log(containerRef.current.scrollLeft)
                            if((containerRef.current.scrollLeft + containerRef.current.clientWidth) == containerRef.current.scrollWidth) {
                                btnNextRef.current?.setAttribute('disabled', 'true');
                                return
                            }
                        }
                    }, 500)
                }
            }
        });
        
        btnPreviousRef.current?.addEventListener('click', () => {
            btnNextRef.current?.removeAttribute('disabled');
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

                setTimeout(() => {
                    if(containerRef.current) {
                        console.log(containerRef.current.scrollLeft)
                        if(containerRef.current.scrollLeft < 10) {
                            btnPreviousRef.current?.setAttribute('disabled', 'true');
                            return
                        }
                    }
                }, 500)
            }
        })
    }, [])

    return (
        <CardSlider>
            <CardSliderHeader>
                <CardSliderTitle>{title}</CardSliderTitle>
                <CardSliderContainerButtons>
                    <IconButton ref={btnPreviousRef} icon={<HiOutlineChevronLeft />} />
                    <IconButton ref={btnNextRef} icon={<HiOutlineChevronRight />} />
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

CardSldr.displayName = "card-slider"
export default CardSldr;
import { useEffect, useRef, MouseEvent } from 'react'
import { Gallery, MainImageContainer, MainImage, ImageSliderContainer, ImageSliderSubContainer, ImageSlider, ImageSliderButton, Test } from "./styles"
import { HiOutlineChevronLeft, HiOutlineChevronRight }  from 'react-icons/hi';

const testArr = [1,2,3,4,5,6,7,8]

export default () => {
    const imageSliderRef = useRef<HTMLDivElement>(null);
    const btnLeftRef = useRef<HTMLButtonElement>(null);
    const btnRightRef = useRef<HTMLButtonElement>(null);
    const imageSliderContainerRef = useRef<HTMLDivElement>(null);

    const onClickTest = (e:MouseEvent<HTMLDivElement>) => {
        if(imageSliderRef.current) {
            const target = e.target as Element;
            const children = [...imageSliderRef.current.children];
            children.forEach(el => {
                el.classList.remove('activated')
            });
            target.classList.add('activated');
        }
    }

    useEffect(() => {
        if(imageSliderRef.current) {
            imageSliderRef.current.style.width = `${(125 * testArr.length) + 170}px`
        }

        function sliderToLeft() {
            if(imageSliderContainerRef.current) {
                imageSliderContainerRef.current.scrollLeft -= 135;
            }
        }

        function sliderToRight() {
            if(imageSliderContainerRef.current) {
                imageSliderContainerRef.current.scrollLeft += 135;
            }
        }

        btnLeftRef.current?.addEventListener('click', sliderToLeft);
        btnRightRef.current?.addEventListener('click', sliderToRight);

        return () => {
            btnLeftRef.current?.removeEventListener('click', sliderToLeft);
            btnRightRef.current?.removeEventListener('click', sliderToRight);
        }
    }, [])

    return (
        <Gallery>
            <MainImageContainer>
                <MainImage />
            </MainImageContainer>
            <ImageSliderContainer>
                <ImageSliderButton className='left' ref={btnLeftRef}>
                    <HiOutlineChevronLeft size="28"/>
                </ImageSliderButton>
                <ImageSliderSubContainer ref={imageSliderContainerRef}>
                    <ImageSlider ref={imageSliderRef}>
                        {testArr.map((el, index) => (
                            <Test onClick={(e) => onClickTest(e)}/>
                        ))}
                    </ImageSlider>
                </ImageSliderSubContainer>
                <ImageSliderButton className='right' ref={btnRightRef}>
                    <HiOutlineChevronRight size="28"/>
                </ImageSliderButton>
            </ImageSliderContainer>
        </Gallery>
    )
}
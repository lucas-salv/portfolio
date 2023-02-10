import { useEffect, useRef, MouseEvent, useState } from 'react'
import { Gallery, MainImageContainer, MainImage, ImageSliderContainer, ImageSliderSubContainer, ImageSlider, ImageSliderButton, Test } from "./styles"
import { HiOutlineChevronLeft, HiOutlineChevronRight }  from 'react-icons/hi';

const testArr = [
    'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1462725/pexels-photo-1462725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

type galleryProps = {
    images: string[]
}

export default ({ images }:galleryProps) => {
    const imageSliderRef = useRef<HTMLDivElement>(null);
    const btnLeftRef = useRef<HTMLButtonElement>(null);
    const btnRightRef = useRef<HTMLButtonElement>(null);
    const imageSliderContainerRef = useRef<HTMLDivElement>(null);

    const [imgActivated, setImgActivated] = useState(testArr[0]);

    const onClickTest = (e:MouseEvent<HTMLDivElement>) => {
        if(imageSliderRef.current) {
            const target = e.target as Element;
            const children = [...imageSliderRef.current.children];
            children.forEach(el => {
                el.classList.remove('activated')
            });
            target.classList.add('activated');
            const srcImg = target.getAttribute('src')
            if(srcImg)  {
                setImgActivated(srcImg)
            }
        }
    }

    useEffect(() => {
        if(imageSliderRef.current) {
            const firstChild = [...imageSliderRef.current.children][0]
            const firstChildSrc = firstChild.getAttribute('src');
            imageSliderRef.current.style.width = `${(125 * testArr.length) + 170}px`;
            firstChild.classList.add('activated');
            if(firstChildSrc) setImgActivated(firstChildSrc);
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
                <MainImage src={imgActivated} />
            </MainImageContainer>
            <ImageSliderContainer>
                <ImageSliderButton className='left' ref={btnLeftRef}>
                    <HiOutlineChevronLeft size="28"/>
                </ImageSliderButton>
                <ImageSliderSubContainer ref={imageSliderContainerRef}>
                    <ImageSlider ref={imageSliderRef}>
                        {images.map((el, index) => (
                            <Test src={el} key={index} onClick={(e) => onClickTest(e)}/>
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
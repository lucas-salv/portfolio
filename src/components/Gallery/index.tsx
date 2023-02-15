import { useEffect, useRef, MouseEvent, useState } from 'react'
import { GalleryComponent, MainImageContainer, MainImage, ImageSliderContainer, ImageSliderSubContainer, ImageSlider, ImageSliderButton, Test } from "./styles"
import { HiOutlineChevronLeft, HiOutlineChevronRight }  from 'react-icons/hi';

type galleryProps = {
    images: string[]
}

const Gallery = ({ images }:galleryProps) => {
    const imageSliderRef = useRef<HTMLDivElement>(null);
    const btnLeftRef = useRef<HTMLButtonElement>(null);
    const btnRightRef = useRef<HTMLButtonElement>(null);
    const imageSliderContainerRef = useRef<HTMLDivElement>(null);

    const [imgActivated, setImgActivated] = useState(images[0]);

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
            const children = [...imageSliderRef.current.children];
            const firstChildSrc = firstChild.getAttribute('src');
            children.forEach(el => {
                el.classList.remove('activated')
            });
            imageSliderRef.current.style.width = `${(125 * images.length) + 50}px`;
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
    }, [images])

    return (
        <GalleryComponent>
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
        </GalleryComponent>
    )
}

Gallery.displayName = "gallery";
export default Gallery;
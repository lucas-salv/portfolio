import { styled } from "@/helpers/stitches.config";

export const Gallery = styled('div', {
});

export const MainImageContainer = styled('div', {
    display: 'flex',
    width: '100%',
    height: '260px',
    backgroundColor: '$primaryColor',
    marginBottom: '10px',
    overflow: 'hidden',

    '@bp2': {
        width: '530px',
        height: '350px'
    },
});

export const MainImage = styled('img', {
    width: 'auto',
    height: '100%',
    margin: '0 auto',

    '@bp2': {
        width: 'auto',
    },
});

export const ImageSliderContainer = styled('div', {
    position: 'relative',
    width: '100%',

    '@bp2': {
        width: '530px'
    },
});

export const ImageSliderButton = styled('button', {
    position: 'absolute',
    top: 0,
    width: '50px',
    height: 'calc(100% - 10px)',
    border: 'none',
    cursor: 'pointer',
    
    '&.left': {
        left: 0,
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)'
    },
    '&.right': {
        right: 0,
        background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)'
    }
})

export const ImageSliderSubContainer = styled('div', {
    width: '100%',
    paddingBottom: '10px',
    overflowX: 'scroll',
    scrollBehavior: 'smooth'
})

export const ImageSlider = styled('div', {
    display: 'flex',
    margin: '0 50px',
    gap: '10px',
});

export const Test = styled('img', {
    minWidth: '125px',
    height: '75px',
    backgroundColor: 'lightgray',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'border-color .2s',

    '&[activated], &.activated': {
        borderColor: '$primaryColor'
    }
})
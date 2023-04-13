import { styled } from "@/helpers/stitches.config";

export const GalleryComponent = styled('div', {
});

export const MainImageContainer = styled('div', {
    display: 'flex',
    width: '100%',
    height: 'auto',
    backgroundColor: '$primaryColor',
    marginBottom: '10px',
    borderRadius: '40px',
    overflow: 'hidden',

    '@bpG': {
        height: '320px'
    },

    '@bp2': {
        width: '530px',
        height: '350px'
    },
});

export const MainImage = styled('img', {
    width: '100%',
    margin: '0 auto',

    '@bpG': {
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
        background: 'linear-gradient(90deg, rgba(48,48,48,1) 0%, rgba(48,48,48,1) 50%, rgba(48,48,48,0) 100%)'
    },
    '&.right': {
        right: 0,
        background: 'linear-gradient(270deg, rgba(48,48,48,1) 0%, rgba(48,48,48,1) 50%, rgba(48,48,48,0) 100%)'
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

export const Thumb = styled('img', {
    minWidth: '125px',
    height: '75px',
    backgroundColor: '$headerBackgroundColor',
    cursor: 'pointer',
    border: '2px solid transparent',
    borderRadius: '20px',
    transition: 'border-color .2s',

    '&[activated], &.activated': {
        borderColor: '$contrastColor'
    }
})
import { styled } from "@/helpers/stitches.config";

export const CardSlider = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    '& > .cardContainer': {
        overflowX: 'scroll',
        overflowY: 'hidden',

        '& > .slider': {
            display: 'flex',
            gap: 20,
            flexWrap: 'nowrap',
            width: '700%',
            marginLeft: '20px',
            pointerEvents: 'none',
            '& > div': {
                pointerEvents: 'auto'
            },
    
            '&:hover > div:not(:hover)': {
                opacity: 0.5
            },
        }
    },
});

export const CardSliderHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    margin: '20px 20px 0 20px',
})

export const CardSliderTitle = styled('h2', {
    fontSize: '$sizes$1',
    fontWeight: 'normal',
});

export const CardSliderContainerButtons = styled('div', {
    display: 'none',
    gap: 10,
})
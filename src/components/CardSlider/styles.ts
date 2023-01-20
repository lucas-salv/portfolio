import { styled } from "@/helpers/stitches.config";

export const CardSlider = styled('div', {
    marginTop: '$space$2',
    overflow: 'hidden',
    '& > .cardContainer': {
        display: 'flex',
        gap: 20,
        flexWrap: 'nowrap',
        width: '200%',
        margin: '30px 0',
        marginLeft: 250,
        pointerEvents: 'none',
        '& > div': {
            pointerEvents: 'auto'
        },

        '&:hover > div:not(:hover)': {
            opacity: 0.5
        },
    }
});
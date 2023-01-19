import { styled } from "@/helpers/stitches.config";

export const Card = styled('div', {
    position: 'relative',
    width: '265px',
    height: '440px',
    margin: '20px 0',
    backgroundColor: 'lightgray',
    boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.25)',
    cursor: 'pointer',
    transition: 'transform .2s',

    '&:hover': {
        transform: 'scale(1.05, 1.05)',
    }
});

export const CardContainerTitle = styled('div', {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    padding: '20px',
    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)'
});

export const CardTitle = styled('h1', {
    fontSize: '$sizes$4',
    color: '$secondaryColor'
});
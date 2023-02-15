import { styled } from "@/helpers/stitches.config";

export const CardComponent = styled('div', {
    position: 'relative',
    minWidth: '265px',
    width: '265px',
    height: '440px',
    margin: '20px 0',
    backgroundColor: 'lightgray',
    boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.25)',
    cursor: 'pointer',
    transition: 'transform .2s, opacity .2s',

    '@bp3': {
        '&:hover': {
            transform: 'scale(1.15, 1.15)',
        },
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

export const ComingSoon = styled('p', {
    display: 'inline',
    alignSelf: 'flex-start',
    fontSize: '12px',
    marginBottom: '$space$1',
    color: '$secondaryColor',
    padding: '2px $space$1',
    border: '1px solid $secondaryColor'
})
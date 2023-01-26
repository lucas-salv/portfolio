import { styled } from "@/helpers/stitches.config"

export const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column'
});

export const MyProjects = styled('section', {
    position: 'relative',
    height: '100vh',
    paddingTop: '0',
    background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)',
    transition: 'all .5s',

    '&.move-up': {
        paddingTop: '100px',
        transform: 'translateY(-75vh)',

        '@bph1': {
            paddingTop: '30px',
        }
    }
});

export const FloatContainerSocialInfo = styled('div',{
    position: 'absolute',
    top: '-100px',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    transition: 'top .5s',
    zIndex: 5,

    '@bp1': {
        right: '20px',
        '&.displayed': {
            top: '3px',
        },
    },
    '@bp2': {
        right: '100px'
    },

    '@bp3': {
        right: '50px'
    },

    '@bp4': {
        right: 'calc(300px - 178px)'
    }
});

export const Email = styled('div', {
    display: 'none',
    flexDirection: 'column',
    alignItems: 'center',
    '@bp3': {
        display: 'flex',
        marginLeft: '10px'
    }
})
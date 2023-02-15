import { styled } from "@/helpers/stitches.config"

export const MainComponent = styled('main', {
    display: 'flex',
    flexDirection: 'column'
});

export const MyProjects = styled('section', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
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
});

export const ContainerPhrase = styled('section', {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    gap: '$space$1',
    padding: '0 20px',
    opacity: 0,
    transition: 'opacity 1s',
    
    '&.fadeIn': {
        opacity: 1,
        transitionDelay: '.5s',
    },

    '@bp1': {
        width: '560px',
        margin: '0 auto',
    },

    '@bph2': {
        display: 'flex'
    },

    '@bph3': {
        top: '30px'
    }
});

export const Phrase = styled('em', {
    textAlign: 'center',

    '@bp0': {
        fontSize: '$sizes$1',
    },

    '@bp2': {
        fontSize: '$sizes$2'
      }
});

export const Author = styled('p', {
    textAlign: 'center',

    '@bp0': {
        fontSize: '$sizes$1',
    },

    '@bp2': {
        fontSize: '$sizes$2'
      }
})
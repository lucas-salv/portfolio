import { styled } from "@/helpers/stitches.config"

export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(70vh - 153px)',
    margin: '54px 20px 0 20px',

    '@bph0': {
        height: 'auto',
        padding: '20px'
    },

    '@bp1': {
        width: '560px',
        margin: '0 auto',
        marginTop: '54px',
    }
})

export const ContainerText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$space$2'
})

export const MainText = styled('h2', {
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: '$sizes$3',

    '@bp0': {
        fontSize: '$sizes$1',
    },

    '@bp2': {
        fontSize: '$sizes$5'
      }
})

export const Text = styled('h4', {
    fontWeight: 'normal',
    textAlign: 'center',
    fontSize: '$sizes$1',

    '@bp2': {
        fontSize: '$sizes$2'
      }
})

export const ContainerSocialButtons = styled('div', {
    
});
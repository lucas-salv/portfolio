import { styled } from "@/helpers/stitches.config"

export const Container = styled('section', {
    margin: '0 20px',
    marginTop: '20px',

    '@bp1': {
        width: '560px',
        margin: '0 auto',
        marginTop: '20px',
    }
})

export const ContainerText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$space$2'
})

export const Text = styled('h2', {
    fontWeight: 'normal',
    textAlign: 'center',

    '@bp2': {
        fontSize: '$sizes$2'
      }
})

export const ContainerSocialButtons = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '$space$2',
    marginTop: '$space$2'
})
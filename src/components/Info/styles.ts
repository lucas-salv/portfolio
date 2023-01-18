import { styled } from "@/helpers/stitches.config"

export const Container = styled('section', {
})

export const ContainerText = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$space$2'
})

export const Text = styled('h2', {
    fontWeight: 'normal',
    fontSize: '$sizes$1',
    textAlign: 'center'
})

export const ContainerSocialButtons = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    marginTop: '20px'
})
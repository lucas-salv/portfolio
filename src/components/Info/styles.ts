import { styled } from "@/helpers/stitches.config"

export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$space$2'
})

export const Text = styled('h2', {
    fontWeight: 'normal',
    fontSize: '$sizes$1',
    textAlign: 'center'
})
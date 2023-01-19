import { styled } from "@/helpers/stitches.config"

export const LinkLogo = styled('a', {
    textDecoration: 'none',
    color: '$primaryColor'
})

export const TitleLogo = styled('h1', {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    fontSize: '$sizes$1',
    letterSpacing: '$sizes$1',
    textAlign: 'center'
})
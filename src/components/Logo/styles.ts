import { styled } from "@/helpers/stitches.config"

export const LinkLogo = styled('a', {
    textDecoration: 'none',
    color: '$primaryColor'
})

export const TitleLogo = styled('h1', {
    fontWeight: 'normal',
    textTransform: 'uppercase',
    fontSize: '10px',
    letterSpacing: '$sizes$1',
    textAlign: 'center'
})
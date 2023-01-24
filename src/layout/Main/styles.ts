import { styled } from "@/helpers/stitches.config"

export const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column'
});

export const MyProjects = styled('section', {
    height: '100vh',
    paddingTop: '0',
    background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)',
    transition: 'all .5s',

    '&.move-up': {
        paddingTop: '100px !important',
        transform: 'translateY(-71vh)'
    }
})
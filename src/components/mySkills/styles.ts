import { styled } from "@/helpers/stitches.config";

export const MySkills = styled('section', {
    margin: '20px 0',
    borderBottom: '1px solid rgba(0,0,0,0.1)'
});

export const MySkillsTitle = styled('h2', {
    position: 'relative',
    fontWeight: 'normal',
    
    textAlign: 'center',
    '& > span': {
        backgroundColor: '$secondaryColor',
        padding: '5px 10px',
    },
    '&::before': {
        content: '',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: 0,
        width: '100%',
        height: '1px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        zIndex: '-1'
    }
});

export const MySkillsList = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',

    '@bp2': {
        margin: '20px 100px'
    },
    '@bp4': {
        margin: '20px 300px'
    }
})
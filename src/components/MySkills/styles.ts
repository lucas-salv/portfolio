import { styled } from "@/helpers/stitches.config";

export const MySkills = styled('section', {
    position: 'relative',
    margin: '20px 0',
    backgroundColor: '$skillsBackgroundColor',
});

export const MySkillsTitle = styled('h2', {
    position: 'absolute',
    top: '-40px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontWeight: 'normal',
    textAlign: 'center',
    '& > span': {
        padding: '5px 10px',
    },
});

export const MySkillsList = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    gap: 5,

    '@bp2': {
        margin: '20px 100px'
    },
    '@bp4': {
        margin: '20px 300px'
    }
})
import { styled } from "@/helpers/stitches.config";

export const ModalInfo = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '$space$2',
    marginBottom: '80px',
    overflowY: 'auto',

    '@bph0': {
        overflowY: 'visible',
        marginBottom: '$space$2'
    },

    '@bph4': {
        overflowY: 'visible',
        marginBottom: '$space$2'
    },

    '@bp2': {
        maxWidth: '530px',
    },
    '@bp3': {
        width: '370px',
        height: '360px',
        marginTop: '0',
    },
    '@bp4': {
        width: '100%',
    }
});

export const ModalInfoContainer = styled('div', {
    paddingRight: '$space$1',
});

export const ModalInfoTitle = styled('h1', {
    fontSize: '$sizes$6',
});

export const ModalInfoDesc = styled('p', {
    marginTop: '$space$1'
});

export const ModalInfoToolsTitle = styled('h2', {
    marginTop: '$space$2'
});

export const ModalInfoTools = styled('ul', {
    margin: '$space$1 0 0 $space$2'
});

export const ModalInfoToolsItem = styled('li', {});

export const ModalInfoButtons = styled('div', {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    margin: '$space$2 0',
    padding: '0 $space$2',
    backgroundColor: '$secondaryColor',
    '@bp3': {
        position: 'fixed',
        flexDirection: 'column',
        width: '270px',
        padding: 0,
        left: 'inherit',
        right: 40,
        bottom: 20
    },
    '@bp4': {
        flexDirection: 'row',
        gap: '$space$2',
        minWidth: '374px'
    },
    '@bp0': {
        flexDirection: 'column',
        gap: 10
    },

    '@bph0': {
        position: 'static',
        padding: 0
    },

    '@bph4': {
        position: 'static',
        padding: 0
    },
});
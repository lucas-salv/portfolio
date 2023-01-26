import { styled } from "@/helpers/stitches.config";

export const SocialMedia = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '$space$2',
    variants: {
        size: {
            md: {
                gap: '$space$1'
            },
            lg: {}
        }
    }
})
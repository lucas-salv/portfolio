import { ButtonHTMLAttributes, useRef, cloneElement, Ref, forwardRef } from "react"
import { Button } from "./styles"
import useTriggerAnimations from "@/utils/useTriggerAnimations"
import mergeRefs from "@/utils/mergeRefs"
import { CSS } from "@stitches/react"

type buttonProps = {
    icon: JSX.Element,
    href?: string,
    target?: string,
    variant?: 'solid' | 'outline',
    size?: 'md' | 'lg',
    css?: CSS
} & ButtonHTMLAttributes<HTMLButtonElement>

const IconButton = forwardRef(({ icon, variant = 'solid', size = 'md', href, target, ...props}:buttonProps, ref: Ref<HTMLButtonElement | HTMLAnchorElement>) => {
    const btnRefAsLink = useRef<HTMLAnchorElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    useTriggerAnimations('pulse-animation', 'mousedown', href ? btnRefAsLink : btnRef);

    return (
        href ? (
            <Button 
                as="a"
                ref={ref ? mergeRefs(btnRefAsLink, ref) : btnRefAsLink}
                href={href}
                target={target}
                variant={variant}
                size={size}
            >
                    {icon && cloneElement(icon, { size: size == 'lg' ? '32px' : '22px' })}
            </Button>
        )
        :
        (
            <Button 
                {...props}
                ref={ref ? mergeRefs(btnRef, ref) : btnRef}
                variant={variant}
                size={size}
            >
                    {icon && cloneElement(icon, { size: size == 'lg' ? '32px' : '22px' })}
            </Button>
        )
    )
});

IconButton.displayName = "icon-button";
export default IconButton;
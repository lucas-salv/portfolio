import { ButtonHTMLAttributes, useRef, cloneElement } from "react"
import { Button } from "./styles"
import useTriggerAnimations from "@/utils/useTriggerAnimations"

type buttonProps = {
    icon: JSX.Element,
    href?: string,
    target?: string,
    variant?: 'solid' | 'outline',
    size?: 'md' | 'lg',
} & ButtonHTMLAttributes<HTMLButtonElement>

export default ({ icon, variant = 'solid', size = 'md', href, target, ...props}:buttonProps) => {
    const btnRefAsLink = useRef<HTMLAnchorElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    useTriggerAnimations('pulse-animation', 'mousedown', href ? btnRefAsLink : btnRef);

    return (
        href ? (
            <Button 
                as="a"
                ref={btnRefAsLink}
                href={href}
                target={target}
                variant={variant}
                size={size}
            >
                    {icon && cloneElement(icon, { size: size == 'lg' ? '32px' : '18px' })}
            </Button>
        )
        :
        (
            <Button 
                {...props}
                ref={btnRef}
                variant={variant}
                size={size}
            >
                    {icon && cloneElement(icon, { size: size == 'lg' ? '32px' : '18px' })}
            </Button>
        )
    )
}
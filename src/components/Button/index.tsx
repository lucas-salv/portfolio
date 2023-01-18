import { ButtonHTMLAttributes, useRef } from "react"
import { Button } from "./styles"
import useTriggerAnimations from "@/utils/useTriggerAnimations"

type buttonProps = {
    label: string,
    href?: string,
    target?: string,
    variant?: 'solid' | 'outline',
} & ButtonHTMLAttributes<HTMLButtonElement>

export default ({ label, variant = 'solid', href, target, ...props}:buttonProps) => {
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
                >
                        {label}
                </Button>
        )
        :
        (
            <Button 
                {...props}
                ref={btnRef}
                variant={variant}
            >
                    {label}
            </Button>
        )
    )
}
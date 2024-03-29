import { ButtonHTMLAttributes, useRef } from "react"
import { Btn } from "./styles"
import useTriggerAnimations from "@/utils/useTriggerAnimations"

type buttonProps = {
    label: string,
    href?: string,
    target?: string,
    fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ label, href, target="_blank", fullWidth, ...props}:buttonProps) => {
    const btnRefAsLink = useRef<HTMLAnchorElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    useTriggerAnimations('pulse-animation', 'mousedown', href ? btnRefAsLink : btnRef);

    return (
        href ? (
                <Btn
                    as="a"
                    ref={btnRefAsLink}
                    href={href}
                    target={target}
                    fullWidth={fullWidth}
                >
                        {label}
                </Btn>
        )
        :
        (
            <Btn 
                {...props}
                ref={btnRef}
                fullWidth={fullWidth}
            >
                    {label}
            </Btn>
        )
    )
}

export default Button;
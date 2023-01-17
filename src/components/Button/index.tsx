import { ButtonHTMLAttributes, useEffect, useRef } from "react"
import { Button } from "./styles"

type buttonProps = {
    label: string,
    href?: string,
    target?: string,
    variant?: 'solid' | 'outline',
} & ButtonHTMLAttributes<HTMLButtonElement>

export default ({ label, variant = 'solid', href, target, ...props}:buttonProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {

        function activeButtonPulseAnimation() {
            btnRef.current?.classList.remove('pulse-animation');
            setTimeout(() => {
                btnRef.current?.classList.add('pulse-animation');
            }, 10);  
        }

        btnRef.current?.addEventListener('mousedown', activeButtonPulseAnimation)

        return () => btnRef.current?.removeEventListener('mousedown', activeButtonPulseAnimation)

    }, [])

    return (
        href ? (
            <a href={href} target={target}>
                <Button 
                    {...props}
                    ref={btnRef}
                    variant={variant}
                >
                        {label}
                </Button>
            </a>
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
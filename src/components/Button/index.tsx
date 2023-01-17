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

        function activeButtonPulseAnimation(e:any) {
            e.target?.classList.remove('pulse-animation');
            setTimeout(() => {
                e.target?.classList.add('pulse-animation');
            }, 10);  
        }

        btnRef.current?.addEventListener('mousedown', activeButtonPulseAnimation)

        return () => btnRef.current?.removeEventListener('mouseup', activeButtonPulseAnimation)

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
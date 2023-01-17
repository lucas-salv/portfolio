import { ButtonHTMLAttributes, useEffect, useRef, cloneElement } from "react"
import { Button } from "./styles"

type buttonProps = {
    icon: JSX.Element,
    href?: string,
    target?: string,
    variant?: 'solid' | 'outline',
    size?: 'md' | 'lg',
} & ButtonHTMLAttributes<HTMLButtonElement>

export default ({ icon, variant = 'solid', size = 'md', href, target, ...props}:buttonProps) => {
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
                    size={size}
                >
                        {icon && cloneElement(icon, { size: size == 'lg' ? '32px' : '18px' })}
                </Button>
            </a>
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
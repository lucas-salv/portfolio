import { RefObject, useEffect } from "react";

export default (animationClass: string, eventType: string, componentRef: RefObject<HTMLElement>) => {
    useEffect(() => {

        function triggerAnimation() {
            componentRef.current?.classList.remove(animationClass);
            setTimeout(() => {
                componentRef.current?.classList.add(animationClass);
            }, 10);  
        }

        componentRef.current?.addEventListener(eventType, triggerAnimation)

        return () => componentRef.current?.removeEventListener(eventType, triggerAnimation)

    }, [])
}
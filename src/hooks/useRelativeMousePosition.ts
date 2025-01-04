import { useEffect, useRef, useState } from "react";
import useMousePosition from "./useMousePosition";

export default function useRelativeMousePosition() {
    const [mouseX, mouseY] = useMousePosition();
    const ref = useRef<null | HTMLElement>(null);

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const rectangle = element.getBoundingClientRect();
    
        const left = rectangle.left;
        const top = rectangle.top;
            
        const x = mouseX - left;
        const y = mouseY - top;
    
        const xPercent = x / rectangle.width;
        const yPercent = y / rectangle.height;

        setPosition({
            x: xPercent,
            y: yPercent,
        })

    }, [ref, mouseX, mouseY])

    return [ref, position.x, position.y];
}
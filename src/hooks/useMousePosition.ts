import { useEffect, useState } from "react"

export default function useMousePosition() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        function handleMove(e: MouseEvent) {
            setPosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', handleMove);

        return () => window.removeEventListener('mousemove', handleMove);
    })

    return [position.x, position.y];
}
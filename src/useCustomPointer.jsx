/*
Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?

Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
Posiziona il componente al posto del puntatore del mouse.
Il componente segue i movimenti del mouse.
*/

import { useEffect, useState } from "react";

function useCustomPointer(customCursor){
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {

        const handleCursor = (e) => {
            setPosition({
                x:e.clientX,
                y: e.clientY
        })
        }

        window.addEventListener('mousemove', handleCursor)

        return () => {
            window.removeEventListener('mousemove', handleCursor)
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            left: position.x,
            top: position.y,
            cursor: 'none',
            transform: 'translate(-50%, -50%)'
        }}>
            {customCursor}
        </div>
    );
}

export default useCustomPointer;
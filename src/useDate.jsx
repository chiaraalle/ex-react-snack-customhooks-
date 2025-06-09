/*
Snack 2: useDate() – Ottenere la Data Attuale
Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

Cosa deve fare?

Restituisce un oggetto con data e ora formattata.
Si aggiorna automaticamente ogni secondo.
Usa useEffect() per gestire l’aggiornamento.
*/

import { useEffect, useState } from "react";

function useDate(){
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() =>{
            setCurrentDate(new Date());
        }, 1000)

        //cleanup function
        return () => clearInterval(timer)
    }, [])

    return currentDate;

}

export default useDate;
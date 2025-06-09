/*
Snack 1: useSwitch() – Toggle Booleano
Creare un custom hook per alternare un valore booleano tra true e false.

Cosa deve fare?

Inizialmente false.
Ritorna il valore attuale e una funzione toggle() per cambiarlo.
Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
Esempio di utilizzo:
*/

import { useState } from "react";

function useSwitch(initialValue = false){
    const [isOn, setIsOn] = useState(initialValue);

    const toggle = () => {
    setIsOn(prevState => !prevState);
  };

  return [isOn, toggle];

}

export default useSwitch;
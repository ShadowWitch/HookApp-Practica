import { useCallback, useEffect, useState } from "react"

// Components
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    // const incrementFather = () =>{
    //   setCounter(counter + 1)
    // }

    // "useCallback" es como "useMemo" o "memo" pero sirve para memorizar funciones...

      const incrementFather = useCallback(
        (number) => {
          // setCounter(counter + 1)
          setCounter((value) => value + number)
        },
        [],
      ) // "[]" solo se dibujara una vez


      // useEffect(() => { // Que solo se dispare cada vez que la funcion cambie
      //   incrementFather()
      // }, [incrementFather]) // Si "incrementFather" no tuviera el "useCallback" aqui se iba a provocar un bucle infinito, ya que "incrementFather" iba a tener o apuntar a un en memoria diferente...

    return (
      <>
        <h1>useCallback Hook: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
      </>
    )
}

import { useEffect, useMemo, useState } from "react"
import { useCounter } from "../hooks/index.barril"

const heavyStuff = (number = 100) => {

    for (let index = 0; index < number; index++) {
        console.log('Ahi vamos');
    }
    
    return `${number} done!`
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(10)
    const [show, setShow] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter]) // Este valor se mantendra memorizado hasta que las dependencias del "useMemo" cambien 
    // console.log('Counter >> ', counter)
    // En este caso "memorizeValue" memorizara el valor de "heavyStuff"... Si le dejamos el "[]" vacio solo lo memorizara la primera vez, si pongo "[counter]" lo memorizara cada vez que el counter cambie 


    // Se puede hacer con "useEffect" tambien, PERO el "useEffect" lo que hara es ir y ejecutar esa funcion mientras que el "useMemo" lo que hara es devolver el resultado y no ocupa ejecutar la funcion de nuevo solo la primera vez y luego como la tiene memorizada con eso se le hara mas facil y optimizara el tiempo de respuesta...
    // useEffect(() => {
    //     heavyStuff(counter)
    // }, [counter])
    
    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />
            <h4>{memorizeValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >+1</button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}

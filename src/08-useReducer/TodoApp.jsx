import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Mago de Oz',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Fiesta Pagana',
        done: false
    },
]

export default function TodoApp() {

    const [todos, dispatch] = useReducer(todoReducer, initialState)
    

    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">

                        {
                            todos.map(todos => (
                                <li className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">Item 1</span>
                                    <button className="btn btn-outline-danger mx-2">Borrar</button>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Que hay que hacer?"
                        />
                        <button 
                            className="btn btn-outline-primary mt-2"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

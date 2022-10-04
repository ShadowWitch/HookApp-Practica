
const initialState = [{
    id: 1,
    todo: 'Recolectar informacion',
    done: false
}]

// Un "Reducer" solamente es una funcion pura que regresa un "state", la accion es lo que le dice al reducer como queremos "cambiar" el "state"
const todoReducer = ( state = initialState, action = {} ) =>{
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Mago de Oz',
    done: false
}


const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

console.log('ACA >> ', addTodoAction.type);

todos = todoReducer(todos, addTodoAction)

console.log({state: todos});


// ============================== Esto NO lo debo hacer ya que es una mutacion y no nos va a redibujar nada ==============================
// todos.push({
//     id: 2,
//     todo: 'Mago de Oz',
//     done: false
// })

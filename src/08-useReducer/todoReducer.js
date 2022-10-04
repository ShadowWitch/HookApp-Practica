

export const todoReducer = (initialState = [], action) => {
    switch (action.tyle) {
        case 'ABC':
            throw Error('Action type = ABC no esta implementada.')
    
        default:
            return initialState;
    }
}
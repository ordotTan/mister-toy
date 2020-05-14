const initialState = {
    toys: [],
    currToy: null, //for the edit and details pages
    currFilter: null,
    isLoading: false
}

export default function ToyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TOYS':
            return {
                ...state,
                toys: [...action.toys]
            };
        case 'SET_TOY':
            return {
                ...state,
                currToy: { ...action.toy }
            };
        case 'REMOVE_TOY':
            return {
                ...state,
                toys: state.toys.filter(toy => toy._id !== action.toyId)
            };
        case 'ADD_TOY':
            return {
                ...state,
                toys: [...state.toys, action.toy]
            }
        case 'UPDATE_TOY':
            return {
                ...state,
                toys: state.toys.map(toy => {
                    if (toy._id === action.toy._id) return action.toy;
                    return toy;
                })
            }
        case 'UPDATE_TOY_FILTER':
            return {
                ...state,
                currFilter: { ...action.filter }
            }
        case 'TOGGLE_LOAD':
            return {
                ...state,
                isLoading: action.loadingStatus
            }
        default:
            return state;
    }
}

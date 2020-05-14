import toyService from '../../services/toyService.js';

export function loadToys(filterBy,loadingStatus) {
    return dispatch => {
        dispatch({ type: 'TOGGLE_LOAD', loadingStatus });
        return toyService.query(filterBy)
            .then(toys => dispatch({ type: 'SET_TOYS', toys }))
            .then((dispatchRes) => Promise.resolve(dispatchRes.toys))
    }
}

export function loadToy(id) { //for the details page, stil not implemented..
    return dispatch => {
        toyService.get(id)
            .then(toy => {
                dispatch({ type: 'SET_TOY', toy });
            })
    }
}

export function saveToy(toy) { 
    return dispatch => {
        const type = toy._id ? 'UPDATE_TOY' : 'ADD_TOY';
        return toyService.save(toy)
            .then(savedToy => dispatch({ type, toy: savedToy }))
            .then((dispatchRes) => Promise.resolve(dispatchRes.toy))
    }
}

export function removeToy(toyId) {
    return dispatch => {
        return toyService.remove(toyId)
            .then(() => dispatch({ type: 'REMOVE_TOY', toyId }))
            .then(() => Promise.resolve())
    }
}

export function saveFilter(filter) {
    return dispatch => {
        return toyService.query(filter)
            .then(() => dispatch({ type: 'UPDATE_TOY_FILTER', filter }))
            .then(() => Promise.resolve())
    }
}


export function toggleLoad(loadingStatus) {
    return (dispatch) => {
        dispatch({ type: 'TOGGLE_LOAD', loadingStatus });
    };
}

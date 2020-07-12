const _add = () => ({ 
    type: 'ADD' 
})

const _substract = () => ({ 
    type: 'SUBSTRACT' 
})

// http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-04&sortBy=publishedAt&apiKey=220e8eeebb564df28c2afc3e498c6ab5
export function incrementAsync() {
    return async (dispatch) => {
        const response = await fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-04&sortBy=publishedAt&apiKey=220e8eeebb564df28c2afc3e498c6ab5');
        dispatch({
            type: 'GET_DATA',
            payload: response.json()
        })
        // setTimeout(() => {
        //     dispatch(_add());
        // },5000)
    }
}
export function decrementAsync() {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch(_substract());
        },5000)
    }
}
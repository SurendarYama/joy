export const joy = () => {
    const useReducer = (initialState, reducer) => {
        let globalState = initialState;
        let state = () => globalState;
        const isArray = (param) => Array.isArray(param);
        const initialStateTypeCheck = (
            typeof initialState === 'undefined' || 
            typeof initialState !== 'object' ||
             isArray(initialState)
            );
        const reducerTypeCheck  = (typeof reducer === 'undefined' || typeof reducer !== 'function');
        if( initialStateTypeCheck || reducerTypeCheck ) {
            if(initialStateTypeCheck){
                throw new Error("InitialState is undefined or typeof initialState must be Object 🧨")
            } 
            throw new Error("reducer is undefined 🧨 or typeof reducer must be Function")
        };
        let setState = (mutatedState) => {
            return globalState = mutatedState;
        };
        const dispatch = (action) => {
            if(typeof action !== 'object' || isArray(action)){
                throw new Error("typeof action must be Object 🧨");
            }
            if(!action.hasOwnProperty('type')){
                throw new Error("action object must have type property 🧨")
            }
          setState(reducer(globalState, action))
        };
        return [
            state,
            dispatch
        ]
    };
    return {
        useReducer
    }
}
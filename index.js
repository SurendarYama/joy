export const joyReducer = (initialState, reducer) => {
    let globalState = initialState;
    let getState = () => globalState;
    let setState = (mutatedState) => {
        return globalState = mutatedState;
    };
    const dispatch = (action) => {
        setState(reducer(globalState, action))
    };
    return [
        getState,
        dispatch
    ]
};
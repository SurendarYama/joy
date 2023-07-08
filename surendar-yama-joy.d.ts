declare module 'surendar-yama-joy' {
    export function joyReducer(
        initialState: object,
        reducerFn: (state: object, action:{type: string, payload?: any}) => any 
        ): [
            () => object,
            (action:object) => void
        ]
}
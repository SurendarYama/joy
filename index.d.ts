declare module 'surendar-yama-joy' {
    export function joyReducer(
        initialState: any,
        reducerFn: (state: any, action:{type: string, payload?: any}) => any 
        ): [
            () => any,
            (action:any) => void
        ]
}
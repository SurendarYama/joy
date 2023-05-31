# joy
```

import { joy } from "surendar-yama-joy";
const onDomContentLoaded = () => {
    const initialState = {
        count:0
    };
    const reducerFn = (state, action) => {
            switch(action.type){
                case 'increment':
                    return { ...state, count: state.count + 1 }
                case 'decrement':
                    return { ...state, count: state.count - 1 }
                default:
                    return state
            }
    }
    const {useReducer} = joy();
    const [state, dispatch] = useReducer(initialState , reducerFn);

    console.log(state())
    dispatch({
        type :"increment",
    })
    console.log(state())
    dispatch({
        type :"increment",
    })
    console.log(state())
    dispatch({
        type :"decrement",
    })
    console.log(state())

}
document.addEventListener("DOMContentLoaded", onDomContentLoaded)
```
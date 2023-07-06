# surendar-yama-joy

surendar-yama-joy library allow you to use useReducer hook in javascript for both client and server side.

```
    npm i surendar-yama-joy
```

####  In client side please use any build tool like [parceljs](https://parceljs.org/)
### Commonjs module import
```
    const { joyReducer } = require("surendar-yama-joy");

```

### ES Module import 
```
import { joyReducer } from "surendar-yama-joy"

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
   
    const [getState, dispatch] = joyReducer(initialState , reducerFn);

    console.log(getState())
    dispatch({
        type :"increment",
    })
    console.log(getState())
    dispatch({
        type :"increment",
    })
    console.log(getState())
    dispatch({
        type :"decrement",
    })
    console.log(getState())

}
document.addEventListener("DOMContentLoaded", onDomContentLoaded)
```
# surendar-yama-joy

surendar-yama-joy library allow you to use useReducer hook in javascript for both client and server side.

```
    npm i surendar-yama-joy
```

####  In client side please use any build tool like [parceljs](https://parceljs.org/)
### Commonjs module import
```
    const pkg = require("surendar-yama-joy");
    const {joy} = pkg;
```

### ES Module import 
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
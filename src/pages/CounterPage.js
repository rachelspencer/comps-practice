import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state, 
                count: state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                ...state, 
                count: state.count - 1
            };
        
        case ADD_VALUE_TO_COUNT:
            return {
                ...state, 
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            };

        case SET_VALUE_TO_ADD:
            return {
                ...state, 
                valueToAdd: action.payload,
            };
        
        default:
            // throw new Error('unexpected action type:' + action.type)
            // or
            return state;
    }
};

function CounterPage ({ initialCount }) {
//    const [count, setCount] = useState(initialCount);
//    const [valueToAdd, setValueToAdd ] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    console.log(state);

   const increment = () => {
    dispatch({
        type: INCREMENT_COUNT
    });
   };

   const decrement = () => {
    dispatch({
        type: DECREMENT_COUNT,
    })
   }

   const handleChange = (event) => {
    //paseInt will return NAN for 0, so to account for that adding || 0 will be used if a falsie is returned 
    const value = parseInt(event.target.value) || 0;

    dispatch({
        type: SET_VALUE_TO_ADD,
        payload: value,
    });
   };

   const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
        type: ADD_VALUE_TO_COUNT,
    });
   };
    
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                // the || "" is we have a value to add of 0 don't print the ), just add an empty string
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray border border-gray-300"/>
                <button>Add it!</button>
            </form>
        </Panel>
    )
};

export default CounterPage;
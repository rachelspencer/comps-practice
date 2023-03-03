import { useState } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';


function CounterPage ({ initialCount }) {
   const [count, setCount] = useState(initialCount);
   const [valueToAdd, setValueToAdd ] = useState(0);

   const increment = () => {
    setCount(count + 1);
   }

   const decrement = () => {
    setCount(count - 1);
   }

   const handleChange = (event) => {
    //paseInt will return NAN for 0, so to account for that adding || 0 will be used if a falsie is returned 
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value)
   };

   const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd)
    setValueToAdd(0);
   }
    
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {count}</h1>
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
                    value={valueToAdd || ""}
                    onChange={handleChange}
                    type="number" 
                    className="p-1 m-3 bg-gray border border-gray-300"/>
                <button>Add it!</button>
            </form>
        </Panel>
    )
};

export default CounterPage;
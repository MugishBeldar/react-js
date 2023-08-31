import React from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button';
function PerentComponent() {
    const [count, setCount] = React.useState(25);
    const [salary, setSalary] = React.useState(10000);

    // use call back hook for prevent unnecessary render component 
    // const incrementCount = () => {
    //     setCount(count + 5);
    // }

    // const incrementSalary = () => {
    //     setSalary(salary + 1000);
    // }

    const incrementCount = React.useCallback(() => {
        setCount(count + 1)
    }, [count])

    const incrementSalary = React.useCallback(() => {
        setSalary(salary + 1)
    }, [salary])
    console.log("inside perentcomponent.js");
    return (
        <div>
            <h1>Perent Component</h1>
            <Title />
            <Count text="count" count={count} />
            <Button incrementCount={incrementCount} count={count} > Increament Count</Button>
            <Count text="salary" count={salary} />
            <Button incrementCount={incrementSalary} count={salary} > Increment Salary </Button>
        </div>
    )
}

export default React.memo(PerentComponent)
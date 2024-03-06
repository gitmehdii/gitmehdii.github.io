import { useState } from 'react';

function DoubleNumber() {
    const [number, setNumber] = useState(4);

    function handleDoubleNumber() {
        setNumber(number * 2);
    }

    return (
        <>
            <span>{number}</span>
            <button onClick={handleDoubleNumber}>Double the number</button>
        </>
    )
}

export default DoubleNumber;
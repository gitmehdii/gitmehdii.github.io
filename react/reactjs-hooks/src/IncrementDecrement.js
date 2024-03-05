
import React, { useState } from 'react';

function IncrementDecrement() {
    const [Count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(Count + 1)}>+</button>
            {Count}
            <button onClick={() => setCount(Count - 1)}>-</button>
        </div>
    )
}

export default IncrementDecrement;
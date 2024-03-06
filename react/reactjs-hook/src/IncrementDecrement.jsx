
import { useState } from 'react';

import styled from 'styled-components'

const Button = styled.button`
  background: transparent!important;
  border-radius: 3px!important;
  border: 2px solid #BF4F74!important;
  color: #BF4F74!important;
  margin: 0 1em!important;
  padding: 0.25em 1em!important; 
    &:hover {
        background-color: lightblue!important;
    }
`
function IncrementDecrement() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            {count}
            <Button onClick={() => setCount(count - 1)}>-</Button>
        </div>
    )
}

export default IncrementDecrement;
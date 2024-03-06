import { useState } from 'react';

function TextUpdater() {
    // Initialize state with a default value
    const [text, setText] = useState('Initial text');

    function HandleUpdateText() {
        setText('Updated text');
    }

    return (
        <>
            <span>{text}</span>
            <button onClick={HandleUpdateText}>Update Text</button>
        </>
    );
}

export default TextUpdater;
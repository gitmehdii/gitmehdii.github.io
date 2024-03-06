import IncrementDecrement from './IncrementDecrement';
import DoubleNumber from './DoubleNumber';
import TextUpdater from './TextUpdater';

import './Counter.css'

function App() {
    return (
        <div className="box-counter">
            <IncrementDecrement />
            <DoubleNumber />
            <TextUpdater />
        </div>
    )
}

export default App
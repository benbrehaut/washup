import { h } from 'preact';
import { useState } from 'preact/hooks';
import {Header} from './components/Header';
import {Card} from './components/Card';
import {Emoji} from './components/Emoji';
import {Input} from './components/Input';

function App() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    // You can also pass a callback to the setter
    const decrement = () => setCount((currentCount) => currentCount - 1);

    return(
        <div class="app">
            <div class="app__container">
                <Header />

                <Card title="Members">
                    <Emoji name="Cat">
                        🐈
                    </Emoji>

                    <p>
                        Emily
                    </p>

                    <Input name="field" value={count} labelID="test" />

                    <button type="button" onClick={increment}>
                        Plus
                    </button>
                </Card>
            </div>
        </div>
    );
}

export default App;

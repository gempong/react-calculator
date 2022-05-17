import React, { useState } from 'react';
import './assets/css/App.css';
import Output from './components/Output';
import KeyPad from './components/KeyPad';

function App() {
    const [output, setOutput] = useState('');

    const onClick = button => {
        if (button === "=") {
            calculate()
        }

        else if (button === "C") {
            reset()
        }

        else if (button === "CE") {
            backspace()
        }

        else {
            setOutput(output + button)
        }
    };

    const calculate = () => {
        var checkResult = ''
        if(output.includes('--')){
            checkResult = output.replace('--','+')
        }

        else {
            checkResult = output
        }

        try {
            setOutput((eval(checkResult) || "" ) + "")
        } catch (e) {
            setOutput("error")
        }
    };

    const reset = () => {
        setOutput('')
    };

    const backspace = () => {
        setOutput(output.slice(0, -1))
    };

    return (
        <div className="App">
            <div className='container'>
                <div className='calculator'>
                    <Output output={output} />
                    <KeyPad onClick={onClick} />
                </div>
            </div>
        </div>
    );
}

export default App;

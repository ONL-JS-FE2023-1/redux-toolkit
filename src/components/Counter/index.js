import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
const {
    LANGUAGE: {
        EN_US, UA_UA, AR_AR, HE_HE
    }
} = CONSTANTS;

const translations = new Map([
    [
        EN_US,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA,
        {
            countText: 'Стан лічильника',
            stepText: 'Крок',
            incrementText: 'Збільшити',
            decrementText: 'Зменшити'
        }
    ]
])

const Counter = (props) => {
    const { count, step, language, increment, decrement, setStep, setLang } = props;
    const translation = translations.get(language);
    const { countText, stepText, incrementText, decrementText } = translation;
    //console.log(props);
    return (
        <div>
            <select value={language} onChange={({ target: { value } }) => setLang(value) }>
                <option value={EN_US}>English</option>
                <option value={UA_UA}>Українська</option>
            </select>
            <p>{countText}: {count}</p>
            <label>
                {stepText}:
                <input 
                    type="number" 
                    value={step}
                    onChange={({ target: { value } }) => setStep(value)}
                />
            </label>
            <p>{stepText}: {step}</p>
            <button onClick={() => increment()}>{incrementText}</button>
            <button onClick={() => decrement()}>{decrementText}</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        ...state.counter,
        language: state.lang
    };
}

// v1
// function mapDispatchToProps(dispatch) {
//     return {
//         incrementCb: () => dispatch(increment()),
//         decrementCb: () => dispatch(decrement()),
//         setStepCb: ({target: { value }}) => dispatch(setStep(value))
//     }
// }

// v2
const mapDispatchToProps = {
    increment,
    decrement,
    setStep,
    setLang
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

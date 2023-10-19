import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
const {
    LANGUAGE: {
        EN_US, UA_UA
    }, 
    LANGUAGE
} = CONSTANTS;

const translations = new Map([
    [
        EN_US.VALUE,
        {
            countText: 'Count',
            stepText: 'Step',
            incrementText: 'Increment',
            decrementText: 'Decrement'
        }
    ],
    [
        UA_UA.VALUE,
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
                {Object.values(LANGUAGE).map((langObj) => (
                    <option key={langObj.VALUE} value={langObj.VALUE}>{langObj.OPTION_TEXT}</option>
                ))}
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

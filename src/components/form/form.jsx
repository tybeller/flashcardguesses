import './form.css';
import { useState, useEffect } from 'react';

function Form(props) {
    
    const [guess, setGuess] = useState('');

    const [submittedGuess, setSubmittedGuess] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setSubmittedGuess("");
        }, 1000);
    }, [submittedGuess, props.cardWord]);

    if (guess != "" && submittedGuess != "" && guess != submittedGuess) {
        setSubmittedGuess("");
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(guess);
        setSubmittedGuess(guess);
        setGuess('');
    }

    return (
        <form id="guess-form" onSubmit={ handleSubmit } className={`form ${submittedGuess === props.cardWord ? "correct" : submittedGuess === "" ? "" : "incorrect" }`}>
            <input className="in txt" type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
            <input className="in" type="submit" />
        </form>
    )
}

export default Form;
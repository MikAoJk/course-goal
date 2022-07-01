import {ChangeEvent, FormEvent, useState} from "react";

import Button from '../../UI/Button/Button';
import styles from "./CourseInput.module.css"

interface CourseInputProps {
    onAddGoal: (enteredValue: string) => void;
}

/*
interface FormControlProps {
    invalid: boolean;
}

const FormControl = styled.div<FormControlProps> `

margin: 0.5rem 0;

& label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(formControlProps: FormControlProps) => (formControlProps.invalid ? 'red' : 'black')};
}

& input {
    display: block;
    width: 100%;
    border: 1px solid ${(formControlProps: FormControlProps) => (formControlProps.invalid ? 'red' : '#ccc')};
    background: ${(formControlProps: FormControlProps) => (formControlProps.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
}

& input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
}
`;
 */

const CourseInput = (courseInputProps: CourseInputProps) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        courseInputProps.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
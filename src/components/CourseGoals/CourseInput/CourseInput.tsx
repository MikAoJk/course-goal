import {ChangeEvent, FormEvent, useState} from "react";

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

interface CourseInputProps {
    onAddGoal: (enteredValue: string) => void;
}

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
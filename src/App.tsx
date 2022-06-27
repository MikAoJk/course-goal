import React, {useState} from 'react';
import './App.css';
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {

    const doAllExercises: CourseGoals = {id: 'g1', text: 'Do all exercises!'}
    const finishthecourse: CourseGoals = {id: 'g2', text: 'Finish the course!'}

    const initCourseGoals =
        [doAllExercises, finishthecourse]

    const [courseGoals, setCourseGoals] = useState(initCourseGoals);

    const addGoalHandler = (enteredText: string) => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
            return updatedGoals;
        });
    };

    const deleteItemHandler = (goalId: string) => {
        setCourseGoals(prevGoals => {
            return prevGoals.filter(goal => goal.id !== goalId);
        });
    };

    let content = (
        <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
        );
    }

    return (
        <div>
            <section id="goal-form">
                <CourseInput onAddGoal={addGoalHandler}/>
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    );
}

export type CourseGoals = {
    id: string,
    text: string
}


export default App;

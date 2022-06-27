import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import './CourseGoalList.css';
import {CourseGoals} from "../../../App";

interface CourseGoalListProps {
    onDeleteItem: (goalId: string) => void;
    items: CourseGoals[];
}

const CourseGoalList = (courseGoalListProps: CourseGoalListProps) => {
    return (
        <ul className="goal-list">
            {courseGoalListProps.items.map(goal => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={courseGoalListProps.onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
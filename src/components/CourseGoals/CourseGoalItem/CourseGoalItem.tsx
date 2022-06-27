import './CourseGoalItem.css';
import {ReactNode} from "react";

interface CourseGoalItemProps {
    onDelete: (id: string) => void;
    id: string;
    children: ReactNode;
}

const CourseGoalItem = (courseGoalItemProps: CourseGoalItemProps) => {

    const deleteHandler = () => {
        courseGoalItemProps.onDelete(courseGoalItemProps.id);
    };

    return (
        <li className="goal-item" onClick={deleteHandler}>
            {courseGoalItemProps.children}
        </li>
    );
};

export default CourseGoalItem;
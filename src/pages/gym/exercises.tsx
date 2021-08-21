import { IonSpinner } from "@ionic/react";
import { useState, useEffect } from "react";
import { LayoutType } from '../../Enums';
import { testExercisesInCategories } from '../../testData.js';

interface ExercisesParam {
    layout: LayoutType
}

interface Exercise {
    name: string,
    weight: number,
    isDouble: boolean,
    reps: number,
    sets: number,
    maxWeight: number
}

interface ExerciseCategory {
    name: string,
    exercises: Exercise[]
}

interface ExercisesContainer {
    exercises: ExerciseCategory[]
}

const listLayout = (exercises: ExerciseCategory[]) => (exercises.map(cat => (
    <div className="exercises-list-category">
        <div className="exercises-list-category-heading">{cat.name}</div>
        {cat.exercises.map(e => (
            <div className="exercises-list-item ">
                <div className="exercises-list-info">
                    <div className="exercises-list-title">{e.name}</div>
                    <div className="exercises-list-data">
                        <div>{e.weight}kg</div>
                        <div>{e.reps} reps</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)));

const categoriesLayout = (exercises: ExerciseCategory[]) => (<div className="exercises-categories-container">
    {exercises.map(cat => (
        <div className="exercises-categories-category">
            <div className="exercises-categories-category-text-container">
                <div className="exercises-categories-category-text">
                    {cat.name}
                </div>
            </div>
        </div>
    ))}
</div>);

const Exercises: React.FC<ExercisesParam> = (params: ExercisesParam) => {
    const [exercises, setExercises]: any = useState(null);

    useEffect(() => {
        // todo: hit api for exercises
        setExercises(testExercisesInCategories.exercises);
    }, []);

    return (<div className="exercises-container">
        {exercises === null ? (
            <div className="spinner-container">
                <IonSpinner name="crescent" color="primary"/>
            </div>
        ) : (
            params.layout === LayoutType.Categories
                ? categoriesLayout(exercises)
                : listLayout(exercises)
        )}
    </div>);
}

export default Exercises;
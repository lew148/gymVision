import { testExercisesInCategories } from '../../testData.js';

const exercises: React.FC = () => {
    return (<div className="exercises-container">
        {testExercisesInCategories.map(cat => (
            <div className="exercises-category">
                <div className="exercises-category-heading">{cat.name}</div>
                {cat.exercises.map(e => (
                    <div className="exercises">
                        <div className="exercises-info">
                            <div className="exercises-title">{e.name}</div>
                            <div className="exercises-data">
                                <div>{e.weight}kg</div>
                                <div>{e.reps} reps</div>
                                <div>{e.sets} sets</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>);
}

export default exercises;
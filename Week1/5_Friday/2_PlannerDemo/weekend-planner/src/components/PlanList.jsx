import React from 'react'

const PlanList = (props) => {

    //! Things we'll need...
    //? 1. Get our planList from the parent!
    //? 2. Handle a Delete Function (using the function also from the parent)
    //? 3. Be able to toggle if an activity was completed and update the list. 
    //? -----> This should be defined in the parent and then used by the list.

    const handleDelete = (targetIdx) => {
        props.deletePlan(targetIdx);
    }

    const handleUpdate = (targetIdx, targetBool) => {
        props.updatePlan(targetIdx, targetBool)
    }

    return (
        <fieldset>
            <legend>PlanList.jsx</legend>

            <table border="3">
                <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Time(Hrs)</th>
                        <th>High Priority</th>
                        <th>Action</th>
                        <th>Completed?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.planList.map(
                            (eachPlan, idx) => {

                                return (
                                    <tr key={idx} style={eachPlan.completed ? { backgroundColor: "green" } : { backgroundColor: "white" }}>
                                        <td>{eachPlan.activity}</td>
                                        <td>{eachPlan.time}</td>
                                        <td>{eachPlan.priority ? "Yes" : "No"}</td>
                                        <td>
                                            <button onClick={() => handleDelete(idx)}>Delete</button>
                                        </td>
                                        <td>
                                            <input type="checkbox" onChange={(e) => handleUpdate(idx, e.target.checked)} />
                                        </td>
                                    </tr>

                                )

                            }
                        )
                    }
                </tbody>
            </table>

        </fieldset >
    )
}

export default PlanList
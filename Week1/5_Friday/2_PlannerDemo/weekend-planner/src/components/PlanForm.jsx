import React from 'react'
import { useState } from 'react'

const PlanForm = (props) => {

    const [activity, setActivity] = useState("");
    const [time, setTime] = useState(0);
    const [priority, setPriority] = useState(false);

    //? We need to be able to pass up (lift) the data from the form to update the state of the list in the parent!
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlan = { activity, time, priority, completed: false };
        console.log(newPlan);

        props.addPlan(newPlan)
    }

    return (
        <fieldset>
            <legend>PlanForm.jsx</legend>


            <form onSubmit={handleSubmit}>
                <div>
                    <label>Activity : </label>
                    <input name="activity" type="text" value={activity} onChange={(e) => setActivity(e.target.value)} />
                </div>
                <div>
                    <label>Time(Hours) : </label>
                    <input name="time" type="number" onChange={(e) => setTime(e.target.value)} />
                </div>
                <div>
                    <label>High Priority?</label>
                    {/* Check boxes return true/false from the checked attribute */}
                    <input name="priority" type="checkbox" onChange={(e) => setPriority(e.target.checked)} />
                </div>
                <input type="submit" />
            </form>

        </fieldset>
    )
}

export default PlanForm
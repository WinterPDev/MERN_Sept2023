import React, { useState } from 'react'
import PlanForm from '../components/PlanForm';
import PlanList from '../components/PlanList';



const PlanContainer = () => {
    //! We'll need a state to track our Plans here.
    const [planList, setPlanList] = useState([]);



    //! Create an "addPlan" function for updating our list from our form.
    const addPlan = (newPlan) => {
        setPlanList([...planList, newPlan])
        console.log(planList);
    }


    //! Create a "deletePlan" for removing a Plan from our list through a button in the list.
    const deletePlan = (targetIdx) => {
        const filteredList = planList.filter(
            (eachPlan, idx) => targetIdx !== idx)

        setPlanList(filteredList);
    }

    const updatePlan = (targetIdx, targetBool) => {
        const updatedList = planList.map(
            (eachPlan, idx) => {
                if (targetIdx === idx) {
                    return { ...eachPlan, completed: targetBool }
                } else {
                    return eachPlan;
                }
            }
        )
        setPlanList(updatedList);

    }


    //! Create a way to update our plan when we toggle completion in our list.


    return (
        <fieldset>
            <legend>PlanContainer.jsx</legend>
            <h2>Labor Day Weekend Plans</h2>
            {/* How can we give our function addPlan to our Form/List? */}
            <PlanForm addPlan={addPlan} />
            <PlanList planList={planList} deletePlan={deletePlan} updatePlan={updatePlan} />
        </fieldset>
    )
}

export default PlanContainer
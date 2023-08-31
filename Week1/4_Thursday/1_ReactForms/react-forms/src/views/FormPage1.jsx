import { useState } from 'react';
import FormDisplayComponent from '../components/FormDisplayComponent';


const FormPage1 = (props) => {

    // Title
    // Release year

    const [title, setTitle] = useState("");
    const [year, setYear] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // No database :(

        const newGame = { title, year };
        console.log(newGame)


    }

    return (
        <>
            <fieldset>
                <legend>FormPage1.jsx</legend>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title : </label>
                        <input name="title" type="text"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </div>
                    <div>
                        <label>Year : </label>
                        <input name="year" type="number" value={year} onChange={(e) => { setYear(e.target.value) }} />
                    </div>

                    <input type="Submit" />

                </form>

                <FormDisplayComponent title={title} year={year} />

            </fieldset>
        </>
    )




}


export default FormPage1;
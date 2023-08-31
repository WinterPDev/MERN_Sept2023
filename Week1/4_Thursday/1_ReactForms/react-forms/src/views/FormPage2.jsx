import { useState } from 'react';
import FormDisplayComponent from '../components/FormDisplayComponent';


const FormPage2 = () => {

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [year, setYear] = useState(0);

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newGame = { title, year };
        console.log(newGame);
        setTitle("")
        setYear(0)
        // setHasBeenSubmitted(!hasBeenSubmitted);
        setHasBeenSubmitted(true);
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);

        if (title.length < 2) {
            setTitleError("Title Must be 2+ characters!");
        } else {
            setTitleError("");
        }
    }


    return (
        <>
            <fieldset>
                <legend>FormPage2.jsx</legend>

                <h2>{formMessage()}</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title : </label>
                        <input name="title" type="text" value={title} onChange={handleTitle} />
                        {
                            titleError ?
                                <p style={{ color: "red" }}>{titleError}</p> :
                                <></>
                        }
                    </div>
                    <div>
                        <label>Year : </label>
                        <input name="year" type="number" value={year} onChange={(e) => { setYear(e.target.value) }} />
                        {
                            year < 1000 ?
                                <p style={{ color: "red" }}>Must be a Valid Year!</p> :
                                <></>
                        }
                    </div>

                    <input type="Submit" />

                </form>

                <FormDisplayComponent title={title} year={year} />

            </fieldset>
        </>
    )




}


export default FormPage2;
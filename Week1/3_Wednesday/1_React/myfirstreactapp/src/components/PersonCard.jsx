


const PersonCard = (props) => {

    const { firstName, age } = props;

    const alertMSG = () => {
        alert('Hey a pop up!')
    }

    return (
        <div>
            <h1 style={{ color: "red" }}>
                {firstName}
            </h1>
            <p>Age: {age}</p>
            <p>Hair Color: purple</p>

            <button onClick={alertMSG}>Click for Pop Up!</button>
        </div>
    );
}


export default PersonCard;

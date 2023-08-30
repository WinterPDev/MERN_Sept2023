import { useState } from 'react';


const FoodCard = (props) => {
    const { foodName, foodDesc, foodLikes } = props;
    // likes = {likesCount : 0};
    const [likes, setLikes] = useState({
        likesCount: foodLikes
    });


    const likeHandler = () => {
        setLikes({
            likesCount: likes.likesCount + 1
        })
    }

    const dislikeHandler = () => {
        setLikes({
            likesCount: likes.likesCount - 1
        })
    }


    return (
        <fieldset>
            <legend>FoodCard.jsx</legend>
            <div>
                <p>Name : {foodName}</p>
                <p>Description: {foodDesc}</p>
                <p>Likes : {likes.likesCount}</p>


                <button onClick={likeHandler}>Like ⬆️</button>
                <button onClick={dislikeHandler}>Dislike ⬇️</button>
            </div>
        </fieldset>
    );
};

export default FoodCard;
import React from "react";

function Button (){
    const handleClick = () => {
        window.open("https://www.imdb.com/calendar/?region=gb");
    };
    return(
        <div>
            
            <button onClick={handleClick}>View more upcoming releases</button>
        </div>

    );
};

export default Button;
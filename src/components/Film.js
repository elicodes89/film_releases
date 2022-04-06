import React from "react";

const Film = ({ name , url , id }) => {
    return (
        <>
        <div className = "list">
        <a  target = "_blank" href = {url} > {id} {name}  </a>
        </div>
        </>
    )
}

export default Film;
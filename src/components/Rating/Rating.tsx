import React from "react";

function Star() {
    console.log('Star rendered')
    return (
        <div>star</div>
    )
}

export function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
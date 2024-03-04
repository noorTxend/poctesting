import React from "react";
import "./Heading.css"

interface HeadingProps {
    label: string,
}

const Heading = (props: HeadingProps) => {
    return(
        <h1>{props.label}</h1>
    );
}

export default Heading;

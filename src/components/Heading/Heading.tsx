import React from "react";

interface HeadingProps {
    label: string,
}

const Heading = (props: HeadingProps) => {
    return(
        <h1>{props.label}</h1>
    );
}

export default Heading;

import React from "react";

interface ParagrpahProps {
    label : string,
    css: string,
}

const Paragrpah = (props: ParagrpahProps) => {
    return(
      <p className={props.css}>
        {props.label}
      </p>
    );
};

export default Paragrpah;
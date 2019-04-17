import React from "react";

export default function Link(props) {
  const style = {
    color: props.selected ? "white" : "grey",
    textDecoration: "none",
    paddingLeft: 15
  };

  return (
    <a style={style} href={props.url}>
      {props.name}
    </a>
  );
}

import React from "react";
import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return <Badge variant={props.}>{props.tagText}</Badge>;
}

export default Tags;

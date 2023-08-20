import React from "react";
import { Badge } from "react-bootstrap";

function Tags(props) {
  return <Badge  variant bg ={props.tagColor}>{props.tagText}</Badge>;
}

export default Tags;

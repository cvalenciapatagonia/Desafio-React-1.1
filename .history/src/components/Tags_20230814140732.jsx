import React from "react";
import { Badge } from "react-bootstrap";

function Tags(props) {
  return <Badge bg variant={props.tagColor}>{props.tagText}</Badge>;
}

export default Tags;

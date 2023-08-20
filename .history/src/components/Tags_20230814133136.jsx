import React from "react";
import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return <Badge variant={tagColor}>{props.tagText}</Badge>;
}

export default Tags;

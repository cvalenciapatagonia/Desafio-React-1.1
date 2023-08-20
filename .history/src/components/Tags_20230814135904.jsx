import React from "react";
import Button from 'react-bootstrap/Button';

function Tags(props) {
  return <Badge variant={props.tagColor}>{props.tagText}</Badge>;
}

export default Tags;

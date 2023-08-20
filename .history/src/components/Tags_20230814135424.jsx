import React from "react";
import Button from 'react-bootstrap/Button';

function Tags(props) {
  return <Button variant={props.tagColor}>{props.tagText}</Button>;
}

export default Tags;

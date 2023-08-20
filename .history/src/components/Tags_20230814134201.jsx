import React from "react";
import Badge from "react-bootstrap/Badge";

function Tags(tagColor, tagText) {
  return <Badge variant={tagColor}>{tagText}</Badge>;
}

export default Tags;
s
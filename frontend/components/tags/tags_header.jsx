import React from "react";

const TagsHeader = ({ tag }) => {
  return (
    <div className="tag-header-outer">
      <img src={window.tag_background} alt="tag page headerimage" />
      <h1 className="tag">{tag}</h1>
    </div>
  );
};

export default TagsHeader;

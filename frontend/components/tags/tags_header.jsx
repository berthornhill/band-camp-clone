import React from "react";

const TagsHeader = ({ tag }) => {
  return (
    <div className="tag-header-outer">
      <div className="tag-header-inner">
        <h1 className="tag">{tag}</h1>
      </div>
    </div>
  );
};

export default TagsHeader;

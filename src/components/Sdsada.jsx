import React, { useState } from "react";

function TitleForm() {
  const [title, setTitle] = useState("");

  // This function updates the state when the input changes
  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Update the title state with the new input value
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter title"
      />
      <p>Current title: {title}</p>
    </div>
  );
}

export default TitleForm;

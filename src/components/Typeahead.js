import styled from "styled-components";

import React from "react";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [text, setText] = React.useState("");
  const listOfBooks = suggestions.filter(book => {
    let bookTitle = book.title.toLowerCase();
    let lowerCaseText = text.toLowerCase();
    if (bookTitle.includes(lowerCaseText)) {
      return true;
    } else {
      return false;
    }
  });
  const renderedList = listOfBooks.map(book => {
    return (
      <Suggestion onClick={() => handleSelect(book.title)}>
        {" "}
        {book.title}
      </Suggestion>
    );
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={ev => setText(ev.target.value)}
      />
      <button onClick={() => setText("")}> Clear </button>
      <ul>{text === "" ? [] : renderedList}</ul>
    </div>
  );
};

const Suggestion = styled.li`
  &:hover {
    background-color: pink;
    font-weight: bold;
  }
`;
export default Typeahead;

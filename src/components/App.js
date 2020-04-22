import React from "react";

import Typeahead from "./Typeahead";

import data from "../data";

import GlobalStyles from "../GlobalStyles";

function App(props) {
  return (
    <>
      <GlobalStyles />
      <div>
        <Typeahead
          suggestions={data.books}
          handleSelect={suggestion => {
            window.alert(suggestion);
          }}
        />
      </div>
    </>
  );
}

export default App;

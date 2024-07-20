import { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar";
import WordDefinition from "./components/WordDefinition";

function App() {
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  const fetchDefinition = async (word) => {
    try {
      const encodedWord = encodeURIComponent(word.trim());
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodedWord}`
      );
      console.log(`Response status: ${response.status}`);
      if (!response.ok) {
        throw new Error("Word not Found");
      }
      const data = await response.json();
      console.log('API response:', data);
      setDefinition(data[0]);
      setError(null);
    } catch (err) {
      console.error('Error fetching definition:', err);
      setDefinition(null);
      setError(err.message);
    }
  };

  return (
  <>
  <div className="app">
    <h1>Royal's Dictionary</h1>
    <SearchBar onSearch={fetchDefinition}/>
    { error ? <div className="error">
        {error}
    </div> : <WordDefinition definition={definition}/>}
  </div>
  </>
  )
}

export default App;

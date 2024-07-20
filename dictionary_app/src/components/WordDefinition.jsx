import React from 'react'

function WordDefinition({ definition }) {
 if (!definition){
    return <div className='word-definition'>Please enter a word to search</div>
 }
 if (!definition.meanings || definition.meanings.length === 0) {
    return <div className="word-definition">No meanings found for this word.</div>;
}

return (
    <div>
        <div className='word-definition'>
            <h2>{definition.word}</h2>
            {definition.meanings.map((meaning, index) => (
                <div key={index}>
                    <h3>{meaning.partOfSpeech}</h3>
                    <ul>
                        {meaning.definitions.map((def, idx) => (
                            <li key={idx}>{def.definition}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);
};

export default WordDefinition;
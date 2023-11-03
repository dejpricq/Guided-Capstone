import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // Make an API request to fetch characters based on currentPage and pageSize
    axios.get(`https://anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=${pageSize}`)
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, [currentPage, pageSize]);

  return (
    <div>
      <h1>Characters</h1>
      <div>
        {characters.map(character => (
          <div key={character.id}>
            <h3>{character.name || character.aliases[0]}</h3>
            <p>Culture: {character.culture}</p>
            <p>Gender: {character.gender}</p>
            {/* Add gender icons */}
          </div>
        ))}
      </div>
      {/* Implement pagination component */}
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalPages={10} // Assuming you know the total number of pages
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default Characters;

import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [housesPerPage, setHousesPerPage] = useState(10);

  useEffect(() => {
    // Fetch house data from the API and update the 'houses' state
  }, [currentPage, housesPerPage]);

  return (
    <div>
      <h2>Houses</h2>
      {/* Display house data */}
      <Pagination
        currentPage={currentPage}
        housesPerPage={housesPerPage}
        totalHouses={houses.length}
        setCurrentPage={setCurrentPage}
        setHousesPerPage={setHousesPerPage}
      />
    </div>
  );
};

export default Houses;

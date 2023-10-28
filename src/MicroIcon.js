import React, { useState } from 'react';
import Image1 from './Images/Image1.jpg'
import Image2 from './Images/Image2.jpg'
import Image3 from './Images/Image3.jpg'
import Image4 from './Images/Image4.jpg'

const MicrosoftWordTable = () => {
  const [selectedCells, setSelectedCells] = useState([]);
  const cellData = [
    { id: 1, image: Image1},
    { id: 2, image: Image2 },
    { id: 3, image: Image3 },
    { id: 4, image: Image4 },
  ];

  const toggleCellSelection = (cellId) => {
    if (selectedCells.includes(cellId)) {
      setSelectedCells(selectedCells.filter(id => id !== cellId));
    } else {
      setSelectedCells([...selectedCells, cellId]);
    }
  };

  return (
    <>
    <div className="words-tabular">
    <div className="word-table">
        {cellData.map(cell=>(
            <div
            key={cell.id}
            className={`cell ${selectedCells.includes(cell.id)? 'selected':''}`} 
            onClick={()=>toggleCellSelection(cell.id)}>
            </div>
        ))}
    </div>
    </div>
    <div className="selected-images">
      {selectedCells.map(cellId => (
        <img key={cellId} src={cellData.find(cell => cell.id === cellId).image} alt={` ${cellId}`} />
      ))}
    </div>
    </>
    
  );
};

export default MicrosoftWordTable;

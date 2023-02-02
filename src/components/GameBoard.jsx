import React, { useState } from "react";

const GameBoard = () => {
  const [squares, setSquares] = useState(new Array(9).fill(null));

  const handleClick = (index) => {
    const dummySquares = [...squares];
    const crossOLabelLength = squares.filter((square) => Boolean(square));

    if (squares[index]) return;

    crossOLabelLength.length % 2 === 0
      ? dummySquares.splice(index, 1, "X")
      : dummySquares.splice(index, 1, "O");

    setSquares(dummySquares);


  }

  return (
    <div
      style={{
        display: "grid",
        height: "300px",
        width: "300px",
        gridTemplateRows: "repeat(3, minmax(0, 1fr))",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      }}
    >
      {squares.map((square, index) => {
        return <div style={{border: "1px solid black", padding: "10px"}} onClick={() => handleClick(index)}>
            {square}
        </div>
      })}
    </div>
  );
};

export default GameBoard;

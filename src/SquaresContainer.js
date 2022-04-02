import { useEffect, useState } from 'react';

export const SquaresContainer = () => {

  const [squares, setSquares] = useState([]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
          .then((response) => response.json())
          .then((result) => {
            setSquares((prevState) => {
              return prevState = result;
            })
          });
  });

  return (
    <>
        { squares.map(el => <img src={el.thumbnailUrl} />) }
    </>
  );
};
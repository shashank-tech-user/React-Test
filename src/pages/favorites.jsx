import React, { useEffect } from 'react';
import { fetchTutorial } from '../routes/api_call/tutorials';

const Favorites = () => {
  useEffect(() => {
    (async() => {
      const list = await fetchTutorial();
      console.log("List => ", list);
    })();

    return(() => {
      console.log("Test calling");
    });
  }, []);

  return (
    <div>This is favorites page.</div>
  )
}

export default Favorites
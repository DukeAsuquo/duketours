import Loading from "./components/Loading";
import Tours from "./components/Tours.jsx";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <diV className="title">
          <h2>No more tours</h2>
          <button style={{marginTop:'2rem'}} className="btn" onClick={() => getTours()}>
            Refetch Tours
          </button>
        </diV>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;

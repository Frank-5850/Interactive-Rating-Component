import "./App.css";
import RatingCard from "./Components/RatingCard";
import ThankYouCard from "./Components/ThankYouCard";
import CustomHook from "./CustomHook";

function App() {
  const [
    shown,
    setShown,
    ratings,
    currentRating,
    setCurrentRatings,
    changeColor,
    isSelected,
  ] = CustomHook();

  return (
    <div className="App">
      {shown ? (
        <RatingCard
          ratings={ratings}
          isSelected={isSelected}
          currentRating={currentRating}
          changeColor={changeColor}
          setShown={setShown}
        />
      ) : (
        <ThankYouCard currentRating={currentRating} />
      )}
    </div>
  );
}

export default App;

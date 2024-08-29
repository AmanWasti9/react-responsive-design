import "./App.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import CustomButton from "./Components/CustomButton/CustomButton";

function App() {
  return (
    <div className="container">
      <div id="searchbar">
        <Searchbar />
      </div>
      <div id="btn">
        <CustomButton btnText="Find Tasks" padding={"15px 80px"} />
      </div>
    </div>
  );
}

export default App;

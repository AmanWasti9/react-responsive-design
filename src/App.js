import "./App.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import CustomButton from "./Components/CustomButton/CustomButton";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BiFilterAlt } from "react-icons/bi";

function App() {
  return (
    <div className="container">
      <div id="searchbar">
        <Searchbar />
      </div>
      <div id="btn">
        <CustomButton btnText="Find Tasks" padding={"15px 80px"} />
      </div>
      <div id="filter">
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BiFilterAlt />
        </span>
        <span> Sort by: Relevance</span>
      </div>

      <main>{/* <JobDetails /> */}</main>
      <div id="sidebar">
        <Sidebar
          border={"none"}
          title="Sortitt"
          location="London, UK"
          months={"3 Months"}
          price={15}
          hiring1={"SEO Expert"}
          hiring2={"Digital Marketing"}
        />
        <Sidebar
          border={"2px solid #FF9900"}
          title="Amazon"
          location="WA, USA"
          months={"NA"}
          price={40}
          hiring1={"UX Designer"}
          hiring2={"React Dev"}
        />
      </div>
    </div>
  );
}

export default App;

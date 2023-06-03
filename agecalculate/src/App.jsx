import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./App.css";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [control, setControl] = useState(true);

  const handleClick = () => {
    const parsedDay = parseInt(day);
    const parsedMonth = parseInt(month);
    const parsedYear = parseInt(year);

    if (parsedYear > 2023 || parsedYear < 0) {
      alert("Lütfen doğru yıl giriniz");
      return;
    }

    if (parsedMonth > 12 || parsedMonth < 0) {
      alert("Lütfen doğru ay giriniz");
      return;
    }

    if (parsedDay > 31 || parsedDay < 0) {
      alert("Lütfen doğru gün giriniz");
      return;
    }

    setDay(360 - parsedDay);
    setMonth(12 - parsedMonth);
    setYear(2023 - parsedYear);
    setControl(false);
  };

  return (
    <div className="App">
      <div className="bg-white genel">
        <div className="formsİnputs">
          <div className="">
            <h4 className="mb-5">Day</h4>
            <input
              type="text"
              placeholder="DD"
              className="inputBorder"
              style={{ width: "100px" }}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="ml-5">
            <h4 className="mb-5">Month</h4>
            <input
              type="text"
              placeholder="MM"
              className="inputBorder"
              style={{ width: "100px" }}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className="ml-5">
            <h4 className="mb-5">Year</h4>
            <input
              type="text"
              placeholder="YYYY"
              className="inputBorder"
              style={{ width: "100px" }}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="iconButton" onClick={handleClick}>
              <KeyboardArrowDownOutlinedIcon />
          </button>
        </div>

        {control ? (
          <div className="seeAge">
            <h5 className="italic m-5 textClass flex">
              <p className="show">- -</p> years
            </h5>
            <h1 className="italic m-5 textClass flex">
              <p className="show">- -</p> months
            </h1>
            <h1 className="italic m-5 textClass flex">
              <p className="show">- -</p> days
            </h1>
          </div>
        ) : (
          <div className="seeAge">
            <h5 className="italic m-5 textClass flex">
              <p className="show">{year}</p> years
            </h5>
            <h1 className="italic m-5 textClass flex">
              <p className="show">{month} </p> months
            </h1>
            <h1 className="italic m-5 textClass flex">
              <p className="show">{day}</p> days
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

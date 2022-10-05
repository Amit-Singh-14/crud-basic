import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [moviename, setmoviename] = useState("");
  const [review, setreview] = useState("");
  const [moviereviewlist, setlist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setlist(response.data);
    });
  }, []);

  const submitreview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: moviename,
      movieReview: review,
    }).then(() => {
      alert("succesfull added");
    });
  };

  return (
    <div className="App">
      <h1>Crud Application</h1>
      <div className="form">
        <label> Movie Name</label>
        <input
          type="text"
          name="moviename"
          onChange={(e) => {
            setmoviename(e.target.value);
          }}
        />
        <label> Review</label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setreview(e.target.value);
          }}
        />

        <button onClick={submitreview}>Submit</button>

        {moviereviewlist.map((value) => {
          return (
            <h1>
              moviewname : {value.moviewname} | moview rewiew : {value.reviews}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default App;

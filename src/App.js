import { useState } from "react";

const dayOfTheWeek = (day, month, year) => {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date(year, month - 1, day).getDay()];
};
const App = () => {
  const [date, setDate] = useState(false);
  const bodyStyle = {
    backgroundColor: "#85FFBD",
    backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
    width: "100vw",
    height: "100vh",
  };
  const spanStyle = { display: "none", right: "10vw", position: "absolute" };

  return (
    <div style={bodyStyle}>
      <div className="container p-5" id="body">
        <div className="pt-5">
          <h1 className="display-1 title" style={{ lineHeight: "5rem" }}>
            <strong
              style={{ fontSize: "13rem" }}
              onMouseLeave={(e) => {
                e.target.style = "font-size:13rem;";
              }}
              onMouseEnter={(e) => {
                let t = e.target.nextElementSibling;
                t.style.display = "flex";
              }}
            >
              When?!
            </strong>{" "}
            <span style={spanStyle}>I was born?</span>
          </h1>
        </div>
        <p className="lead mt-5 pt-5" style={{}}>
          You know in witch day of the week you came to this worm soup of
          people? <strong>want to know</strong> ?<br />
          Enter you birthdate to know :)
        </p>
        <div className="actions text-center">
          {!date ? (
            <div className="input-group input-group-lg w-50 text-center m-auto">
              <input
                type="date"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={(e) => {
                  let t = e.target.previousElementSibling;
                  if (Object.keys(t.value).length !== 0) {
                    let tmp = t.value.split("-");
                    tmp[1] = parseInt(tmp[1]) - 1;
                    return setDate(
                      dayOfTheWeek(...t.value.split("-").reverse())
                    );
                  }
                  return alert(`Enter a date man!`);
                }}
              >
                When?!
              </button>
            </div>
          ) : null}
          {date ? (
            <h1 className="display-4 ">
              You was born on a <strong>{date}</strong>
              <small
                style={{
                  display: "flex",
                  fontSize: "2rem",
                  justifyContent: "center",
                }}
              >
                motherfucker!
              </small>
              <input
                class="btn btn-primary"
                onClick={() => {
                  setDate(false);
                }}
                value="Reset"
              />
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./App.css";
import dropDown from "./assets/dropdown-svgrepo-com.svg";
import arrow from "./assets/diagonal-arrow-svgrepo-com (1).svg";
import profileImg from "./assets/Daco_5511364.png";

function App() {
  const [tab, setTab] = useState("HomePage");
  const firstMenu = ["HomePage", "Generator", "Pricing-plan", "Blog - News"];
  const secMenu = ["About us", "Features", "Collection-2023", "Career"];
  const options = [
    "Free Edit",
    "Interactive",
    "Easy Interface",
    "Compare to other",
  ];
  return (
    <div className="App">
      <div className="MainContainer">
        <div className="container1">
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              fontFamily: "objective-med",
            }}
          >
            AIPatrn
          </div>
          <div className="container1-1">
            <div className="container1-1-1">
              {firstMenu.map((item) => {
                return (
                  <div
                    style={{ color: tab === item ? "black" : null }}
                    onClick={() => {
                      setTab(item);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="container1-1-1">
              {secMenu.map((item) => {
                return (
                  <div
                    style={{ color: tab === item ? "black" : null }}
                    onClick={() => {
                      setTab(item);
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div style={{ fontSize: 15, fontWeight: 800 }}>
              <div
                style={{
                  borderWidth: "1px",
                  borderColor: "#9fa0a8",
                  borderStyle: "solid",
                  padding: "10px 20px",
                  borderRadius: 25,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Menu
                <img
                  style={{ height: "25px", width: "25px" }}
                  src={dropDown}
                  alt="dropdownicon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div
            className="w-800 f-20"
            style={{ marginBottom: 20, color: "#6a6a77" }}
          >
            Revolutionize Your
          </div>
          <div
           className="subheader"
          >
            Creative Projects with the Ultimate AI-Powered
          </div>
          <div className="subPart">
            <div
              className="subheaderPart"
            >
              Pattern
            </div>
            <div
              style={{
                backgroundColor: "black",
                padding: "15px 20px",
                color: "white",
                borderRadius: 25,
                fontSize: 12,
                cursor: "pointer",
              }}
              className="w-800"
            >
              START GENERATING
            </div>
            <div
              className="w-800 tagline"
            >
              <div style={{ marginBottom: 5 }}>The Next generation </div>
              <div>
                <span style={{ color: "black" }}>Production</span> for Designers
              </div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div
          className="img1"
          >
            <div
              style={{
                position: "absolute",
                borderWidth: "1px",
                borderColor: "white",
                borderStyle: "solid",
                padding: "10px 20px",
                borderRadius: 25,
                color: "white",
                top: 20,
                left: 20,
              }}
            >
              01
            </div>
            <div
              style={{
                position: "absolute",
                color: "white",
                bottom: 30,
                left: 20,
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    height: "50px",
                    width: "50px",
                    color: "white",
                    borderStyle: "solid",
                    borderRadius: 50 / 2,
                  }}
                  src={profileImg}
                  alt="profile"
                />
                <img
                  style={{
                    position: "absolute",
                    left: 40,
                    height: "50px",
                    width: "50px",
                    color: "white",
                    borderStyle: "solid",
                    borderRadius: 50 / 2,
                  }}
                  src={profileImg}
                  alt="profile"
                />
                <img
                  style={{
                    position: "absolute",
                    left: 80,
                    height: "50px",
                    width: "50px",
                    color: "white",
                    borderStyle: "solid",
                    borderRadius: 50 / 2,
                  }}
                  src={profileImg}
                  alt="profile"
                />
              </div>
              <div style={{ fontSize: 20, fontFamily: "objective-med",textAlign:'left'}}>
                Learn from best mentors
              </div>
              <div
                style={{
                  borderWidth: "1px",
                  borderColor: "white",
                  borderStyle: "solid",
                  fontFamily: "objective-med",
                  padding: "5px",
                  borderRadius: 25,
                  color: "white",
                  fontSize: 12,
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                  cursor:'pointer'
                }}
              >
                START LEARNING
                <img
                  style={{
                    height: "10px",
                    width: "10px",
                    color: "white",
                  }}
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <div
          className="img2"
          >
            <div
              style={{
                position: "absolute",
                borderWidth: "1px",
                borderColor: "white",
                borderStyle: "solid",
                padding: "10px 20px",
                borderRadius: 25,
                color: "white",
                top: 20,
                left: 20,
              }}
            >
              02
            </div>
            <div
              style={{
                position: "absolute",
                color: "white",
                bottom: 30,
                left: 30,
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                width: "80%",
                gap: "15px",
                cursor: "pointer",
              }}
            >
              {options.map((item) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottomWidth: "1px",
                      borderBottomStyle: "solid",
                      paddingBottom: "10px",
                      width: "100%",
                    }}
                  >
                    <div style={{ fontSize: 20, fontFamily: "objective-med",textAlign:'left'}}>
                      {item}
                    </div>
                    <img
                      style={{
                        height: "15px",
                        width: "15px",
                        color: "white",
                      }}
                      src={arrow}
                      alt="arrow"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
          className="img3"
          >
            <div
              style={{
                position: "absolute",
                borderWidth: "1px",
                borderColor: "white",
                borderStyle: "solid",
                padding: "10px 20px",
                borderRadius: 25,
                color: "white",
                top: 20,
                left: 20,
              }}
            >
              03
            </div>
            <div
           className="grid3Content"
            >
              <div style={{ fontSize: 80, fontFamily: "objective-med" }}>
                +20K
              </div>
              <div
              className="grid3text"
                style={{
                  fontWeight: "800",
                  fontSize: 25,
                }}
              >
                Glass Pattern generated this week in the first release
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


import React from "react";
import "./home-styles.css";
import { FcCalendar } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
const HomePage = () => {


  return (
    <div className="container1">
      <div className="mainContainer1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fbfaff",
            width: "350px",
            padding: "30px",
            borderRadius: "30px",
          }}
        >
          <div className="imageContainer1">
            <img alt="" src="/logo192.png" />
          </div>
          <div className="textContainer1">
            <div className="headingContainer1">
              <h1 className="headingText1"> Movie Night</h1>
              <p style={{ color: "grey" }}>
                👋 Hosted by{" "}
                <span style={{ color: "#828282", fontWeight: "bold" }}>
                  Elysia
                </span>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "10px",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <span style={{ marginTop: "5px" }}>
                <span
                  style={{
                    fontWeight: "bolder",
                  }}
                >
                  14
                </span>{" "}
                responses {"."}{" "}
                <span style={{ color: "#8456ec" }}>see guest </span>
              </span>
              <div>
                <button
                  style={{
                    backgroundColor: "#8456ec",
                    padding: "10px 20px",
                    border: "none",
                    color: "white",
                    fontWeight: "bolder",
                    borderRadius: "10px",
                  }}
                >
                  🤝 Invite
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }}
              >
                <FcCalendar size={30} />
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontWeight: "bolder",
                  width: "50%",
                }}
              >
                18 aug 6PM to 19 aug 10PM UTC +10
              </div>
              <div style={{ marginTop: "20px" }}>
                <MdKeyboardArrowRight size={25} color="#BDBDBD" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }}
              >
                <GrLocationPin size={30} />
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontWeight: "bolder",
                  width: "50%",
                }}
              >
                18 aug 6PM to 19 aug 10PM UTC +10
              </div>
              <div style={{ marginTop: "20px" }}>
                <MdKeyboardArrowRight size={25} color="#BDBDBD" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "10px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                }}
              >
                <BsLink45Deg size={30} />
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontWeight: "bolder",
                  width: "50%",
                }}
              >
                18 aug 6PM to 19 aug 10PM UTC +10
              </div>
              <div style={{ marginTop: "20px" }}>
                <MdKeyboardArrowRight size={25} color="#BDBDBD" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "10%", alignItems: "right" }}>
          <div className="headingstyle1">
            <h1>
              Imagine if <span className="snapStyles1"> snapchat</span> had
              events{" "}
            </h1>
          </div>
          <Link to='/create'>
          <button className="event1">🎉 Create my events </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
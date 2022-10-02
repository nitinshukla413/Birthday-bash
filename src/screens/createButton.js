import React from "react";
import "./styles-button.css";
import { BiCalendar } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

const BirthdayButton = ({paramsData, GoLocation}) => {
  return (
    <div className="buttonContainer">
      <div style={{ display: "flex", width: '100%' }}>
        <div className="innerContainer">
          <div className="iconContainer">
          {GoLocation? <GoLocation color="#8456EC" size={30} style={{ padding: "7px" }} />:
            <BiCalendar color="#8456EC" size={30} style={{ padding: "7px" }} />}
          </div>
          <div className="textContainer">
            <div className="headingContainerBirthday">
            <div style={{ color: '#240D57', marginBottom: '4px'}}>
            <span className="heading">{paramsData.get('date')}</span>
            </div>
              <div style={{ color: '#4F4F4F'}}>
              <span className="heading">to <span style={{fontWeight: 700}}>{paramsData.get('endtime')}</span> UTC +10</span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="arrowContainer">
          <MdKeyboardArrowRight size={25} color='#BDBDBD' />
        </div>
      </div>
    </div>
  );
};

export default BirthdayButton;
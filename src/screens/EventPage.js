import React from 'react'
import './styles-event.css';
import { useSearchParams } from 'react-router-dom';
import BirthdayImage from '../assets/BirthdayImage.png';
import BirthdayButton from './createButton';
import {GoLocation} from 'react-icons/go';

function Event() {
   const [paramsData] = useSearchParams();
  return (
    <div className="mainContainer">
      <div className="textContainer">
        <div className="headingContainer">
          <div className="headingInnerContainer">
            <div className="mainHeading">
              <span className="headingText">{paramsData.get('name')}</span>
            </div>
            <div className="paraHeadingContainer">
              <span className="paraText">
                Hosted by <span style={{ fontWeight: 700 }}>{paramsData.get('hostname')}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <BirthdayButton paramsData={paramsData} />
          <BirthdayButton paramsData={paramsData} GoLocation={GoLocation} />
        </div>
      </div>
      <div className="imageContainer">
        <img alt="" src={BirthdayImage} className="birthdayImage" />
      </div>
    </div>
  )
}


export default Event;
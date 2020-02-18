import React from "react";
const Overview = () => {

  return (
    <div className="border">
      <h1 className="hours">Overview</h1>
      <div className="overviewContainer">
        <div className="leftSide" >
          <img className="imgClass" src="https://i.imgur.com/3nuNGMZ.jpg"></img>
        </div>
        <div className="rightSide">
          <p className="p3">
            Our Company has been Established in 1990, build in three locations namely Cairo in Egypt, Rome in Italy
            and NYC in USA, helping our customers to get the best hotel reservation by focusing on
            quality, luxurious yet affordable.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Overview;

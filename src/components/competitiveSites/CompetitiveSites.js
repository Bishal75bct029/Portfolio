import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="">
        <ul className="">
          
              
                <li  >
                  
                    <img
                    style={{
                      height:50,
                      marginRight:10

                    }}
                src={require(`../../assests/images/react.png`)}
                />
                    <img
                    style={{
                      height:50,
                      marginRight:10

                    }}
                src={require(`../../assests/images/mongodb.jpg`)}
                />
                    <img
                    style={{
                      height:50,
                      marginRight:10


                    }}
                src={require(`../../assests/images/express.png`)}
                />
                    <img
                    style={{
                      height:50,
                      marginRight:10
                    }}
                src={require(`../../assests/images/nodejs.png`)}
                />
                  
                </li>
           
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;

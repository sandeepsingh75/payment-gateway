import React from "react";
import { Data } from "./Api";
// import styled from 'styled-components';
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Accordion.css";
import { useState } from "react";
import file from "../../images/file-storage.png";

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    console.log("index", index);
    //if clicked is already active, then close it
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div>
      {/* accordion */}
      <IconContext.Provider value={{ color: "#00fFB9", size: "25px" }}>
        <div className="AccordionSection">
          <div className="container">
            {Data.map((item, index) => {
              return (
                <>
                  <div
                    className="wrap"
                    onClick={() => toggle(index)}
                    key={index}
                  >
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>
                    <h1>{item.question}</h1>
                    <span>
                      {" "}
                      {clicked === index ? <FiMinus /> : <FiPlus />}{" "}
                    </span>
                  </div>
                  {clicked === index ? (
                    <div className="dropDown">
                      {/* <p> {item.answer} </p> */}
                      <div class="accordion-body">
                        <div className="transaction">
                          <div className="row">
                            <div className="col-md-1">
                              <div className="accordionBodyImage">
                                <img src={file} alt="" />
                              </div>
                            </div>
                            <div className="col-md-11 d-flex">
                              <div>
                                <h6>Hamleys</h6>
                                <h6 className="date">20 May 2020</h6>
                                <div className="d-flex">
                                  <div className="accordionBodyImageBottom">
                                    <img src={file} alt="" />
                                  </div>
                                  <h6 className="refund">
                                    Refund on debit card
                                  </h6>
                                </div>
                              </div>
                              <h6 className="amount">+S$ 150</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Accordion;

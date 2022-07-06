import React, { useState } from "react";
import "./Modal.css";
import add from '../../images/add.png';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <img src={add} alt="" />
       <span className="buttonTitle"> New card</span>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Card</h2>
           <form>
              <table>
                <tr className="">
                  <td className="content">Card Holder Name:</td> <td><input type="text" /></td>
                </tr>
                <tr>
                  <td  className="content">Card Number :</td> <td><input type="text" /></td>
                </tr>
                <tr>
                  <td  className="content">valid Till:</td> <td><input type="text" /></td>
                </tr>
                <tr>
                  <td  className="content">CVV:</td> <td><input type="text" /></td>
                </tr>
                <tr>
                  <td><button className="submitbtn"> Submit</button></td> 
                </tr>
              </table>
           </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

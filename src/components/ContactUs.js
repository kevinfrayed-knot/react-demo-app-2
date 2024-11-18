

import {useRef} from "react";

function ContactUs() {

    //ie: const outputDiv = document.getElementById("output")
    const outputDiv = useRef("");

    const txtname = useRef("");
    const txtemail = useRef("");
    const txtphone = useRef("");
    const txtcomment = useRef("");

    //react includes event object as first parameter 
    //function btnHandleFormValidation(event)
    const btnHandleFormValidation = (event)=>
    {
      event.preventDefault();

      try {
        
        let _msg = "## btnHandleFormValidation"

        //alert(_msg)
        outputDiv.current.innerText = _msg
        console.log(_msg)

        if(txtname.current.value == null | txtname.current.value.trim().length == 0) {
          _msg = "## please enter a valid name"
          outputDiv.current.innerText = _msg;
          return false; //stop button click 
        }

        if(txtemail.current.value == null | txtemail.current.value.trim().length == 0) {
          _msg = "## please enter a valid email"
          outputDiv.current.innerText = _msg;
          return false; //stop button click 
        }

        if(txtcomment.current.value == null | txtcomment.current.value.trim().length == 0) {
          _msg = "## please enter a valid comment"
          outputDiv.current.innerText = _msg;
          return false; //stop button click 
        }

        //submit message 
        outputDiv.current.innerText = "form submitted"

        _msg = `## form submit: ${txtname.current.value} - ${txtemail.current.value} 
        - ${txtphone.current.value} - ${txtcomment.current.value}`
        
        console.log(_msg)

        //clear fields
        txtname.current.value = "";
        txtemail.current.value = "";
        txtphone.current.value = "";
        txtcomment.current.value = "";

        //field focus 
        txtname.current.focus()

      } catch (error) {        
        const _msg = "## btnHandleFormValidation::Error"
        //alert(_msg)
        outputDiv.current.innerText = _msg
        console.log(_msg)
        console.log(error)
      
      }

    }

    const btnHandleFormReset = (event)=>
    {
        event.preventDefault();

        try {
          
          const _msg = "## btnHandleFormReset"
          outputDiv.current.innerText = _msg;
          console.log(_msg)

          outputDiv.current.innerText = "";

          //clear fields
          txtname.current.value = "";
          txtemail.current.value = "";
          txtphone.current.value = "";
          txtcomment.current.value = "";

          //field focus 
          txtname.current.focus()


        } catch (error) {

          const _msg = "## btnHandleFormReset::error"
          outputDiv.current.innerText = _msg;
          console.log(_msg)
          console.log(error)
        }
    }

    return (
      <>
          <p></p>
          <p>ContactUs page/component 1.1.1</p>
            <div id="output" className="output" ref={outputDiv}></div>
            <p></p>
          <div>
            <form>
              <label>* Name: </label><input ref={txtname} type="text" maxLength={20}></input><br></br>
              <label>* Email: </label><input ref={txtemail} type="text"  maxLength={30}></input><br></br>
              <label> Phone: </label><input ref={txtphone} type="text"  maxLength={15}></input><br></br>
              <label>* Comment: </label><br></br>
              <textarea ref={txtcomment} rows={5} cols={30}></textarea><p></p>
              <button onClick={btnHandleFormValidation}>Submit</button>
              {"   "}
              <button onClick={btnHandleFormReset}>reset</button>
            </form>
          </div>
      </>
    );
}
  
export default ContactUs;

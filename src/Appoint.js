import { useState, useRef, useEffect } from "react"

function Appoint({availFile}){

    // here im creating a state to store user input
    const [formInput, setFormInput] = useState({
        date: '',
        time: '',
        details: '',
        name: '',
        email: ''
    })


    //here i've created a boolean state to track changes in the form
    const [booly, setBooly] = useState()
    
    // here im accessing the form element with useRef
    let formRef = useRef()
        console.log(formRef)
    useEffect(()=> {

        setFormInput({
            date: formRef.current[0].value,
            time: formRef.current[1].value,
            details: formRef.current[2].value,
            name: formRef.current[3].value,
            email: formRef.current[4].value
        })

        //0 is date, 1 is time
        // 2 -> 0,1,2,3,4 is options
        // 3 description
        // 4 email
        // 5 submit
    },[booly])


// here ive created a custom message to send to email api
let message = `
Email: ${formInput.email}
Date: ${formInput.date}
Time: ${formInput.time}
Message from the client: ${formInput.details}
`

let data = {service_id: "service_5b7lmkh",
    template_id: "template_1iqg17a",
    user_id: "-f9qgn6SJHZB-q1fT",
    template_params: {
        "from_name": formInput.name,
        "message": message
    }
}

function handleSubmit(e){
e.preventDefault()
fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
})

}

console.log(formInput)
// Function for clicking availability
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

  }
// Getting image from local storage 
//let imageStored = localStorage.getItem("Schedule")
console.log("file", availFile)

    return(
        <div className="Appoint">
            <form onChange={() => setBooly(!booly)} id = "form" ref={formRef}>
            <h2>SCHEDULE YOUR APPOINTMENT</h2>
            <div class = "popup">
            <p onClick = {myFunction} id = "availability">check my availability</p>
            <img style = {{width: "450px", height: "600px"}} src = {availFile} class="popuptext" id="myPopup"></img>
            </div>
            <br></br>
                <label for = "date">&emsp;&emsp;Date: </label>&emsp;&emsp;
                <input id = "date" type = "date"></input><br></br><br></br><br></br>
                <label for = "time">Time:                         </label>&emsp;&emsp;
                <input id = "time" type = "time"></input><br></br><br></br><br></br>


                <h4>Service Details:</h4>
                <textarea id = "textarea" cols = "30" style={{borderRadius: "5%", borderStyle: "groove", color: "grey", boxSizing: "border-box"}}>
                    
                    </textarea>
                    <br></br><br></br>
                    <label for = "name">Name: </label>
                    <input type = "name" style={{borderRadius: "7%", borderStyle: "groove", color: "grey"}}></input><br></br><br></br>
                    <label for = "email">Email: </label>
                    <input type = "email" style={{borderRadius: "7%", borderStyle: "groove", color: "grey"}}></input><br></br><br></br>
                <input onClick = {handleSubmit} type = "submit" value= "Submit"></input>
            </form>
        </div>
    )


}

export default Appoint
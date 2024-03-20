import { useState, useRef, useEffect } from "react"

function Appoint({availFile}){

    // here im creating a state to store user input
    const [formInput, setFormInput] = useState({
        date: '',
        time: '',
        option: '',
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
            option: formRef.current[2].value,
            details: formRef.current[3].value,
            name: formRef.current[4].value,
            email: formRef.current[5].value
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
Desired service: ${formInput.option}
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
            <img style = {{width: "200%", height: "600px"}} src = {availFile} class="popuptext" id="myPopup"></img>
            </div>
            <br></br>
                <label for = "date">&emsp;&emsp;Date: </label>&emsp;&emsp;
                <input id = "date" type = "date"></input><br></br><br></br><br></br>
                <label for = "time">Time:                         </label>&emsp;&emsp;
                <input id = "time" type = "time" required = "true"></input><br></br><br></br><br></br>
                <label for = "serv" style = {{fontWeight: "bold", fontSize: "small"}}>SLELECT DESIRED SERVICE: </label>&nbsp;&nbsp;
                {/* <p style = {{margin: 0, fontSize: "small"}}>*with hair added</p> */}
                <select id ="serv">
                    <option></option>
                    <option value = "Option #1">Large Box Braids (2 hours @ $40.00)</option>
                    <option value = "Option #2">Large Twists (2 hours @ $40.00)</option>
                    <option value = "Option #3">Medium Box Braids (4 hours @ $50.00)</option>
                    <option value = "Option #4">Medium Twists (4 hours @ $50.00)</option>
                    <option value = "Option #5">Smedium Box Braids(6 hours @ $65.00)</option>
                    <option value = "Option #6">Smedium Twists (6 hours @ $65.00)</option>
                    <option value = "Option #7">2 Cornrows (1 hour @$20.00)</option>
                    <option value = "Option #8">4 Cornrows (2 hours @$40.00)</option>
                    <option value = "Option #9">6 Cornrows (3 hours @$60.00)</option>
                    <option value = "Option #10">8 Cornrows (4 hours @$80.00)</option>
                    <option>---        with Hair Added        ---</option>
                    <option value = "Option #11">2 Cornrows (1 hour - 30mins @$30.00)</option>
                    <option value = "Option #12">4 Cornrows (2 hours - 30mins @$60.00)</option>
                    <option value = "Option #13">6 Cornrows (4 hours @ $90.00)</option>
                    <option value = "Option #14">8 Cornrows (5 hours @$120.00)</option>
                    <option value = "Option #15">Large Goddess Braids (7 hours @$110.00)</option>
                    <option value = "Option #16">Medium Goddess Braids (8 hours @$130.00)</option>
                    <option value = "Option #16">Smedium Goddess Braids (9 hours @$150.00)</option>
                    <option value = "Option #17">Large Knotless Braids (7 hours @$100.00)</option>
                    <option value = "Option #17">Smedium Knotless Braids (9 hours @$140.00)</option>
                    <option value = "Option #18">Medium Knotless Braids (8 hours @$120.00)</option>
                    <option value = "Option #18">Ponytail (2 hours @$50.00)</option>
                </select>

                <h4 style = {{marginBottom: "0%"}}>Other Details:</h4>
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
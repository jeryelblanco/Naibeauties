import { useState, useRef, useEffect } from "react"

function Appoint({availFile}){
    // here im creating a state to store user input
    const [formInput, setFormInput] = useState({
        date: '',
        time: '',
        option: '',
        details: '',
        name: '',
        email: '',
        phone: ''
    })

    const [popImage, setPopImage] = useState("")
    //here i've created a boolean state to track changes in the form
    const [booly, setBooly] = useState()
    
    // here im accessing the form element with useRef
    let formRef = useRef()
    // Creating a ref for options since it is a multi dimensional arr
    let optionRef = useRef()
        console.log(formRef)
    useEffect(()=> {

        setFormInput({
            date: formRef.current[0].value,
            time: formRef.current[1].value,
            option: formRef.current[2].value,
            details: formRef.current[3].value,
            name: formRef.current[4].value,
            email: formRef.current[5].value,
            phone: formRef.current[6].value
        })

        //0 is date, 1 is time
        // 2 -> 0,1,2,3,4 is options
        // 3 description
        // 4 email
        // 5 submit
    },[booly])


console.log(formInput.option)



// here ive created a custom message to send to email api
let message = `
Email: ${formInput.email}
Phone: ${formInput.phone}
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
    body: JSON.stringify(data)
})
.then(response => {
    if (response.status === 200){
        alert("Sent Successfully!")
    }
    else alert("Error submitting, please send again.")
})
.catch(error => console.log(error))

}


//console.log(formInput)
// Function for clicking availability

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

// Getting image from local storage 
//let imageStored = localStorage.getItem("Schedule")
//console.log("file", availFile)

    return(
        <div className="Appoint">
            <form onChange={() => setBooly(!booly)} id = "form" ref={formRef}>
            <h2>SCHEDULE YOUR APPOINTMENT</h2>
            <div class = "popup">
            <p onClick = {myFunction} id = "availability">check my availability</p>
            <img style = {{width: "200%", height: "600px"}} src = {"http://0.0.0.0:5000/uploads"} class="popuptext" id="myPopup"></img>
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
                    <option value = "Large Box Braids">Large Box Braids - $40.00</option>
                    <option value = "Large Twists">Large Twists - $40.00</option>
                    <option value = "Medium Box Braids">Medium Box Braids- $50.00</option>
                    <option value = "Medium Twists">Medium Twists - $50.00</option>
                    <option value = "Smedium Box Braids">Smedium Box Braids - $65.00</option>
                    <option value = "Smedium Twists">Smedium Twists - $65.00</option>
                    <option value = "2 Cornrows">2 Cornrows - $20.00</option>
                    <option value = "4 Cornrows">4 Cornrows - $40.00</option>
                    <option value = "6 Cornrows">6 Cornrows - $60.00</option>
                    <option value = "8 Cornrows">8 Cornrows - $80.00</option>
                    <option value = "2 Cornrows [with Hair Added]">2 Cornrows - with Hair Added $30.00</option>
                    <option value = "4 Cornrows [with Hair Added]">4 Cornrows - with Hair Added $60.00</option>
                    <option value = "6 Cornrows [with Hair Added]">6 Cornrows - with Hair Added $90.00</option>
                    <option value = "8 Cornrows [with Hair Added]">8 Cornrows - with Hair Added $120.00</option>
                    <option value = "Large Goddess Braids [with Hair Added]">Large Goddess Braids - with Hair Added $110.00</option>
                    <option value = "Medium Goddess Braids [with Hair Added]">Medium Goddess Braids - with Hair Added $130.00</option>
                    <option value = "Smedium Goddess Braids [with Hair Added]">Smedium Goddess Braids - with Hair Added $150.00</option>
                    <option value = "Large Knotless Braids [with Hair Added]">Large Knotless Braids - with Hair Added $100.00</option>
                    <option value = "Smedium Knotless Braids [with Hair Added]">Smedium Knotless Braids - with Hair Added $140.00</option>
                    <option value = "Medium Knotless Braids [with Hair Added]">Medium Knotless Braids - with Hair Added $120.00</option>
                    <option value = "Ponytail [with Hair Added]">Ponytail - with Hair Added $50.00</option>
                </select>

                <h4 style = {{marginBottom: "0%"}}>Other Details:</h4>
                <textarea id = "textarea" cols = "30" style={{borderRadius: "5%", borderStyle: "groove", color: "grey", boxSizing: "border-box"}}>
                    
                    </textarea>
                    <br></br><br></br>
                    <label for = "name">Name: </label>
                    <input type = "name" style={{borderRadius: "7%", borderStyle: "groove", color: "grey"}}></input><br></br><br></br>
                    <label for = "email">Email: </label>
                    <input type = "email" style={{borderRadius: "7%", borderStyle: "groove", color: "grey"}}></input><br></br><br></br>
                    <label for = "phone">Phone: </label>
                    <input type = "phone" style={{borderRadius: "7%", borderStyle: "groove", color: "grey"}}></input><br></br><br></br>
                <input onClick = {handleSubmit} type = "submit" value= "Submit"></input>
            </form>
        </div>
    )


}

export default Appoint

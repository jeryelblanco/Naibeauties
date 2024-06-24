import { useState, useRef, useEffect } from "react"
//import schedule from './images/scheduledefault.jpeg'

function Appoint({availFile}){
    // here im creating a state to store user input
    const [formInput, setFormInput] = useState({
        date: '',
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
   // let optionRef = useRef()

    useEffect(()=> {

        setFormInput({
            date: formRef.current[0].value,
            option: formRef.current[1].value,
            details: formRef.current[2].value,
            name: formRef.current[3].value,
            email: formRef.current[4].value,
            phone: formRef.current[5].value
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
Phone: ${formInput.phone}
Date: ${formInput.date}
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
// require('dotenv').config()

//const port = process.env.PORT || 3000
useEffect(()=>{
    fetch("/uploads")
    .then(data => data.json())
    .then(data => console.log(data))
},[])
const urlImage = '/uploads'

//console.log("calendar", document.getElementById("date").value)
    return(
        <div className="Appoint">
            <form onChange={() => setBooly(!booly)} id = "form" ref={formRef}>
            <h2>SCHEDULE YOUR APPOINTMENT</h2>
            <div class = "popup">
            <p onClick = {myFunction} id = "availability">check my availability</p>
            <img style = {{width: "200%", height: "600px"}} src = {urlImage} class="popuptext" id="myPopup"></img>
            </div>
            <br></br>
                <label for = "date">&emsp;&emsp;Date: </label>&emsp;&emsp;
                <input id = "date" type = "date"></input><br></br><br></br><br></br>
                <label for = "serv" style = {{fontWeight: "bold", fontSize: "small"}}>SLELECT DESIRED SERVICE: </label>&nbsp;&nbsp;
                {/* <p style = {{margin: 0, fontSize: "small"}}>*with hair added</p> */}
                <select id ="serv">
                    <option></option>
                    <option>----------KNOTLESS BRAIDS-----------</option>
                    <option value = "Large Knotless">Large Knotless - $115.00</option>
                    <option value = "Medium Knotless">Medium Knotless - $140.00</option>
                    <option value = "Smedium Knotless">Smedium Knotless - $165.00</option>
                    <option>----------SHORT KNOTLESS-----------</option>
                    <option value = "Large Knotless">Large Knotless - $100.00</option>
                    <option value = "Medium Knotless">Medium Knotless - $125.00</option>
                    <option value = "Smedium Knotless">Smedium Knotless - $150.00</option>
                    <option>----------BOHO KNOTLESS-----------</option>
                    <option value = "Large Boho Knotless">Large Boho Knotless - $130.00</option>
                    <option value = "Medium Boho Knotless">Medium Boho Knotless - $155.00</option>
                    <option value = "Smedium Boho Knotless">Smedium Boho Knotless - $180.00</option>
                    <option>----------SHORT BOHO-----------</option>
                    <option value = "Large Boho Knotless">Large Boho Knotless - $115.00</option>
                    <option value = "Medium Boho Knotless">Medium BohoKnotless - $140.00</option>
                    <option value = "Smedium Boho Knotless">Smedium Boho Knotless - $165.00</option>
                    <option>----------CORNROWS-----------</option>
                    <option value = "2 Cornrows">2 Cornrows - $25.00</option>
                    <option value = "4 Cornrows">4 Cornrows - $45.00</option>
                    <option value = "6 Cornrows">6 Cornrows - $65.00</option>
                    <option value = "8 Cornrows">8 Cornrows - $85.00</option>
                    <option>----------CORNROWS W/ EXTENSION-----------</option>
                    <option value = "2 Cornrows">2 Cornrows - $45.00</option>
                    <option value = "4 Cornrows">4 Cornrows - $65.00</option>
                    <option value = "6 Cornrows">6 Cornrows - $85.00</option>
                    <option value = "8 Cornrows">8 Cornrows - $105.00</option>
                    <option>----------PONYTAILS-----------</option>
                    <option value = "Ponytail">Ponytail - $65.00</option>
                    <option value = "Braided Ponytail">Braided Ponytail - $75.00</option>
                    <option>----------ADD-ONS-----------</option>
                    <option value = "Fulani Braids (Freestyle)">Fulani Braids (Freestyle) - $180.00</option>
                    <option value = "Cornrow Only Front">Cornrow Only Front - $165.00</option>
                    <option value = "Side Heart (Add-On)">Side Heart (Add-On) - $20.00</option>
                    <option>----------BRAIDS & TWISTS (MEN)-----------</option>
                    <option value = "Large Twists/Braids">Large Twists/Braids - $40.00</option>
                    <option value = "Medium Twists/Braids">Medium Twists/Braids - $55.00</option>
                    <option value = "Small Twists/Braids">Small Twists/Braids - $70.00</option>
                    <option>----------DOUBLE-STRAND TWISTS-----------</option>
                    <option value = "Large Double-Strand">Large Double-Strand - $80.00</option>
                    <option value = "Meidum Double-Strand">Meidum Double-Strand - $100.00</option>
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

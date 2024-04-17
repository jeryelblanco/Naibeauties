import { useState } from "react"
import defaultCalendar from "./images/scheduledefault.JPG"
function Footer ({setAvailFile}){
require('dotenv').config()
const port = process.env.PORT
    const [getBool, setBool] = useState(false)

function updateCalendar(){



let pass = ""
let adminPass = prompt("[Administrative use only] Enter Password:", pass)
if (adminPass.toLowerCase() === "up!0@d"){
    // setAvailFile(adminPass)
    setBool(!getBool)
    alert("authentication succesfful")

}
else {
    alert("authentication unsuccessful")
}
// console.log(adminPass)



}

// funciton handling submission of a calendar upload

/*
function formSubmit(e){
    e.preventDefault()
    //localStorage.setItem("Schedule", e.target.filename.value)
    fetch("http://127.0.0.1:5000/image", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    // headers: {
    //     "Content-Type" : "multipart/form-data; boundary = ----WebKitFormBoundaryBODBNK9vWWeDNOP1"

    // },
    body: {
    image: e.target.image.value
    }
    })
    .then(response => response.json())
    .then(data => console.log(data))
   // .then(data => setAvailFile(data.image))

    console.log(e.target)
    setBool(!getBool)
}
console.log(getBool)
*/

//test

const urlImage = `http://0.0.0.0:${port}/image`

console.log("port", port)

    return (
        <footer className="footer">
            <div>
            {getBool? <form action = {urlImage} enctype="multipart/form-data" accept-charset="UTF-8" method="post" > 
            <label for = "image">Paste File Here:</label>
            <input type = "file" name = "image"></input>
            <input type = "submit" value = "update"></input>
            </form> : null
            }
            </div>
            <h2>Click below to learn more about my company!</h2>
            <a target = "_blank" href = "https://www.instagram.com/nai_beauties?igsh=dTJqdTI0ZmNlcTlz"><img src = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"></img></a>
           {// <a href = ""><img src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"></img></a> 
           }
           <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span> &copy; 2024 Lifestylez</span><span onClick={updateCalendar} style = {{cursor: "pointer", float: "right"}}>upload</span>
        </footer>
    )
}
export default Footer

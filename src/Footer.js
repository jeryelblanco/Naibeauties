import { useState } from "react"

function Footer ({setAvailFile}){

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
function formSubmit(e){
    e.preventDefault()
    setAvailFile(e.target.filename.value)
    //localStorage.setItem("Schedule", e.target.filename.value)
    console.log(e.target.filename.value)
    setBool(!getBool)
}
console.log(getBool)


    return (
        <footer className="footer">
            <div>
            {getBool? <form onSubmit={formSubmit}>
            <label for = "filename">Paste File Here:</label>
            <input type = "text" id = "myFile" name = "filename"></input>
            <input type = "submit" value = "update"></input>
            </form> : null
            }
            </div>
            <h2>Click below to learn more about my company!</h2>
            <a target = "_blank" href = "https://www.instagram.com/reel/Cy1LK9HO5aC/"><img src = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"></img></a>
           {// <a href = ""><img src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"></img></a> 
           }
           <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span> &copy; 2024 Lifestylez</span><span onClick={updateCalendar} style = {{cursor: "pointer", float: "right"}}>upload</span>
        </footer>
    )
}
export default Footer
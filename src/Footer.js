function Footer (){


function updateCalendar({setAvailFile}){
let pass = ""
let adminPass = prompt("[Administrative use only] Enter Password:", pass)
if (adminPass.toLowerCase() === "up!0@d"){
    alert("authentication succesfful")
}
else {
    alert("authentication unsuccessful")
}
console.log(adminPass)

}


    return (
        <footer className="footer">
            <h2>Click below to learn more about my company!</h2>
            <a target = "_blank" href = "https://www.instagram.com/reel/Cy1LK9HO5aC/"><img src = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"></img></a>
           {// <a href = ""><img src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"></img></a> 
           }
           <br></br>
        <span> &copy; 2024 Lifestylez</span><span onClick={updateCalendar} style = {{cursor: "pointer", float: "right"}}>upload</span>
        </footer>
    )
}
export default Footer
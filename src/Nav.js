import { NavLink } from 'react-router-dom'


function Nav(){



return (
   <header className = 'NavLink'>
    <NavLink to = "/">Home</NavLink>
    <NavLink to = "/prices">Prices</NavLink>
    </header>
)
}

export default Nav
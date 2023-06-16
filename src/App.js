import { BiArchive } from "react-icons/bi";
import { Link , Outlet } from "react-router-dom"; 
// this link that we imported from react-router-dom is used for navigation with links for
// the user to avoid always searching through the searchbar
// outlet here is like a container that will be used to display our History Component that is our Nested Route
export function Home(){
  return(
    <div>
      <nav>
        {/* we add these navbars so that we can acess the link */}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        {/* this About will show as a navbar component and will take us to the desired location */}
      </nav>
     <h1>My website</h1>
    </div>
  
  )
}

export function History(){
  return(
  <div>
    <h1>
      OUR HISTORY
    </h1>
  </div>
  )
}

 export function About(){
  return(
    <div>
    <nav>
    {/* <Link to="/history">History</Link> */}
    </nav>
     <h1>About us</h1>
     <Outlet />
     {/* when we use outlet inside of aboutus when we open the aboutus page its nested component that is the 
     'History' will pop up */}
    </div>
  
  )
}

export function Contact(){
  return(
    <div>
     <h1>contact us</h1>
    </div>
  
  )
}
export function App() {
  return (
    <div className="App">
     <h1>APPOINTMENTS</h1>
     <BiArchive />
    </div>
  );
}



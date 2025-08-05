import { FaBars, FaBell, FaSearch, FaShoppingCart, FaUser} from "react-icons/fa";
//Creating Navbar

function Navbar() {
    return (

        <div class="navbar">

            <div class="navbar__s1">
                <h1 class="navbar__s1__title">Udemy</h1>
            </div>

            <div className="navbar__s2">
                <FaSearch style={{ color: '#000000' }} />
                <input placeholder="Search for anything here. Tech, Business, Art ..." /> 
            </div>

            <div class="navbar__s3">
                <p>Courses</p>

                <div class="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning__popup">
                        <p>You did not purchase anything yet</p>
                    </div>
                </div>
                <FaShoppingCart style={{color: "#000000"}}/>
                <FaBell style={{color: "#000000"}}/>
                <FaUser style={{color: "#000000"}}/>
            </div>

            <div class="navbar__s4">
                <FaBars style={{ color: "#080808" }}/>
            </div>
        </div>
    )
}

export default Navbar
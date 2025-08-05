import Navbar from "./components/navbar.js"
import Categories from "./components/categories.js"
import Ad from "./components/ad.js"
import Recommendation from "./components/recommendation.js"
import Topics from "./components/topics.js"
import Mostpopular from "./components/popular.js"
import Footer from "./components/footer.js"



function App() {
    return (
        <>
            <Navbar></Navbar>
            <Categories></Categories>
            <Ad></Ad>
            <Recommendation></Recommendation>
            <Topics></Topics>
            <Mostpopular></Mostpopular>
            <Footer></Footer>
        </>
    )

}

export default App
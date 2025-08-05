import photo1 from "./Asset/photo1.jpg"
import photo2 from "./Asset/photo2.jpg"
import photo3 from "./Asset/photo3.jpg"
import photo4 from "./Asset/photo4.jpg"



function Recommendation() {
    return (
        <div class="recommended">
            <h1 class="recommended__title">Recommended for you</h1>
            <p>Pick the best fit</p>

            <div class="recommended__container">

                <div class="course-card">
                    <img src={photo1} />
                    <h3>2025 Python Data Visualisation Masterclass</h3>
                    <p>Col Steels</p>
                    <p>4.9⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={photo2} />
                    <h3>2025 Python Data Visualisation Masterclass</h3>
                    <p>Col Steels</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={photo3} />
                    <h3>2025 Python Data Visualisation Masterclass</h3>
                    <p>Col Steels</p>
                    <p>4.9⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={photo4} />
                    <h3>2025 Python Data Visualisation Masterclass</h3>
                    <p>Col Steels</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Recommendation
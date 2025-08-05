import saleimage from "./Asset/Udemy image.jpg"

function Ad(){
    return (
 <div class="sale-image">
        <img src={saleimage} alt="Sale Image"/> 
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save</h2>
            <p>Get the top courses for just 499. Just one day to save but life time to learn</p>
        </div>
    </div>
    )
}

export default Ad
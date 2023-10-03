import '../assets/styles/styles.css';

const Top =()=>{
    return(

        
      <div id="carouselAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/adventure.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="images/yog.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="images/learning.jpg" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev button-al" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next button-al" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    )
}

export default Top;
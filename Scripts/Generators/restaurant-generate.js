import RestaurantModule from '../Modules/RestaurantModule.js'

// html object generator, runs on page load in
 const resturantSection = document.querySelector("#resturant-section");

 let htmlTxt = "";
 RestaurantModule.getAllRestaurant().forEach(restaurant => {
     htmlTxt += `
        <article class="column is-6-mobile is-3">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ restaurant.image }" alt="reataurant">
                </section>
                <section class="card-content">
                    <h3 id="name" class="has-text-centered"> ${ restaurant.name }<br><br></h3>
                    <p id="adress" class="has-text-centered">
                    <i id="locationSymbole" class="fas fa-map-marker-alt"></i><br> ${ restaurant.adress } </p> <br>
                    <p id="phoneNumber" class="has-text-centered"> ${ restaurant.phoneNumber } </p>
                </section>
            </div>
        </article>
     `;
 } );

 resturantSection.innerHTML = htmlTxt;
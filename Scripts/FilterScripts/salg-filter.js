import SalgModule from '../Modules/SalgModule.js';

//fetching html objects
const salgSection = document.querySelector("#salg-section");
const restaurantBtn = document.querySelector("#restaurant");
const dailyBtn = document.querySelector("#daily");
const monthBtn = document.querySelector("#month");
const dishesBtn = document.querySelector("#dishes");

// hacky true check since bools are hard 
let valueCheck = "true";

//html generators
restaurantBtn.addEventListener("click", () => {

    let htmlTxt = "";
    SalgModule.getLocations( valueCheck ).forEach ( salg => {
        htmlTxt += `
        <article class="">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ salg.image }" alt="salg">
                </section>
                <section class="card-content">
                    <h3 id="name" class="has-text-centered" style="color: #51504E;"> ${ salg.name } </h3>
                </section>
            </div>
        </article>
        `;
    });
    
    salgSection.innerHTML = htmlTxt;
});


dailyBtn.addEventListener("click", () => {

    let htmlTxt = "";
    SalgModule.getGraphDaily( valueCheck ).forEach ( salg => {
        htmlTxt += `
        <article class="">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ salg.image }" alt="salg">
                </section>
                <section class="card-content">
                    <h3 id="name" class="has-text-centered" style="color: #51504E;"> ${ salg.name } </h3>
                </section>
            </div>
        </article>
        `;
    });
    
    salgSection.innerHTML = htmlTxt;
});


monthBtn.addEventListener("click", () => {

    let htmlTxt = "";
    SalgModule.getGraphMonth( valueCheck ).forEach ( salg => {
        htmlTxt += `
        <article class="">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ salg.image }" alt="salg">
                </section>
                <section class="card-content">
                    <h3 id="name" class="has-text-centered" style="color: #51504E;"> ${ salg.name } </h3>
                </section>
            </div>
        </article>
        `;
    });
    
    salgSection.innerHTML = htmlTxt;
});


dishesBtn.addEventListener("click", () => {

    let htmlTxt = "";
    SalgModule.getDishes( valueCheck ).forEach ( salg => {
        htmlTxt += `
        <article class="">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ salg.image }" alt="salg">
                </section>
                <section class="card-content">
                    <h3 id="name" class="has-text-centered" style="color: #51504E;"> ${ salg.name } </h3>
                </section>
            </div>
        </article>
        `;
    });
    
    salgSection.innerHTML = htmlTxt;
});






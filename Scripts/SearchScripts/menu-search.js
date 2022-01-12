import MenuModule from '../Modules/MenuModule.js'

const menuSection = document.querySelector("#menu-section");
const vegiCheck = document.querySelector("#vegitarian")//fetches the initializing html object
const allCheck = document.querySelector("#all")
const drinksBtn = document.querySelector("#drinks");
const searchTxt = document.querySelector("#search-txt");
const searchBtn = document.querySelector("#search-btn");



searchBtn.addEventListener("click", () => {
    
    let search = searchTxt.value;
    
    let htmlTxt = "";
    MenuModule.getByName( search ).forEach( menu => {
        
        htmlTxt += `
            <article class="column is-6-mobile is-3">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ menu.image }" alt="reataurant">
                </section>
                <section class="card-content">
                    <h3 id="name" class="title has-text-centered"> ${ menu.name } </h3>
                    <p id="ingredience" class="has-text-centered"> ${ menu.ingredience } </p><br>
                    <p id="price" class="has-text-centered">${ menu.price }<br><i id="moneySymbole" class="far fa-money-bill-alt"></i></p>
                </section>
            </div>
            </article>
            `;
    })
    menuSection.innerHTML = htmlTxt;
});

vegiCheck.addEventListener("click", () => {//initializer for the function
    //add event listener makes the button clickable
    let htmlTxt = "";//clears the html
    let valueCheck = "true"; // this is the value you want to match in the arrey
    MenuModule.getByVegitarian( valueCheck ).forEach( menu => {
        htmlTxt += `
            <article class="column is-6-mobile is-4">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ menu.image }" alt="reataurant">
                </section>
                <section class="card-content">
                    <h3 id="name" class="title has-text-centered"> ${ menu.name } </h3>
                    <p id="ingredience" class="has-text-centered"> ${ menu.ingredience } </p><br>
                    <p id="price" class="has-text-centered">${ menu.price }<br><i id="moneySymbole" class="far fa-money-bill-alt"></i></p>
                </section>
            </div>
            </article>
            `;
    })
    // self explanatory?
    menuSection.innerHTML = htmlTxt;
});// end of loop



allCheck.addEventListener("click", () => {
    
    let htmlTxt = "";
    MenuModule.getAllMenuItems().forEach(menu => {
        
        htmlTxt += `
            <article class="column is-6-mobile is-3">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ menu.image }" alt="reataurant">
                </section>
                <section class="card-content">
                    <h3 id="name" class="title has-text-centered"> ${ menu.name } </h3>
                    <p id="ingredience" class="has-text-centered"> ${ menu.ingredience } </p><br>
                    <p id="price" class="has-text-centered">${ menu.price }<br><i id="moneySymbole" class="far fa-money-bill-alt"></i></p>
                </section>
            </div>
            </article>
            `;
    });
    
    menuSection.innerHTML = htmlTxt;
});


drinksBtn.addEventListener("click", () => {
    
    let htmlTxt = "";
    let valueCheck = "true";
    MenuModule.getByDrinks( valueCheck ).forEach( menu => {
        htmlTxt += `
            <article class="column is-6-mobile is-3">
            <div class = "card">
                <section class="card-image">
                    <img src="images/${ menu.image }" alt="reataurant">
                </section>
                <section class="card-content">
                    <h3 id="name" class="title has-text-centered"> ${ menu.name } </h3>
                    <p id="ingredience" class="has-text-centered"> ${ menu.ingredience } </p><br>
                    <p id="price" class="has-text-centered">${ menu.price }<br><i id="moneySymbole" class="far fa-money-bill-alt"></i></p>
                </section>
            </div>
            </article>
            `;
    });
    
    menuSection.innerHTML = htmlTxt;
});


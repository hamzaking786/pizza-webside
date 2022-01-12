import MenuModule from '../Modules/MenuModule.js'

// html object generator, runs on page load in
const menuSection = document.querySelector("#menu-section");

let htmlTxt = "";
MenuModule.getAllMenuItems().forEach(menu => {
    htmlTxt += `
    <article class="column is-6-mobile is-3">
    <div class = "card">
        <section class="card-image">
            <img src="images/${ menu.image }" alt="reataurant">
        </section>
        <section class="card-content">
            <h3 id="name" class=" has-text-centered"> ${ menu.name }<br><br></h3>
            <p id="ingredience" class="has-text-centered"> ${ menu.ingredience } </p><br>
            <p id="price" class="has-text-centered">${ menu.price }<br><i id="moneySymbole" class="far fa-money-bill-alt"></i></p>
        </section>
    </div>
</article>
    `;
});

menuSection.innerHTML = htmlTxt;



import ansatt2Module from '../Modules/AnsattModule.js'

//role checkers
const managersCheck = document.querySelector("#managers");
const fullTimeCheck = document.querySelector("#fullTime");
const partTimeCheck = document.querySelector("#partTime");

//section for reciving generated content
const ansatt2Section = document.querySelector("#ansatt2-section");

//location checkers
const kvadraturenCheck = document.querySelector("#Kvadraturen")
const fjerdingenCheck = document.querySelector("#Fjerdingen")
const vulkanCheck = document.querySelector("#Vulkan");
const spikersuppaCheck = document.querySelector("#Spikersuppa");


//location filters

kvadraturenCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = kvadraturenCheck.value;
    ansatt2Module.getByLocation( valueCheck ).forEach( ansatt => {
        htmlTxt += `
            <article class="column is-multiline is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});

fjerdingenCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = fjerdingenCheck.value;
    ansatt2Module.getByLocation( valueCheck ).forEach( ansatt => {
        
        htmlTxt += `
            <article class="column is-multiline is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});

vulkanCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = vulkanCheck.value;
    ansatt2Module.getByLocation( valueCheck ).forEach( ansatt => {
        
        htmlTxt += `
            <article class="column is-multiline is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});

spikersuppaCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = spikersuppaCheck.value;
    ansatt2Module.getByLocation( valueCheck ).forEach( ansatt => {
        
        htmlTxt += `
            <article class="column is-multiline is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});


//role checkers 2, electric boogaloo

managersCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = managersCheck.value;
    ansatt2Module.getByRole( valueCheck ).forEach( ansatt => {
        
        htmlTxt += `
            <article class="column is-multiline is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});


fullTimeCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = fullTimeCheck.value;
    ansatt2Module.getByRole( valueCheck ).forEach( ansatt => {
        
        htmlTxt += `
            <article class="column mt-5 is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});


partTimeCheck.addEventListener("click", () => {
    let htmlTxt = "";
    let valueCheck = partTimeCheck.value;
    ansatt2Module.getByRole( valueCheck ).forEach( ansatt => {
        
        htmlTxt += `
            <article class="column mt-5 is-6-mobile is-3">
                <div class = "card columns is-multiline">
                    <section class="card-image column is-one-third">
                        <img src="images/${ ansatt.image }" alt="placeholder">
                        <button class="button is-small is-rounded editBtn" onclick="showModal()">Edit</button> <br>

                    </section>
                    <section class="card-content column is-half">
                        <h3 id="name" class=" has-text-centered"> ${ ansatt.name }<br><br></h3>
                        <p> 
                            Jobber på ${ ansatt.location }. </br>
                            Stilling: ${ ansatt.role }. </br>
                            Telefon: ${ ansatt.phoneNr }. </br>
                            Epost: ${ ansatt.email }.
                        </p>
                    </section>
                </div>
            </article>
        `;
    });
    ansatt2Section.innerHTML = htmlTxt;
});

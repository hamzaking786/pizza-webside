import ansatt2Module from '../Modules/AnsattModule.js'

// html object generator, runs on page load in
const ansatt2Section = document.querySelector("#ansatt2-section");

let htmlTxt = "";
ansatt2Module.getAllAnsattItems().forEach(ansatt => {
    htmlTxt += `
        <article class="column mt-5 is-6-mobile is-3">
            <div class = "card columns is-multiline">
                <section class="card-image column is-one-third">
                    <img src="images/${ ansatt.image }" alt="placeholder">
                    <button class="button is-small is-rounded " onclick="showModal()">Edit</button> <br>
                </section>
                <section class="card-content column is-half"  style="color: #51504E;>
                    <h3  class="has-text-centered"> ${ ansatt.name }<br><br></h3>
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
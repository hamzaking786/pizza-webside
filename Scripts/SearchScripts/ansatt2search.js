import ansatt2Module from '../Modules/AnsattModule.js'

//section for reciving generated content
const ansatt2Section = document.querySelector("#ansatt2-section");

//search bar
const searchTxt = document.querySelector("#search-txt");
const searchBtn = document.querySelector("#search-btn");

// text search
searchBtn.addEventListener("click", () => {
    
    let search = searchTxt.value;
    
    let htmlTxt = "";
    ansatt2Module.getByName( search ).forEach( ansatt => {
        htmlTxt += `
        <article class="column mt-5 is-6-mobile is-3 employees">
            <div class = "card columns is-multiline">
                <section class="card-image column is-one-third">
                    <img src="images/${ ansatt.image }" alt="placeholder">
                    <button class="button is-small is-rounded editBtn">Edit</button> <br>

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


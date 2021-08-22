const detailsContainer = document.querySelector(".detailsContainer");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "https://sub.aateigen.one/wp-json/wc/store/products" + "/" + id;

async function getDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
    }
    catch(error) {
        console.log(error);
        detailsContainer.innerHTML = createErrorMsg("error", "An error occured!");
    }
}

getDetails();

function createHtml(details) {
    detailsContainer.innerHTML += `<h1>${details.name}</h1>
    <img class="productImg" src="${details.images[0].src}" alt=${details.name}/>
    <div class="detailsText"><p>${details.description}</p></div>
    <div class="detailsPrice"><h2>Price: ${details.prices.price}$</h2></div>
    `;
}
const url="https://sub.aateigen.one/wp-json/wc/store/products"
const resultsContainer = document.querySelector(".container");

async function getProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json()
        

        console.log(products);
        
        products.forEach(function(product) {
            resultsContainer.innerHTML += `
            <a href="productdetails.html?id=${product.id}" class="productid">
            <h1>${product.name}</h1>
            <img class="productImg" src="${product.images[0].src}" alt=${product.name}/>`

            
        });
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = createErrorMsg("error", "An error occured!");
    }
}

getProducts(url);

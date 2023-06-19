const products = [
    {
        id: 1,
        name: "Razer Blade 17",
        price: 7522,
        category: "Laptops",
        spec: "Graphics: Geforce RTX 3060, Display: QHD 240 Hz, CPU: 12th gen intel i7, Storage: 1TB SSD, Memory: 16GB.",
        image: "assets/imgs/product_imgs/razerBlade17.jpg"
    },
    {
        id: 2,
        name: "Samsung Evo Pro 980",
        price: 2421,
        category: "Storage",
        spec: "Graphics: Geforce RTX 3060, Display: QHD 240 Hz, CPU: 12th gen intel i7, Storage: 1TB SSD, Memory: 16GB.",
        image: "assets/imgs/product_imgs/samsungevo980pro.jpg"
    },
    {
        id: 3,
        name: "Corsair Dark Core",
        price: 569,
        category: "Accessories",
        spec: "Graphics: Geforce RTX 3060, Display: QHD 240 Hz, CPU: 12th gen intel i7, Storage: 1TB SSD, Memory: 16GB.",
        image: "assets/imgs/product_imgs/corsairDark.png"
    },
];

/* Function to display each product as a card */
const productRow = document.getElementById("products");
function showProductCard() {
        for(let prod = 0; prod < products.length; prod++) {
            productRow.innerHTML += `
            <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-8 g-2">
                <div class="card h-100" style="width:20rem;">
                    <img src="${products[prod].image}" class="card-img-top" alt="${products[prod].name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${products[prod].name}</h5>
                        <hr>
                        <p class="card-text">${products[prod].category}</p>
                        <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${prod})">More Info</a>
                    </div>
                </div>
            </div>`;
        }
}
showProductCard();
/* Function to inject info into the Modal */
function setModal(index) {
    document.getElementById("title").innerText = products[index].name;
    document.getElementById("modalBody").innerHTML = `<p><b>Serial Number:</b> ${products[index].id}</p><p><b>Category:</b> ${products[index].category}</p><p><b>Specifications:</b> ${products[index].spec}</p>`;
    document.getElementById("modalFooter").innerHTML = `<h4><b>Price: ${products[index].price}</b></h4>`;
}
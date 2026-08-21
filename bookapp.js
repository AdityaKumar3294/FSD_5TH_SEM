// 1. Define the function and give it parameters: 'imageSrc' and 'price'
function createProductCard(imageSrc, price) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const image = document.createElement("img");
    // 2. Use the 'imageSrc' parameter instead of a fixed URL
    image.setAttribute("src", imageSrc); 
    image.setAttribute("width", "100px");
    image.setAttribute("height", "100px");

    const h2 = document.createElement("h2");
    // 3. Use the 'price' parameter to make the text dynamic
    h2.innerHTML = "Price: ₹" + price;

    const bt = document.createElement("button");
    bt.innerText = "Add To Cart";

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(bt);

    const parent = document.getElementById("root");
    parent.appendChild(div);
}

// 4. Call the function as many times as you want with different data!
createProductCard("book.jpg", 456);
createProductCard("book.jpg", 899);
createProductCard("book.jpg", 1250);
createProductCard("book.jpg", 300);
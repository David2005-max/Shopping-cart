const cartProducts = [
    {
        id: 1,
        name: "Hp Stream 11 intel celeron",
        Description: " 64GB SSD 4GB RAM Windows 10 PRO+ Mouse & USB Light For Keyboard",
        price: 600000,
        imgurl: "https://skit.ng/wp-content/uploads/2024/05/Lenovo-idea-pad-3-core-i5.webp",
        quantity: 1,
        stock: 10,
    },
    {
        id: 2,
        name: "DELL Latitude 3420-14",
        Description: " FHD-11th Gen Intel Core I5-1135G7 Quad-Core-16GB RAM-512GB SSD-Win 10 Pro",
        price: 1148000,
        imgurl: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/6363651/1.jpg?0570",  
        quantity: 1,
        stock: 19,
    },

];

// handle add left box object
const cartlist = document.getElementById("cartlist");
cartProducts.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    cartItem.innerHTML = `
    <img src="${product.imgurl}" alt="${product.name}" width="200px" />
    <div id="middlebox">
    <div class="flex">    <h3>${product.name}</h3>
        <p>${product.price}</p> 

    </div>
    <div>
        <p>${product.Description}</p>
    </div>
    
    
    
    <p>${product.stock} <b>Units Left</b></p>
     <div class="flex">     
     <button class="remove-button" data-id="${product.id}">Remove</button>
        <div class="flex1">
     <button class="add-button" data-id="${product.id}">-</button>
     <h4>${product.quantity}</h4>
     <button class="add-button" data-id="${product.id}">+</button></div>
     </div>
        </div>
    
   
    </div>
       `;
    cartlist.appendChild(cartItem);
});
    

// handle add right box content
let summary = document.querySelector(".summary");
let summaryBtn = document.querySelector("#summaryBtn");
function displaySumaary() {
    let total = 0;
    let quantity = 0;

    for (const element of cartProducts) {
        total += element.price * element.quantity;
        quantity += element.quantity;
        
    }

    
    summary.innerHTML = `
   <div class="">  <h3>Total Amount:N ${total}</h3>
    <h3>Total Quantity: ${quantity}</h3>
</div>
   `
 

    summaryBtn.innerHTML = `
    <h3 class="check">Checkout (N${total})</h3>
    `;
    // summaryBtn.appendChild(summaryBtn);

    summary.appendChild(summary);
}
displaySumaary()

   


// add remove button functionality
    
   
           

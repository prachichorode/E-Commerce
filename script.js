const products = [
  {id:1,name:"Laptop",price:50000,img:"images/C:\Users\prach\OneDrive\Pictures\laptop.jpg"},
  {id:2,name:"Mobile",price:20000,img:"images/C:\Users\prach\OneDrive\Pictures\Mobile.jpg"},
  {id:3,name:"Headphones",price:2000,img:"images/C:\Users\prach\OneDrive\Pictures\Headphone.jpg"},
  {id:4,name:"Watch",price:3000,img:"images/C:\Users\prach\OneDrive\Pictures\Watch.jpg"},
  {id:5,name:"Buds",price:2500,img:"images/C:\Users\prach\OneDrive\Pictures\Buds.jpg"},
  {id:6,name:"Tabs",price:1500,img:"images/C:\Users\prach\OneDrive\Pictures\Tabs.jpg"}
];

let cart = [];

/* LOGIN */
function login(){
  const u=document.getElementById("username").value;
  const p=document.getElementById("password").value;

  if(u==="admin" && p==="1234"){
    document.getElementById("loginPage").style.display="none";
    document.getElementById("shopPage").style.display="block";
    loadProducts();
  }else{
    alert("Wrong login");
  }
}

/* LOAD PRODUCTS */
function showProducts(arr){
  const list=document.getElementById("productList");
  list.innerHTML="";

  arr.forEach(p=>{
    const div=document.createElement("div");
    div.className="card";

    div.innerHTML=`
      <img src="${p.img}" class="pimg">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
    `;

    div.onclick=()=>addToCart(p);
    list.appendChild(div);
  });
}

function loadProducts(){
  showProducts(products);
}
function searchProduct(){
  const text = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(text)
  );

  showProducts(filtered);
}
function showProducts(arr){
  const list=document.getElementById("productList");
  list.innerHTML="";

  arr.forEach(p=>{
    const div=document.createElement("div");
    div.className="card";

    div.innerHTML=`
      <img src="${p.img}" class="pimg">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
    `;

    div.onclick=()=>addToCart(p);
    list.appendChild(div);
  });
}

function logout(){
  document.getElementById("shopPage").style.display="none";
  document.getElementById("cartPage").style.display="none";
  document.getElementById("loginPage").style.display="block";

  document.getElementById("username").value="";
  document.getElementById("password").value="";
}

/* ADD TO CART */
function addToCart(p){
  cart.push(p);
  alert(p.name+" added to cart");
}

/* OPEN CART */
function openCart(){
  document.getElementById("shopPage").style.display="none";
  document.getElementById("cartPage").style.display="block";
  renderCart();
}

/* BACK SHOP */
function openShop(){
  document.getElementById("cartPage").style.display="none";
  document.getElementById("shopPage").style.display="block";
}

/* RENDER CART */
function renderCart(){
  const box=document.getElementById("cartItems");
  box.innerHTML="";
  let total=0;

  cart.forEach((i,index)=>{
    total+=i.price;

    box.innerHTML+=`
      <div class="cart-item">
        ${i.name} - ₹${i.price}
        <button class="removeBtn" onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;
  });

  document.getElementById("total").innerText="Total: ₹"+total;
}

/* REMOVE ITEM */
function removeItem(index){
  cart.splice(index,1);
  renderCart();
}
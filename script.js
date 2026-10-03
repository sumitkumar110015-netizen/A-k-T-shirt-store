
const products=[
 {id:1,name:"Essential Black Tee",price:799,color:"#171717",desc:"A clean everyday T-shirt with a relaxed fit and soft cotton feel."},
 {id:2,name:"Cloud White Tee",price:699,color:"#f1f1ed",desc:"Minimal white tee designed for everyday comfort."},
 {id:3,name:"Street Grey Tee",price:749,color:"#777",desc:"A versatile grey streetwear-inspired T-shirt."}
];
function art(color){return `<div class="tshirt-art" style="background:${color}"></div>`}
function productCard(p){
 return `<article class="card"><a href="product.html?id=${p.id}"><div class="product-img">${art(p.color)}</div><div class="card-body"><h3>${p.name}</h3><div class="price">₹${p.price}</div><span class="btn">View Product</span></div></a></article>`
}
function renderProducts(){
 const el=document.querySelector("#products"); if(!el)return;
 el.innerHTML=products.map(productCard).join("");
}
function renderProduct(){
 const id=new URLSearchParams(location.search).get("id")||"1";
 const p=products.find(x=>x.id==id)||products[0];
 document.title=p.name+" | THREADS";
 document.querySelector("#product").innerHTML=`
  <div class="product-img">${art(p.color)}</div>
  <div>
   <div class="notice">Demo store — no real payment is connected yet.</div>
   <h1>${p.name}</h1><div class="price">₹${p.price}</div>
   <p>${p.desc}</p>
   <strong>Select Size</strong>
   <div class="sizes">${["S","M","L","XL"].map(s=>`<button class="size">${s}</button>`).join("")}</div>
   <button class="btn" id="buy">Buy Now</button>
   <p id="msg"></p>
  </div>`;
 document.querySelectorAll(".size").forEach(b=>b.onclick=()=>{document.querySelectorAll(".size").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});
 document.querySelector("#buy").onclick=()=>document.querySelector("#msg").textContent="Demo order selected. Connect WhatsApp/payment later to accept real orders.";
}
function contact(){
 const f=document.querySelector("#contactForm"); if(!f)return;
 f.onsubmit=e=>{e.preventDefault();document.querySelector("#sent").textContent="Thanks! Your demo message has been received.";f.reset()}
}
document.addEventListener("DOMContentLoaded",()=>{renderProducts();renderProduct();contact()});

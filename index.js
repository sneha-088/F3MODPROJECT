fetch("https://dummyjson.com/products")
.then((response)=>response.json())
.then((data)=>{
   console.log(data);
    let myArr = data.products;
    let Mydiv = document.getElementById("results");
    myArr.map((product)=>{
        Mydiv.innerHTML += 
        `<div class="item">
        <div class="image-container">
        <div class="img">
        <img src="${product.images[0]}">
        </div>
        </div>

        <div class="details union">
        Title:${product.title}
        </div>
        <div class="brand  union" >
        Brand:${product.brand}
        </div>
        <div class="price  union">
        Price:${product.price}
        </div>
        <div class="rating  union">
        Rating:${product.rating}
        </div class="stock  union">
        Stock:${product.stock}
        </div>
        `

    });
});


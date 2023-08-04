
let root = document.querySelector('#root')


fetch('https://6392e59c11ed187986a3e9ce.mockapi.io/pizzas')
.then(response => response.json())
   .then(json => root.innerHTML = 
       json.map(obj =>
       `<div class="card">
         <img src="${obj.imageUrl}" alt="">
         <h2>${obj.title}</h2>
         <h3>${obj.types}</h3>
         <h4>${obj.sizes}</h4>
         <p>${obj.price}</p>
         <p>${obj.category}</p>
         <p>${obj.rating}</p>
        </div>`)
     )
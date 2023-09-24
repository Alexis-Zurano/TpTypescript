type Rating = {
  count: number;
  rate: number;
  };
  
  type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  };
  
fetch ("https://fakestoreapi.com/products")
  .then(res=> res.json())
  .then((products: Product[]) => {
    console.log('products', products);
    
     //prepare table HTML
     let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th><th>Image</th><th>Rating</th><th>Category</th></tr></thead><tbody>';
     // loop thru all products to generate rows of the table
     products.forEach((p: Product ) => {
     tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td><td><img src="${p.image}" style="height: 100px; width: 100px;"></td><td>${p.rating}</td><td>${p.category}</td></tr>`;
     });
     // close table body
    tableHTML += '</tbody>';
    const tableElement: HTMLElement = document.querySelector('#tableElement')!;
    tableElement.innerHTML = tableHTML;
    // HideElement
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display = 'none';
    });


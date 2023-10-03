fetch("https://fakestoreapi.com/products")
    .then(function (res) { return res.json(); })
    .then(function (products) {
    console.log('products', products);
    //prepare table HTML
    var tableHTML = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th><th>Image</th><th>Rating</th><th>Category</th></tr></thead><tbody>';
    // loop thru all products to generate rows of the table
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td><td><img src=\"").concat(p.image, "\" style=\"height: 100px; width: 100px;\"></td><td>").concat(p.rating, "</td><td>").concat(p.category, "</td></tr>");
    });
    // close table body
    tableHTML += '</tbody>';
    var tableElement = document.querySelector('#tableElement');
    tableElement.innerHTML = tableHTML;
    // HideElement
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});

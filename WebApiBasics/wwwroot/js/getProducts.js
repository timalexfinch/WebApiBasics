'use strict';

const getProductbyId = async () => {
    let thisProduct = "api/products/" + document.getElementById("txtProductID").value;
    try {
        const response = await fetch(thisProduct);
        gotProductById(await response.json());
    }
    catch (error) {
        console.error('await failed: ', error);
    }
};

document.querySelector("#btnOneProduct").addEventListener("click", getProductbyId);

const gotProductById = (response) => {
    let table = '<table><thead><tr><th colspan="2">Product Details</th></tr></thead><tbody>';
    table += '<tr><td>Product ID</td><td>' + response.productId + '</td></tr>';
    table += '<tr><td>Name</td><td>' + response.name + '</td></tr>';
    table += '<tr><td>Colour</td><td>' + response.color + '</td></tr>';
    table += '<tr><td>Size</td><td>' + response.size + '</td></tr>';
    table += '<tr><td>List Price</td><td>£' + response.listPrice + '</td></tr>';
    table += '</tbody></table>';
    document.getElementById('products').innerHTML = table;
};




const getProducts = async () => {
    try {
        const response = await fetch('api/products');
        gotProducts(await response.json());
    }
    catch (error) {
        console.error('await failed: ', error);
    }
};

document.querySelector("#btnGetProducts").addEventListener("click", getProducts);

const gotProducts = (products) => {
    let table = '<table><thead><tr>' +
        '<th>Product ID</th><th>Name</th><th>Colour</th><th>Size</th></tr></thead><tbody>';

    for (let i = 0, pl = products.length; i < pl; i++) {
        let row = '<tr>';
        row += '<td>' + products[i].productId + '</td>';
        row += '<td>' + products[i].name + '</td>';
        row += '<td>' + products[i].color + '</td>';
        row += '<td>' + products[i].size + '</td>';
        row += '</tr>';
        table += row;
    }
    table += '</tbody></table>';
    document.getElementById('products').innerHTML = table;
};



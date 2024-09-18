function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex >= 0) {
        
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        
        cart.push(product);
    }

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    alert(`${product.name} ha sido añadido al carrito.`);
}


function cargarCarrito() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const carritoProductosDiv = document.querySelector('.carrito-productos');
    const totalPrecioSpan = document.querySelector('.total-precio');
    let totalPrecio = 0;

    carritoProductosDiv.innerHTML = ''; 

    if (cart.length === 0) {
        carritoProductosDiv.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        
        cart.forEach(product => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-carrito');

            productoDiv.innerHTML = `
                <img src="producto1.png" alt="${product.name}">
                <p>${product.name}</p>
                <p>${product.quantity} x $${product.price.toLocaleString('es-ES')}</p>
                <p>Total: $${(product.quantity * product.price).toLocaleString('es-ES')}</p>
            `;

            carritoProductosDiv.appendChild(productoDiv);

            
            totalPrecio += product.quantity * product.price;
        });
    }

    totalPrecioSpan.textContent = `$${totalPrecio.toLocaleString('es-ES')}`;
}


document.addEventListener('DOMContentLoaded', cargarCarrito);
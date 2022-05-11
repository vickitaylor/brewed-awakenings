import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

// adding an event listener to the products column.  when a product is clicked it will show the following : "${product} costs ${price}"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // for the startsWith function used id of product as the list item the products function creates has an id of product 
        if (itemClicked.id.startsWith("product")) {
            // declared new variable called productId 
            const [, productId] = itemClicked.id.split("--")

            // iterating thru the products array  
            for (const product of products) {
                // if statement to determine if the productId created from the itemClicked is equal to the product.id from the products array 
                if (product.id === parseInt(productId)) {
                    // string to populate on the click event
                    window.alert(`${product.name} costs $${product.price}.`)
                }
            }
        }
    }

    )
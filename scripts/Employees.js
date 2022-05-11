import { getEmployees, getOrders } from "./database.js"


const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


// adding an event listener to the employee column.  when a employee is clicked it will show the following : "${employee} sold ${num of products}"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // for the startsWith function used id of employee as the list item the employee function creates has an id of employee 
        if (itemClicked.id.startsWith("employee")) {
            // declared new variable called employeeId 
            const [, employeeId] = itemClicked.id.split("--")

            // iterating thru the employee array  
            for (const employee of employees) {
                // if statement to determine if the employeeId created from the itemClicked is equal to the employee.id from the order array 
                if (employee.id === parseInt(employeeId)) {
                    // invoking the totalOrders function passing thru a single employee as the argument in the for loop
                    let orderCount = totalOrders(employee)
                    // string to populate on the click event
                    window.alert(`${employee.name} has sold ${orderCount} products.`)
                }
            }
        }
    }

)

// defining a function to count how many orders an employee has sold, function is being invoked in the for loop in the click event function. 

const totalOrders = (employee) => {
    let orderCount = 0

    for (const order of orders) {
        if (order.employeeId === employee.id)
            orderCount ++
    }
    return orderCount
}
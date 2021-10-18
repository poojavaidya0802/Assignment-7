function view(inventory) {
    'use strict';
    var i;
    for ( i = 0; i < inventory.length ;  i++) {
        window.console.log(inventory[i][0] + " " + inventory[i][1] + "(" + inventory[i][2] + ") $" + parseFloat(inventory[i][3]));
    }
}

function update(inventory) {
    'use strict';
    var flag =0;
    var sku = parseInt(window.prompt('Enter Product number to update'));
    var quant;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === sku) {
            quant = window.prompt("Enter new quantity");
            inventory[i][2] = quant;
            window.console.log( inventory[i][1] + " was updated with quantity " + inventory[i][2]);
            flag= 1;
        }  
    }
    if(flag == 0){
        window.console.log("Product not found");
    }
}

function main()
{
    'use strict';
    var inventory = [
        [4824, 'Shirt ', 10, 15.99],
        [6343 , 'Jeans ', 22, 50.0],
        [9870, 'Socks', 23, 10.99],
        [8907, 'Shoes', 11, 70.00],
        [3456, 'Cardigan', 25, 125.99]
    ];
    var command;
    window.console.log("\nWelcome to Product Inventory Management System\n\n");

    while (true) {
        command = window.prompt("Enter Command show/update/exit");
        if (command === "show") {
            view(inventory);
        } else if (command === "update") {
            update(inventory);
        } else if (command === "exit") {
            break;
        } else {
        window.alert("Invalid command");
        }
    }
    window.console.log("Terminated");
}
main();
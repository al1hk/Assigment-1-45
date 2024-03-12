function orderSandwich(...items: string[]): void
 {
    console.log("Sandwich Order:");
    if (items.length === 0)
     {
        console.log("No items specified. Please add items to your sandwich.");
    } 
    else 
    {
        console.log("Items: " + items);
    }
}

orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Swiss");
orderSandwich();

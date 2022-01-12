const MenuModule = (function(){

    const menu = [
        {image: "pizza1.jpg", name: "Margherita", ingredience: "100% mozzarella & pizzasaus<br><br><br>", price: "139Kr", vegitarian: "true", drinks: "false"},
        {image: "pizza2.jpg", name: "Classic", ingredience: "Skinke, sopp, 100% mozzarella & pizzasaus<br><br><br>", price: "169Kr", vegitarian: "false", drinks: "false"},
        {image: "pizza3.jpg", name: "Spicy Chicken", ingredience: "Kylling, grønn paprika, jalapeños, 100% mozzarella & pizzasaus<br><br>", price: "249Kr", vegitarian: "false", drinks: "false"},
        {image: "pizza4.jpg", name: "Meatballs", ingredience: "Kjøttboller, grønnkål, rødløk, 100% mozzarella & hvit saus<br><br><br>", price: "249Kr", vegitarian: "false", drinks: "false"},
        {image: "pizza5.jpg", name: "Extra", ingredience: "Pepperoni, biffkjøtt, grønn paprika, rødløk, 100% mozzarella & pizzasaus", price: "249Kr", vegitarian: "false", drinks: "false"},
        {image: "pizza6.jpg", name: "Hangry", ingredience: "Biffkjøtt, pepperoni, rødløk, 100% mozzarella & pizzasaus", price: "249Kr", vegitarian: "false", drinks: "false"},
        {image: "pizza7.jpg", name: "Veggie Supreme", ingredience: "Soltørkede tomater, rødløk, grønn paprika, sopp, 100% mozzarella & pizzasaus", price: "169Kr", "vegitarian": "true", drinks: "false"},
        {image: "pizza8.jpg", name: "Hot Pepperoni", ingredience: "Pepperoni, jalapeños, 100% mozzarella & pizzasaus<br><br>", price: "169Kr", drinks: "false"},
        {image: "drink1.jpg", name: "Mountain Dew", ingredience: " ", price: "49Kr", vegitarian: "false", drinks: "true"},
        {image: "drink2.jpg", name: "Dr Pepper", ingredience: " ", price: "49Kr", vegitarian: "false", drinks: "true"},
        {image: "drink3.jpg", name: "Pepsi", ingredience: " ", price: "49Kr", vegitarian: "false", drinks: "true"},
        {image: "drink4.jpg", name: "Coca Cola", ingredience: " ", price: "49Kr", vegitarian: "false", drinks: "true"}
    ];

    const getAllMenuItems = () => menu;
    
    const getByName = ( name ) => { 
        return menu.filter( menuObject => menuObject.name.toLowerCase() === name.toLowerCase() ); 
    }
    
    const getByVegitarian = (vegitarian) => {
        return menu.filter( menuObject => menuObject.vegitarian === vegitarian);
    }
    const getByDrinks = (drinks) => {
        return menu.filter( menuObject => menuObject.drinks === drinks);
    }

    return {getAllMenuItems, getByName, getByVegitarian, getByDrinks}

}() ); // end MenuModule

export default MenuModule;
const RestaurantModule = ( function(){

    const restaurant = [
        { name: "Gyldne Pizza <br> Kvadraturen", adress: "Kirkegata 24 <br> 0107 Oslo", phoneNumber: "Tlf: 45 45 00 45", image: "location.jpg" },
        { name: "Gyldne Pizza <br> Fjerdingen", adress: "Christian Khrogs gate 32 <br> 0186 Oslo", phoneNumber: "Tlf: 45 45 00 46", image: "location.jpg" },
        { name: "Gyldne Pizza <br> Vulkan", adress: "Vulkan 19 <br> 0178 Oslo", phoneNumber: "Tlf: 45 45 00 47", image: "location.jpg" },
        { name: "Gyldne Pizza <br> Spikersuppa", adress: "Rosenkrantz gata 16 <br> 0160 Oslo", phoneNumber: "Tlf: 45 45 00 48", image: "location.jpg" }
    ];

    const getAllRestaurant = () =>  restaurant;
    
    return { getAllRestaurant }

}() );

export default RestaurantModule;
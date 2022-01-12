const SalgModule = (function(){

    const salg = [
        {name: "De ulike restaurantene sin andel av omseting", image: "Locations.jpg", daily: "false", month: "false", location: "true", dishes: "false" },
        {name: "Daglig omseting", image: "GraphDaily.jpg", daily: "true", month: "false", location: "false", dishes: "false"},
        {name:"Månedlig omseting", image: "GraphMonth.jpg", daily: "false", month: "true", location: "false", dishes: "false" },
        {name: "Mest solgte retter", image: "Dishes.jpg", daily: "false", month: "false", location: "false", dishes: "true"},
    ];

    const getLocations = ( location ) => {
        return salg.filter( salgObject  => salgObject.location === location );
    }

    const getGraphDaily = ( daily ) => {
        return salg.filter( salgObject  => salgObject.daily === daily );
    }

    const getGraphMonth = ( month ) => {
        return salg.filter( salgObject  => salgObject.month === month );
    }

    const getDishes = ( dishes ) => {
        return salg.filter( salgObject  => salgObject.dishes === dishes );
    }

    return{getGraphDaily, getGraphMonth, getLocations, getDishes}

}() );

export default SalgModule;
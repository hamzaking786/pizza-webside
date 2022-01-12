const Ansatt2Module = (function(){

    const ansatt = [
   
        {name: "Person 1", role: "Daglig leder", location: "Kvadraturen", phoneNr: "123 456 78", email: "Person1@dgp.no", image: "Employee.jpg"},
        {name: "Person 2", role: "Daglig leder", location: "Fjerdingen", phoneNr: "234 567 89", email: "Person2@dgp.no", image: "Employee.jpg"},
        {name: "Person 3", role: "Daglig leder", location: "Vulkan", phoneNr: "345 678 90", email: "Person3@dgp.no", image: "Employee.jpg"},
        {name: "Person 4", role: "Daglig leder", location: "Spikersuppa", phoneNr: "456 789 01", email: "Person4@dgp.no", image: "Employee.jpg"},
        {name: "Person 5", role: "Fulltid", location: "Kvadraturen", phoneNr: "567 890 12", email: "Person5@dgp.no", image: "Employee.jpg"},
        {name: "Person 6", role: "Fulltid", location: "Fjerdingen", phoneNr: "678 901 23", email: "Person6@dgp.no", image: "Employee.jpg"},
        {name: "Person 7", role: "Fulltid", location: "Spikersuppa", phoneNr: "789 012 34", email: "Person7@dgp.no", image: "Employee.jpg"},
        {name: "Person 8", role: "Fulltid", location: "Kvadraturen", phoneNr: "890 123 45", email: "Person8@dgp.no", image: "Employee.jpg"},
        {name: "Person 9", role: "Fulltid", location: "Vulkan", phoneNr: "901 234 56", email: "Person9@dgp.no", image: "Employee.jpg"},
        {name: "Person 10", role: "Deltid", location: "Fjerdingen", phoneNr: "321 654 87", email: "Person10@dgp.no", image: "Employee.jpg"},
        {name: "Person 11", role: "Deltid", location: "Vulkan", phoneNr: "432 765 98", email: "Person11@dgp.no", image: "Employee.jpg"},
        {name: "Person 12", role: "Deltid", location: "Spikersuppa", phoneNr: "543 876 09", email: "Person12@dgp.no", image: "Employee.jpg"},
    ];

    const getAllAnsattItems = () => ansatt;
    
    const getByName = ( name ) => { 
        return ansatt.filter( ansattObject => ansattObject.name.toLowerCase() === name.toLowerCase() ); 
    }
    
    const getByLocation = (location) => {
        return ansatt.filter( ansattObject => ansattObject.location === location);
    }
    const getByRole = (role) => {
        return ansatt.filter( ansattObject => ansattObject.role.toLowerCase() === role.toLowerCase());
    }

    return {getAllAnsattItems, getByName, getByLocation, getByRole}

}() ); // end ansattModule

export default Ansatt2Module;
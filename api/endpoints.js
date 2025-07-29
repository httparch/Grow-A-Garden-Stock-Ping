
export const getSeedData = async() => {
    try{
        const response = await fetch("https://gagapi.onrender.com/seeds");
        const data = await response.json();

        return data;
    } catch(error){
            console.error("Error fetching seeds:", error);
    }
}//end of getSeedData()

export const getGearData = async() => {
    try{
        const response = await fetch("https://gagapi.onrender.com/gear");
        const data = await response.json();

        return data;
    } catch(error){
            console.error("Error fetching gears:", error);
    }
}//end of getGearData()

export const getEggData = async() => {
    try{
        const response = await fetch("https://gagapi.onrender.com/eggs");
        const data = await response.json();
        return data;
    } catch(error){
            console.error("Error fetching eggs:", error);
    }
}//end of getEggData()

export const getAllItem = async() =>{
    try{
        const response = await fetch("https://gagapi.onrender.com/alldata");
        const data = await response.json();

        return data;
    } catch(error){
            console.error("Error fetching all item", error);
    }
}//end of getAllItem()

export const getGaGInfo = async() =>{
    try{
        const response = await fetch("https://api.joshlei.com/v2/growagarden/info/");
        const data = await response.json();

        return data;
    } catch(error){
            console.error("Error fetching weather", error);
    }
}//end of getGaGInfo()


export const getWeatherData = async() => {
    try{
        const response = await fetch("https://api.joshlei.com/v2/growagarden/weather");
        const data = await response.json();

        return data;
    } catch(error){
            console.error("Error fetching weather", error);
    }
}//end of getWeatherData();

export const fetchPlayStation = async () =>{
    try{
        const response = await fetch("https://de1.api.radio-browser.info/json/stations/bycountry/india");
        const data = await response.json();
        return data
    }catch(error){
        console.log("Error occured in fetchPlayStation", error);
    }
}
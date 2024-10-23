import { fetchGetCarData } from "../../apis/getCars"
import { CarModel } from "./props"

// Fazer uma solicitação para API
export const loadCarData = async (id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    try {
        const response = await fetchGetCarData(id);
        if(response) setCarData(response);
    } 
    catch(error) {
        console.log(error)
        setCarData(null);
    }
}

export const handlePreviousItem = async (carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null;
    try {
        if(carData && carData.id > 1) response = await fetchGetCarData(carData.id - 1)
    
        if(response) setCarData(response);
        
    } catch (error) {
        console.log("Erro ao chamar a api: ", error)
    }
}

export const handleNextItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null;
    try {
        if(carData && carData.id < 10) response = await fetchGetCarData(carData.id + 1)
    
        if(response) setCarData(response);
        
    } catch (error) {
        console.log("Erro ao chamar a api: ", error)
    }
}
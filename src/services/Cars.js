import { httpService } from "./HTTPService";

class Cars {
    getAll() {
        return httpService.get();
    }

    createCar(car) {
        return httpService.post('cars', car)
    }
}

export const carService = new Cars();
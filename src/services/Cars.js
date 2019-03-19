import { httpService } from "./HTTPService";

class Cars {
    getAll() {
        return httpService.get('cars');
    }

    createCar(car) {
        return httpService.post('cars', car)
    }

    get(id) {
        return httpService.get('cars/' + id)
    }

    edit(id, car) {
        return httpService.put('cars/'+ id, car)
    }

    delete(id) {
        return httpService.delete('cars/'+id);
    }
}

export const carService = new Cars();
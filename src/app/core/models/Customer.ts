import { Customer } from '@interfaces/request.response';

export class CustomerMapper {
    customer: Customer;

    constructor(object: unknown) {
        const data = object as { [key: string]: string };
        this.customer = ({
            id: data['id'],
            fullName: data['nombre_completo'],
            phone: data['telefono'],
            email: data['correo_electronico'],
            birthDate: data['fecha_nacimiento'],
            address: data['direccion'],
            notes: data['notas'],
            photo: data['foto'],
            gender: data['genero'],
        })
    }
}
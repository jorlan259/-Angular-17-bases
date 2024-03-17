import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UsersResponse, UserResponse, Customer } from '@interfaces/request.response';
import { Observable, delay, map } from 'rxjs';
//https://reqres.in/
interface State {
    user: User[];
    loading: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public users = computed(() => this.#state().user);
    public loading = computed(() => this.#state().loading);


    private http = inject(HttpClient);


    //El # significa que es una propiedad privada
    #state = signal<State>({
        loading: true,
        user: []
    });

    constructor() {
        this.http.get<UsersResponse>('https://reqres.in/api/users')
            .pipe(
                delay(1500)
            )
            .subscribe(
                (response) => {
                    this.#state.set({
                        loading: false,
                        user: response.data
                    })
                }
            )
    }

    getUserById(id: string): Observable<User> {
        return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
            .pipe(
                delay(1500),
                map(response => response?.data),
            );
    }

    getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>('http://localhost:5000/cliente')
            .pipe(
                delay(1500),
            );
    }

}

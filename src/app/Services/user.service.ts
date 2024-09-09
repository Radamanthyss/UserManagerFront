import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface UserResponse {
  id: number;
  name: string;
  cpf: string;
  data_nascimento: string;
  email: string;
  telefone: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  endereco: string;
}

export interface UserResponseType {
  data: UserResponse[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  saveUser(inputData: object) {
    return this.httpClient.post(
      'http://localhost:8000/api/v1/users',
      inputData
    );
  }

  editUser(inputData: object, id: number) {
    return this.httpClient.put(
      'http://localhost:8000/api/v1/users/' + id,
      inputData
    );
  }

  getUsers() {
    return this.httpClient.get<UserResponseType>(
      'http://localhost:8000/api/v1/users'
    );
  }

  getUser(userId: number) {
    return this.httpClient.get<UserResponseType>(
      'http://localhost:8000/api/v1/users/' + userId
    );
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(
      'http://localhost:8000/api/v1/users/' + userId
    );
  }
}

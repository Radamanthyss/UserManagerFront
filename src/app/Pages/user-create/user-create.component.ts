import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent {
  constructor(private userService: UserService) {}

  name!: string;
  cpf!: string;
  password!: string;
  data_nascimento!: string;
  email!: string;
  telefone!: string;
  cep!: string;
  estado!: string;
  cidade!: string;
  bairro!: string;
  endereco!: string;

  isLoading: boolean = false;
  errors: any = [];
  loadingTitle: string = 'Carregando';

  saveUser() {
    this.loadingTitle = 'Salvando';
    this.isLoading = true;
    var inputData = {
      name: this.name,
      cpf: this.cpf,
      password: this.password,
      data_nascimento: this.data_nascimento,
      email: this.email,
      telefone: this.telefone,
      cep: this.cep,
      estado: this.estado,
      cidade: this.cidade,
      bairro: this.bairro,
      endereco: this.endereco,
    };

    this.userService.saveUser(inputData).subscribe({
      next: (res: any) => {
        this.limpaTela();
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;
      },
    });
  }

  limpaTela() {
    this.isLoading = false;
    this.name = '';
    this.cpf = '';
    this.password = '';
    this.data_nascimento = '';
    this.email = '';
    this.telefone = '';
    this.cep = '';
    this.estado = '';
    this.cidade = '';
    this.bairro = '';
    this.endereco = '';

    this.errors = '';
  }
}

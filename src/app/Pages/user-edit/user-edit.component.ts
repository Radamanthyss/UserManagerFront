import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  userId!: any;
  user!: any;
  isLoading: boolean = false;
  errors: any = [];
  loadingTitle: string = 'Carregando';

  ngOnInit() {
    this.isLoading = true;
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId).subscribe((res) => {
      this.user = res.data;
      this.isLoading = false;
    });
  }

  editUser() {
    this.loadingTitle = 'Salvando';
    this.isLoading = true;
    var inputData = {
      name: this.user.name,
      cpf: this.user.cpf,
      data_nascimento: this.user.data_nascimento,
      email: this.user.email,
      telefone: this.user.telefone,
      cep: this.user.cep,
      estado: this.user.estado,
      cidade: this.user.cidade,
      bairro: this.user.bairro,
      endereco: this.user.endereco,
    };

    this.userService.editUser(inputData, this.userId).subscribe({
      next: (res: any) => {
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;
      },
    });
  }
}

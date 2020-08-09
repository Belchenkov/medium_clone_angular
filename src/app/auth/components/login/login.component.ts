import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { isSubmittingSelector, validationErrorSelector } from "../../store/selectors";
import { AuthService } from "../../services/auth.service";
import { BackendErrorsInterface } from "../../../shared/types/backendErrors.interface";
import { LoginRequestInterface } from "../../types/loginRequest.interface";
import { loginAction } from "../../store/actions/login.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorSelector));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    };

    this.store.dispatch(loginAction({request}));
  }
}

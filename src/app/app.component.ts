import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-dashboard';
}
//npm i -D prettier  // para formatear el archivo html con el control flow
/*
para configurar eslint en angular
ejecutar el comando:
ng add @angular-eslint/schematics , el cual modifica el archivo package.json, angular.json y  crea el archivo .eslintrc.json
se debe instalar:
npm install prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev

la direccion para las configuraciones es
https://github.com/angular-eslint/angular-eslint#notes-for-eslint-plugin-prettier-users

colocar los siguiente en el archivo configurado .eslintrc.json

{
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:angular/johnpapa"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint",
      "angular"
    ],
    "rules": {
      // Personaliza las reglas según tus preferencias
      // Por ejemplo:
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "angular/controller-as-vm": ["error", "always"],
      // ... otras reglas específicas de Angular
      "typescript-eslint/explicit-function-return-type": "error"
    }
  }





intalar iconos https://ng-icons.github.io/ng-icons/#/getting-started

@ng-icons/core	MIT
@ng-icons/bootstrap-icons	MIT
@ng-icons/heroicons	MIT
@ng-icons/ionicons	MIT
@ng-icons/material-icons	Apache 2.0
@ng-icons/material-file-icons	MIT
@ng-icons/css.gg	MIT
@ng-icons/feather-icons	MIT
@ng-icons/jam-icons	MIT
@ng-icons/octicons	MIT
@ng-icons/radix-icons	MIT
@ng-icons/tabler-icons	MIT
@ng-icons/akar-icons	MIT
@ng-icons/iconoir	MIT
@ng-icons/cryptocurrency-icons	CC0-1.0
@ng-icons/simple-icons	CC0-1.0
@ng-icons/typicons	CC-BY-SA-4.0
@ng-icons/dripicons	CC-BY-SA-4.0
@ng-icons/ux-aspects	Apache 2.0
@ng-icons/circum-icons	MPL-2.0
@ng-icons/remixicon	Apache 2.0
@ng-icons/font-awesome	CC BY 4.0
@ng-icons/iconsax

npm i @ng-icons/core @ng-icons/bootstrap-icons @ng-icons/heroicons @ng-icons/ionicons @ng-icons/material-icons @ng-icons/material-file-icons @ng-icons/css.gg @ng-icons/feather-icons @ng-icons/jam-icons @ng-icons/octicons @ng-icons/radix-icons @ng-icons/tabler-icons @ng-icons/akar-icons @ng-icons/iconoir @ng-icons/cryptocurrency-icons @ng-icons/simple-icons @ng-icons/typicons @ng-icons/dripicons @ng-icons/ux-aspects @ng-icons/circum-icons @ng-icons/remixicon @ng-icons/font-awesome @ng-icons/iconsax 
*/

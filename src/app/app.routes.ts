import {RouterConfig} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {MainComponent} from "./components/main/main.component";



export const routes:RouterConfig = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent}  
];

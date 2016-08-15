import {RouterConfig} from "@angular/router";
// import {HomeComponent} from "./components/home/home.component";
// import {UserShowComponent} from "./components/user/user-show.component";
// import {FollowingListComponent} from "./components/relationship/following-list.component";
// import {FollowerListComponent} from "./components/relationship/follower-list.component";
// import {UserListComponent} from "./components/user/user-list.component";
// import {HelpComponent} from "./components/help/help.component";
// import {UserEditComponent} from "./components/user/user-edit.component";
// import {ProfileDataResolver} from "../shared/routes/profile-data.resolver";
import {LoginComponent} from "./components/login/login.component";
// import {SignupComponent} from "./components/signup/signup.component";
// import {TopComponent} from "./components/top/top.component";
// import {PrivatePageGuard} from "../shared/services/private-page.guard";
// import {PublicPageGuard} from "../shared/services/public-page.guard";

export const routes:RouterConfig = [
  {path: 'login', component: LoginComponent},
];

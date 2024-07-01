import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'verify-otp',
    loadChildren: () =>
      import('./verify-otp/verify-otp.module').then(
        (m) => m.VerifyOtpPageModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(
        (m) => m.ContactUsPageModule
      ),
  },
  {
    path: 'terms-and-condition',
    loadChildren: () =>
      import('./terms-and-condition/terms-and-condition.module').then(
        (m) => m.TermsAndConditionPageModule
      ),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}

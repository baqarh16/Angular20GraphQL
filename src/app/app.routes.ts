import { Routes } from '@angular/router';
import { Garphqldemo } from './garphqldemo/garphqldemo';

export const routes: Routes = [
    { path: 'demo', component: Garphqldemo },
    { path: '**', redirectTo:'demo' },
];

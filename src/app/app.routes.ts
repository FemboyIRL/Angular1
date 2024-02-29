import { Routes } from '@angular/router';
import { PrimerDiaComponent } from './primer-dia/primer-dia.component';
import { SegundoDiaComponent } from './segundo-dia/segundo-dia.component';
import { TercerDiaComponent } from './tercer-dia/tercer-dia.component';
import { RandomComponent } from './random/random.component';

export const routes: Routes = [
    {
        path:'',
        component:PrimerDiaComponent
    },
    {
        path: 'primer-dia',
        component: PrimerDiaComponent
    }
       , {
        path: 'segundo-dia',
        component: SegundoDiaComponent
    },
    {
        path: 'tercer-dia',
        component: TercerDiaComponent
    },
    {
        path: 'random',
        component: RandomComponent
    },{
        path: '**',
        component: PrimerDiaComponent
    }
        

];

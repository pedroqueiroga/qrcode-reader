import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reader',
    loadComponent: () =>
      import('./reader/reader.component').then((mod) =>
        mod.ReaderComponent
      ),
  },
  {
    path: 'only-text',
    loadComponent: () =>
      import('./only-text/only-text.component').then((mod) =>
        mod.OnlyTextComponent
      ),
  },
];

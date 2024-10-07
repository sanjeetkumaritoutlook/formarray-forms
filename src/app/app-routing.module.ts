import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'user', loadChildren: () => import(`./user-profile/user-profile.module`).then(m => m.UserProfileModule)}

];
//Angular Module Loading: Eager, Lazy and Preloading
//https://dev.to/krishna7852/angular-module-loading-eager-lazy-and-preloading-3jj4
@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
		// Tell the router to use the HashLocationStrategy.
		useHash: true,
		enableTracing: false,
 
		// This will tell Angular to preload the lazy-loaded routes after the
		// application has been bootstrapped. This will extend to both top-level
		// and nested lazy-loaded modules.
		preloadingStrategy: PreloadAllModules
	})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

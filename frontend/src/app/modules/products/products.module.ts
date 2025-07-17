import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/products/overview/overview.component';
import { ProductsComponent } from './components/products/products.component';
import { SpecificationComponent } from './components/products/specification/specification.component';
import { SharedModule } from '../shared/shared.module';

const PRODUCT_ROUTES: Routes = [
  {
    path: 'products', // http://localhost:4200/products
    component: ProductsComponent,
    children: [
      {
        path: ':productId/:productName/overview',
        component: OverviewComponent,
        children: [
          { path: 'specification', component: SpecificationComponent },
        ],
      }, // http://localhost:4200/products/productId/productName/overview/specification
    ],
  },
];

@NgModule({
  declarations: [ProductsComponent, OverviewComponent, SpecificationComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(PRODUCT_ROUTES)],
  exports: [RouterModule],
})
export class ProductsModule {}

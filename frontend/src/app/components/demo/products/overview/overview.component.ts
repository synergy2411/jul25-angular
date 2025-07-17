import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  productId!: number;
  productName!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.productId = this.route.snapshot.params['productId'];

    this.route.params.subscribe((params) => {
      this.productName = params['productName'];
      // this.productId = params['productId'];
    });

    this.route.paramMap.subscribe((params) => {
      this.productId = +params.get('productId')!;
    });
  }
}

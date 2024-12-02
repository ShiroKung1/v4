import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage {
  productName: string = '';
  quantity: number | null = null;
  deliveryAddress: string = '';

  constructor(private router: Router) {}

  placeOrder() {
    if (!this.productName || !this.quantity || !this.deliveryAddress) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // ส่งข้อมูลการสั่งซื้อไปยัง API (หรือ Backend)
    console.log('สั่งซื้อสินค้า:', {
      productName: this.productName,
      quantity: this.quantity,
      deliveryAddress: this.deliveryAddress,
    });

    // Reset form หลังจากส่งคำสั่งซื้อ
    this.productName = '';
    this.quantity = null;
    this.deliveryAddress = '';

    // ย้ายไปยังหน้าขอบคุณหลังการสั่งซื้อ
    this.router.navigate(['/thank-you']);
  }
  
}

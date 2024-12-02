import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-gotodetailproduct',
  templateUrl: './gotodetailproduct.page.html',
  styleUrls: ['./gotodetailproduct.page.scss'],
})
export class GotodetailproductPage implements OnInit {

  // ตัวแปรที่รับข้อมูลจากฟอร์ม
  txtid: any;
  txtmenu:any;
  txtprice:any;
  txtdetail: any;
  
  constructor(
    public dataapi: DataapiService,
    private route: Router
  ) {}

  // ฟังก์ชัน ngOnInit
  ngOnInit() {
    // ฟังก์ชันนี้จะถูกเรียกใช้งานเมื่อคอมโพเนนต์ถูกโหลด
    console.log("GotodetailproductPage loaded!");
  }

  // ฟังก์ชันสำหรับเพิ่มข้อมูล
  addmember() {
    let data = {
      id:this.txtid,
      menu:this.txtmenu,
      price:this.txtprice,
      detail:this.txtdetail,
    };

    this.dataapi.addData(data).subscribe({
      next: (res: any) => {
        console.log("ข้อมูลถูกเพิ่ม", res);
      },
      error: (error: any) => {
        console.log('Error', error);
      }
    });

    this.clearForm();
  }

  // ฟังก์ชันล้างข้อมูลในฟอร์ม
  clearForm() {
    this.txtid = "";
    this.txtmenu = "";
    this.txtprice = "";
    this.txtdetail = "";
 
  }

  // ฟังก์ชันสำหรับไปยังหน้าแสดงข้อมูล
  show() {
    this.route.navigate(['/product']);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  constructor(
    public http: HttpClient,
  ) { }
  datadetail: any=[];

  // ฟังก์ชันการเพิ่มที่ส่งไปยัง api
  addData(data: any) {
    return this.http.post('http://localhost/class24/somurday/api/insert.php', data);
  }
  // ฟังก์ชันดึงข้อมูลมาจาก API
  listMember(){
    return this.http.get('http://localhost/class24/somurday/api/listmember.php');
  }
  editData(dataEdit: any){  
    return this.http.post('http://127.0.0.1/class2-4/api/update.php', dataEdit);
  }

  //ฟังชั่นลบข้อมูล
  deleteData(id:any){
    return this.http.delete('http://localhost/class24/somurday/api/delete.php?id='+id);
  }
  
}
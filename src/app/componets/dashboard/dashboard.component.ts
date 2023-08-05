import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EquipmentService } from 'src/app/services/equipment.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  equipments: any;
  public userName: string = "";
  constructor(private auth: AuthService, private equipService: EquipmentService, private userStore: UserStoreService){ }
  ngOnInit(): void {
    this.equipService.getAll().subscribe({
      next: res => {
        console.log(res);
      },
      error: res => {
        console.log(res);
      }
    });
      this.userStore.getUserNameFromStore().subscribe(val =>{
        let userNameFromToken = this.auth.getuserNameFromToken();
        this.userName = val || userNameFromToken;
      })
  }
  logout(){
    this.auth.logout();
  }

}

import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    auth: any;
    num1 = 10;
    num2 = 20;
    constructor(
        private session: SessionService
    ) {
        this.auth = this.session.auth;


        this.Init();

    }
    async Init() {
        // let staff_name = await this.session.GetStorage("staff_name");
        // alert(staff_name);
    }
    async Logout() {

        let st = await this.session.ShowConfirm("คุณต้องการออกจากระบบใช่หรือไม่ ?")
        if (st == true) {
            this.session.RemoveStorage("auth");
            this.session.LinkTo("login");
        }
    }
    GoToDocument() {
        this.session.LinkTo("document");
    }
    GoToSearch() {
        this.session.LinkTo("search");
    }
    GoTodocadd() {
        this.session.LinkTo("docadd");
    }
    GoToProfile() {
        this.session.LinkTo("profile");
    }
}

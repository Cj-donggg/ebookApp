import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-document',
    templateUrl: './document.page.html',
    styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {
    data: any = [];
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        let res: any = await this.session.Ajax(this.session.api + "/document-get.php", {});
        this.data = res.data;
    }
    async click() {

        let st = await this.session.ShowConfirm("คุณต้องการออกจากระบบใช่หรือไม่ ?")
        if (st == true) {
            this.session.RemoveStorage("auth");
            this.session.LinkTo("login");
        }
    }
}

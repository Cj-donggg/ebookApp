import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-docadd',
    templateUrl: './docadd.page.html',
    styleUrls: ['./docadd.page.scss'],
})
export class DocaddPage implements OnInit {
    document_id = "";
    document_name = "";
    doc_type_id = "";
    document_date = "";
    document_file = "";
    staff_id = "";
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        let auth: any = await this.session.GetStorage("auth");
        this.staff_id = auth.staff_id;
    }
    async Add() {
        let res: any = await this.session.Ajax(this.session.api + "/document-add.php", {
            document_id: this.document_id,
            document_name: this.document_name,
            doc_type_id: this.doc_type_id,
            document_date: this.document_date,
            document_file: this.document_file,
            staff_id: this.staff_id
        });
        if (res.status == "ok") {
            this.session.ShowAlert("เพื่มหนังสือเรียบร้อยแล้ว");
        } else {
            this.session.ShowAlert("บันทึกข้อมูลไม่ได้");
        }
    }

}

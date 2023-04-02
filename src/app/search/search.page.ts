import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    data: any = [];
    constructor(
        private session: SessionService
    ) { }

    async ngOnInit() {
        let res: any = await this.session.Ajax(this.session.api + "/document-get.php", {});
        this.data = res.data;
    }

}

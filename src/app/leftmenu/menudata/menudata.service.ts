import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MenudataService {


    constructor(
        public http: Http
    ) { }

    public getData() {
        return this.http.get('assets/menudata.json').map(res => res.json());
    }


}
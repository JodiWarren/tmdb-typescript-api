import { Observable } from 'rxjs';

import { Context } from '../context';
import { Helper } from '../helper';
import {ConfigurationResult} from "../model/configuration-result";

export class ConfigurationApi {

    constructor(private context: Context) {
    }

    /**
     * Builds the endpoint URL depending on which resource we are looking for
     * @returns {string}
     */

    configuration(): Observable<ConfigurationResult> {
        const url = `${this.context.baseUrl}/configuration/?api_key=${this.context.apiKey}`;
        return Helper.ajaxObservable(url);
    }

}
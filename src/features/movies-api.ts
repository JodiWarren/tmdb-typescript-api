import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Context } from '../context';
import { Helper } from '../helper';
import { MovieDetails } from '../model/movie-details';

export class MoviesApi {

	constructor(private context: Context) {
	}

	details(movieId: number): Observable<MovieDetails> {
		const url = `${this.context.baseUrl}/movie/${movieId}?api_key=${this.context.apiKey}&language=${this.context.language}`;
		return Helper.ajaxObservable(url);
	}

}
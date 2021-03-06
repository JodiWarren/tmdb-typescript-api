import { TmdbApi } from '../../src/tmdb-api';
import 'rxjs';

import { Observable } from 'rxjs/Observable';
import { Helper } from '../../src/helper';
import { MovieDetails } from '../../src/model/movie-details';

describe('movies feature', () => {

	const api = new TmdbApi(window['__karma__'].config.apiKey);

	it('should fetch movie details', (done) => {

		if (!api.context.apiKey) {
			window['spyOn'](Helper, 'ajaxObservable').and.callFake((url) => Observable.from([window['fixture'].load('insideout-movie-details-response.json')]));
		}

		api.movies.details(150540).subscribe((movie: MovieDetails) => {
			expect(<any>movie.id).toEqual(150540);
			expect(movie.title).toEqual('Inside Out');
			expect(movie.original_title).toEqual('Inside Out');
			expect(<any>movie.release_date).toEqual('2015-06-09');
			expect(movie.original_language).toEqual('en');
			expect(movie.homepage).toEqual('http://movies.disney.com/inside-out');
			expect(movie.imdb_id).toEqual('tt2096673');

			expect(<any>movie.genres[0]).toEqual({id: 18, name: 'Drama'});
			expect(<any>movie.genres[1]).toEqual({id: 35, name: 'Comedy'});
			expect(<any>movie.genres[2]).toEqual({id: 16, name: 'Animation'});
			expect(<any>movie.genres[3]).toEqual({id: 10751, name: 'Family'});

			expect(<any>movie.production_companies[0]).toEqual({id: 2, name: 'Walt Disney Pictures'});
			expect(<any>movie.production_companies[1]).toEqual({id: 3, name: 'Pixar Animation Studios'});

			expect(<any>movie.production_countries[0]).toEqual({iso_3166_1: 'US', name: 'United States of America'});

			expect(<any>movie.spoken_languages[0]).toEqual({iso_639_1: 'en', name: 'English'});

			expect(movie.popularity).toBeDefined();
			expect(movie.backdrop_path).toBeDefined();
			expect(movie.poster_path).toBeDefined();
			expect(movie.overview).toBeDefined();
			expect(movie.vote_average).toBeDefined();
			expect(movie.vote_count).toBeDefined();
			expect(movie.video).toBeFalsy();
			expect(movie.adult).toBeFalsy();
			expect(movie.belongs_to_collection).toBeDefined();
			expect(movie.budget).toBeDefined();
			expect(movie.revenue).toBeDefined();
			expect(movie.runtime).toBeDefined();
			expect(movie.status).toBeDefined();
			expect(movie.tagline).toBeDefined();

			done();
		});
	});

});
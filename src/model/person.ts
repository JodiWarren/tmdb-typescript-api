import {MovieMulti} from './movie';
import {TvShowMulti} from './tv-show';

export class Person {
	id: number;
	name: string;
	profile_path: string;
	adult: boolean;
	popularity: number;
	known_for: Array<MovieMulti | TvShowMulti>;
}

export class PersonMulti extends Person{
	media_type: "person";
}
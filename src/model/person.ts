import {MovieMulti} from "./movie";
import {TvShowMulti} from "./tv-show";

export interface Person {
	id: number;
	name: string;
	profile_path: string;
	adult: boolean;
	popularity: number;
	known_for: Array<MovieMulti | TvShowMulti>;
}

export interface PersonMulti extends Person{
	media_type: 'person';
}
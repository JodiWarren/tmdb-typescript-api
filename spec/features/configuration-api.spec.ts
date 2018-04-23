import { from } from "rxjs";

import {
    Helper,
    TmdbApi,
    ConfigurationResult,
} from "../../src";

describe("configuration feature", () => {

    const api = new TmdbApi(window["__karma__"].config.apiKey);

    it("should fetch configuration details", () => {

        if (!api.context.apiKey) {
            window['spyOn'](Helper, 'ajaxObservable').and.callFake(
                (url) => from([window['fixture'].load('configuration-response.json')]));
        }

        api.configuration.configuration().subscribe((config: ConfigurationResult) => {
            expect(config.images.base_url).toContain('http://');
            expect(config.images.secure_base_url).toContain('https://');
            expect(config.images.backdrop_sizes.length).toBeGreaterThan(1);
            expect(config.images.logo_sizes.length).toBeGreaterThan(1);
            expect(config.images.poster_sizes.length).toBeGreaterThan(1);
            expect(config.images.profile_sizes.length).toBeGreaterThan(1);
            expect(config.images.still_sizes.length).toBeGreaterThan(1);
            expect(config.change_keys.length).toBeGreaterThan(1);
        });
    })
});
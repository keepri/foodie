import { Langs } from '#declarations/enums/Langs';
import { english } from './files/english';
import { romanian } from './files/romanian';

export { Lang };

class Lang {
	constructor(lang: Langs) {
		if (!this?.[lang]) {
			this.lang = this.en;
			return;
		}

		this.lang = this[lang];
	}

	lang: typeof this.en;
	private en = english;
	private ro = romanian;
}

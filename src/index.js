export default function(supportedLocales = []) {
	for (let i = 0, ii = navigator.languages.length; i < ii; ++i) {
		let locale = navigator.languages[i];
		for (;;) {
			if (supportedLocales.includes(locale)) {
				return locale;
			}
			let index = locale.lastIndexOf('-');
			if (index < 0) {
				break;
			}
			locale = locale.substring(0, index);
		}
	}
	return navigator.language;
}

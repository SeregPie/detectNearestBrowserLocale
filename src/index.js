export default function(supportedLocales = []) {
	if (supportedLocales.length > 0) {
		let locales = navigator.languages || [navigator.language || ''];
		for (let i = 0, ii = locales.length; i < ii; ++i) {
			let locale = locales[i];
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
		return supportedLocales[0];
	}
	return navigator.language;
}

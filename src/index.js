import detectNearestLocale from 'detect-nearest-locale';

export default function(supportedLocales) {
	let preferredLocales = navigator.languages || [navigator.language];
	return detectNearestLocale(supportedLocales, preferredLocales);
}

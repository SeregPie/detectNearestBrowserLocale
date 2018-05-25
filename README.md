# detectNearestBrowserLocale

`detectNearestBrowserLocale(supportedLocales)`

Detects nearest browser locale.

| argument | description |
| ---: | :--- |
| `supportedLocales` | An array of supported locales. |

Returns the first matching supported locale.

## dependencies

*no dependencies*

## setup

### npm

```shell
npm install detect-nearest-browser-locale
```

### ES module

```javascript
import detectNearestBrowserLocale from 'detect-nearest-browser-locale';
```

### browser

```html
<script src="https://unpkg.com/detect-nearest-browser-locale"></script>
```

## usage

```javascript
// navigator.languages => ['de-DE', 'en-US', 'en-GB']
let locale = detectNearestBrowserLocale(['ru', 'en']);
// => 'en'
```

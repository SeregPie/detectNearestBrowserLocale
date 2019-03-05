# detectNearestBrowserLocale

`detectNearestBrowserLocale(supportedLocales)`

Detects the nearest browser locale.

| argument | description |
| ---: | :--- |
| `supportedLocales` | An array of the supported locales. |

Returns the first matching supported locale.

## dependencies

- [detectNearestLocale](https://github.com/SeregPie/detectNearestLocale)

## setup

### npm

```shell
npm i detect-nearest-browser-locale
```

### ES module

```javascript
import detectNearestBrowserLocale from 'detect-nearest-browser-locale';
```

### browser

```html
<script src="https://unpkg.com/detect-nearest-locale"></script>
<script src="https://unpkg.com/detect-nearest-browser-locale"></script>
```

## usage

```javascript
// navigator.languages => ['de', 'en-GB']
let locale = detectNearestBrowserLocale(['ru', 'en-US']);
// => 'en-US'
```

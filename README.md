# awesome-vue-toast
:whale: awesome vue2 simple toast

* Can be singleton
* Programmable

Changed from [AStaroverov/vue-toast](https://github.com/AStaroverov/vue-toast)

## Example

[Live demo](https://hiyali.github.io/awesome-vue-toast)

### Screenshot

![screenshot](https://raw.githubusercontent.com/hiyali/awesome-vue-toast/master/assets/toast-screenshot.png "screenshot")

## usage
```javascript
import Toast from './awesome-vue-toast/src'
...
Toast.showToast('Enjoy toast!')
```

### for singleton
```html
<body>
  ...
  <script src="./awesome-vue-toast/build/js/toast.js"></script>
  <script>
    ...
    Toast.showToast('Enjoy toast!')
    ...
  </script>
  ...
</body>
```

## with some option
```javascript
Toast.addMessage({
  text: 'This is success type',
  type: 'success',
  dismissAfter: 3 * 1000
})
```

| option         | type       |  default    | other value    |
| :------------- | :--------- | :------------ | :----------- |
| `text`         | `String`   |               |              |
| `type`         | `String`   | info          | success, warning, danger |
| `dismissAfter` | `Int`      | 5 * 1000      | milliseconds |

## html element
```html
<div id="toast" position="se"></div>
```

| props         | default    | other value    | description    |
| :------------ | :--------- | :------------- | :------------- |
| `position`    | se         | n, s, nw, ne, sw, se | north, south, north west, ... |

## Development / build
```shell
npm run dev # development
npm run build # build
```

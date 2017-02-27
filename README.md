# awesome-vue-toast
🚀 awesome vue2 simple toast

* Can be singleton
* Programmable

[demo](https://hiyali.github.io/awesome-vue-toast)

Changed from [AStaroverov/vue-toast](https://github.com/AStaroverov/vue-toast)

# usage
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
Toast.addMessage({ text: 'This is success type', type: 'success', dismissAfter: 3 * 1000 })
```

| option         | type       |  default    | other value    |
| :------------- | :--------- | :------------ | :----------- |
| `text`         | `String`   |               |              |
| `type`         | `String`   | info          | success, warning, danger |
| `dismissAfter` | `Int`      | 5 * 1000      | milliseconds |

## html
```html
<div id="toast" position="se"></div>
```

| props         | default    | other value    | description    |
| :------------ | :--------- | :------------- | :------------- |
| `position`    | se         | n, s, nw, ne, sw, se | north, south, north west, ... |

# Development / build
```bash
npm run dev # development
npm run build # build
```

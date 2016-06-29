## Info

省市区三级联动 Vue 组件

省市区三级数据[官方](http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201504/t20150415_712722.html)

```
npm install 

webpack & node server.js

http://localhost:9100/demo/index.html#

```

![](http://img.haimi.com/FloL1GJll7WxWL4TDUODtGbgKFwt)

![](http://img.haimi.com/Fi-QZ9-Ju82GEeixftrONft61AK-)


## API

```js
    <vue-area :show.sync="show" :result.sync="result"></vue-area>
```

```show``` 显示隐藏组件

```result```  省市区数据

## Usage

```js
'use strict'
import Vue from 'vue'
import vueArea from '../src/vue-area.vue'

new Vue({
	el: '#app',
	components: {
		vueArea
	},
	data: {
		result: null,
		show: false
	}
})
```

```html
<vue-area :show.sync="show" :result.sync="result"></vue-area>
```

### 已经支持了vue2.x  ###

vue1.x 版本请查看 branch vue1.x


## Install
```
npm install vue-area --save

```

## Info
已经支持vue2.x
Provincial level three linkage

省市区三级数据[官方](http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201504/t20150415_712722.html)


![](http://img.haimi.com/FloL1GJll7WxWL4TDUODtGbgKFwt)

![](http://img.haimi.com/Fi-QZ9-Ju82GEeixftrONft61AK-)


## API

```js
    <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
```

```show``` 显示隐藏组件

```result```  省市区数据

## Usage

```js
'use strict'
import Vue from 'vue'
import vueArea from 'vue-area'

var app = new Vue({
  el: '#app',
  components: {
    vueArea
  },
  methods: {
    areaResult: function(show, result){
        this.show = show
        this.result = result
    }
  },
  data: {
    result: null,
    show: false
  }
})
```

```html
<vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
```

## Run Demo

```
npm install

webpack & node server.js

http://localhost:9100/demo/index.html#

```

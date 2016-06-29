## Info

省市区三级联动 Vue 组件

省市区三级数据[官方](http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201504/t20150415_712722.html)

![](http://img.haimi.com/Fhsv7RjNE19YeeDXWysiUQZE14gP)

![](http://img.haimi.com/Fhhb5gQbD3qL1Ec39Y68SnEkaOzJ)

![](http://img.haimi.com/Fi-QZ9-Ju82GEeixftrONft61AK-)

## API

```js
    <prov-city :show.sync="show" :result.sync="result"></prov-city>
```

```show``` 显示隐藏组件

```result```  省市区数据

## Usage

```js
import Vue from 'vue'
import provCity from './src/provCity.vue'

new Vue({
    el: '#app',
    components: {
        provCity
    },
    data: {
        result: null,
        show: false
    }
})
```

```html
<prov-city :show.sync="show" :result.sync="result"></prov-city>
```
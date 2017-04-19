# LazyEvaluation
惰性求值原理和应用

## 一个简单的例子
**场景：**提取3个价格低于$10的宝石。
一般代码实现
```js
 var results = [];
    for (var i = 0; i < gems.length; ++i) {
        var value = gems[i].price;
        if (value < 10) {
            results.push(gems[i]);
            if (results.length === 3) {
                break;
            }
        }
    }
```
使用 lodash惰性求值方式实现
```js
function priceLt(x) {
        return function (item) {
            return item.price < x;
        };
    }
    var chosen = _(gems).filter(priceLt(10)).take(3).value();
    console.dir(chosen);
```
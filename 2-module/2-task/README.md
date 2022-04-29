# Определите, пуст ли объект

Создайте функцию isEmpty(obj), которая возвращает true, 
если в объекте нет свойств и false – если хоть одно свойство есть.

Работать должно так:
```js
function isEmpty(obj) {
  let arr = Object.values(obj);
  // return arr.length > 0 ? false : true;
  return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false
```

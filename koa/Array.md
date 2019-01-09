>## 数组去重
```
function dedupe(array) {
  return [...new Set(array)]
}
var arr = [1,2,2,3,3,4,4,5,5]
console.log(dedupe(arr))
```
>## slice深拷贝
  
```  var arr = [1,2,3,4,5]
var arr2 = arr.slice(0)
arr[2] = 5
console.log(arr)
console.log(arr2)
```
>## for循环深拷贝
 ```
 var arr = [1,2,3,4,5]
var arr2 = copyArr(arr)
function copyArr(arr) {
	let res = []
	for (let i = 0; i < arr.length; i++) {
	 res.push(arr[i])
	}
	return res
}
```
>## concat深拷贝
```
var arr = [1,2,3,4,5]
var arr2 = arr.concat()
arr[2] = 5
console.log(arr)
console.log(arr2)
```
>## 扩展运算符深拷贝
```
let [...copyArr] = arr
console.log(copyArr)
console.log(arr)
```

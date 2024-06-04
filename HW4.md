### **LV1&LV2**
#### 第一題：
```javascript
const rewrite = () => {
    const a = 1, b = 2, c = 3;
    console.log(`a是:${a} b是:${b} c是:${c}`);
}
rewrite();
```
#### 第二題：
```javascript
const print = input => {
    if(input === 0){
        console.log("零");
    }
    if(input > 0){
        console.log("正數");
    }
    if(input < 0){
        console.log("負數");
    }
}
/*測試*/
print(10);
print(-10);
print(0);
```
#### 第三題：
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @media screen and (min-width: 350px){
            p{
                color: blue;
            }
        }
        @media screen and (min-width: 1024px){
            p{
                color: red;
            }
        }
    </style>
</head>
<body>
    <p>我的網頁</p>
</body>
</html>
```
#### 第四題：
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .img{
            display:none;
        }
    </style>
</head>
<body>
    <img id="img" src="https://fakeimg.pl/150x130" class="img">
    <button id="show">顯示圖片</button>
    <button id="hide">隱藏圖片</button>
</body>
<script>
    document.getElementById('show').addEventListener('click',function(){
        document.getElementById('img').style.display = 'block';
    })
    document.getElementById('hide').addEventListener('click',function(){
        document.getElementById('img').style.display = 'none';
    })
</script>
</html>
```
#### 第五題：
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3 id="myw">我的網頁</h3>
    <button id="black">黑</button>
    <button id="blue">藍</button>
</body>
<script>
    document.getElementById("black").addEventListener("click",function(){
        document.getElementById("myw").style.color = "black";
    })
    document.getElementById("blue").addEventListener("click",function(){
        document.getElementById("myw").style.color = "blue";
    })
</script>
</html>
```
#### 第六題(1)：
```javascript
function printTree(treeHeight,treeGap){
    let tree = '';
    for(let i = 0; i < treeHeight; i++){
        const star = '*'.repeat(1 + (i * treeGap));
        tree += star + '\n'
    }
    return tree;
}
const treeHeight = 5;
const treeGap = 2;
console.log(printTree(treeHeight, treeGap));
```
#### 第六題(2)：
```javascript
function printTree(treeHeight,treeGap){
    let tree = '';
    for(let i = 0; i < treeHeight; i++){
        let stars = '*'.repeat(1 + (i * treeGap));
        let dashs = '-'.repeat((treeHeight-i-1)*(treeGap/2)); 
        tree += dashs + stars + dashs + '\n';
    }
    return tree
}
const treeHeight = 5;
const treeGap = 2;
console.log(printTree(treeHeight, treeGap));

const treeHeight1 = 6;
const treeGap1 = 2;
console.log(printTree(treeHeight1, treeGap1));

const treeHeight2 = 7;
const treeGap2 = 4;
console.log(printTree(treeHeight2, treeGap2));
```
### **LV3**
#### 第一題：
```javascript
const print = x =>{
    return x % 2 ===0 ? 'x是2的倍數' : 'x不是2的倍數' ;
}
/*測試*/
console.log(print(87));
console.log(print(98));
```
#### 第二題：
```javascript
const demo = (arr,index) => {
    arr.splice(index,1)
    return arr;
}
console.log(demo(['a','b','c'], 2) );
```
#### 第三題：
```javascript
const convert = input =>{
    const date = new Date(input);
    const year = date.getFullYear() - 1911;
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}/${month}/${day}`;
}

/*測試*/
console.log(convert("2024-05-23 00:00:00"));
```
#### 第四題：
```javascript
const fruits = {
    Banana: {
      num: "一串",
      price: "50"
    },
    Orange: {
      num: "五顆",
      price: "100"
    },
    Apple: {
      num: "3顆",
      price: "50"
    }
  };
Object.keys(fruits).forEach(item => {
    const { num, price } = fruits[item];
    console.log(`${item}是${num}${price}元`);
});
```
#### 第五題：
```javascript
for(let i = 1;i <= 9; i++){
    let arr = '';
    for(let j = 1; j<=9;j++){
        let x = i*j;
        let add0 = x.toString().padStart(2,0);
        arr += `${i} * ${j} = ${add0}  `;
    }
    console.log(arr);
}
```







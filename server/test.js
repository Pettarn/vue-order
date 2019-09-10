var str = 'asdf'
var abc = ['a', 'b', 'c']
str = str.split('')
str.shift()
abc = abc.shift()
console.log(typeof abc, str)
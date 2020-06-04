//Javascript Questions SET 4

//1. What will be the output when the following code is executed?
console.log(false == '0');
console.log(false === '0');
//#=> true false

//3. What will the following code output to the console:
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    },
};
var stolenSecretIdentity = hero.getSecretIdentity;
console.log(stolenSecretIdentity());
console.log(hero.getSecretIdentity());
//#=> undefined John Doe

//2. Consider the code snippet below. What will the console output? *
(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);
//#=> 1

//4. What will be the output of this code?
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl();
//#=> undefined

//5. What will this code print?
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
//#=> 0 1 2 3 4 <---  every number will print out one second apart from each other

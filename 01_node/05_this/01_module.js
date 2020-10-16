console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

this.digaOi = function(){
    console.log("OI !!")
}
module.exports.digaOi2 = function(){
    console.log("OI 22!!")
}
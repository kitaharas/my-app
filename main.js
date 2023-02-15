// const kitahara = {
//     this.a = a
// }

// function kitahara(a,b){
//     this.a = a;
//     this.b = b;
// }

// console.log(shoichi);
let a = 0;

const taro = {
    name : 'jiro',
    unko : function(aaa) {
        console.log(`${aaa}それは${this.name}`)
        console.log(this.name, arguments, a)
    }

}


taro.unko("tappuri")

// function toggleClass(){
//     document.querySelector('.anime-title').classList.toggle('active');
// }
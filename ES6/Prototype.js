// Two Major Use Cases of Prototype :-> 

// The first use case is to share some data across the different instances of object.

// The second use case is to implement inheritance.

// function User(name){
//     this.name = name;
//     // this.getDetail = function(){
//     //     console.log(this.name);
//     // }
// }

// let user1 = new User('Rishabh');
// let user2 = new User('Ritik');

// user1.getDetail();
// user2.getDetail();


//  Prototypical Inheritance => 

function Phone(){
    this.modelNumber = "";
    this.getModelNumber = function (){
        return this.modelNumber;
    }
}

function Samsung() {
    this.modelNumber = "XXX-YYY";
    this.latestFeature = function(){
        console.log(`Samsung has galaxy z foldable smartphone`);
    }
}

Samsung.prototype = new Phone();    // prototypical inheritance

let obj = new Samsung();
console.log(obj.getModelNumber());      // XXX-YYY
obj.latestFeature();
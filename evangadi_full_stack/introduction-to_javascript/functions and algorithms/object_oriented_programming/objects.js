






//   var o ={
//     name: "finifine",
//     belayneh: "a",
//     m3:9,
//     xx:function () {
//         console.log("abebe beso bela");
//     }
//   }
// // to find a specific element in the object in square brackets you must use qoutations to call your elements inside the object.
// console.log(o["name"])
// // or
// console.log(o.belayneh);

// // to access a function inside an object simply call the object name and . the function.

// o.xx();

let neba = {
    name: "nebiyu dawit",
    high_education_level: "assocaite degree",
    emplyoment_status: "unemployed",
    scored: function(num){
        let x = ""
        let y = num
        let z = ""
        sum = x + y + z
        if(num<=50){
            return 'you\'\r score is less try to score more next year'

        }else{
            return neba = sum("your score is :"+ " " + num + "very-good just continue") 
        }
    }
}

// now let's see how to callan ojects inside the object 
// and the difference bt [](square brackets) and dot . sign when calling an elements in the object.
let FiatCar = {
    name:"fiat",
    model: 500,
    weight: "850kg",
    color:"white",
    "number of times": 4,
       
      start:function(){
        return 'start my ' + this.name;
      },
      drive: function(){
        return 'drive my ' + this.name;
      },
      brake: function(){
        return 'brake my ' + this.name;
      },  
      stop:function(){
        return 'stop my ' + this.name;
      }

}

// when calling an object element which is named with more than one word its recommended to use square brackets to call the object element. for ex

// to call the object element number of times

// console.log(myFiatCar["number of times"]);
//  but if the object element word is singlewe can use both dot sign and squarebrakets. 

// console.log(myFiatCar.name);






// javascript object constracters
// are used to recreate objects which are similar to previously created one

let abeba = {
    firstName:"abeba",
    lastName:"Kebede",

    fullName:function(){
        return this.firstName + " " + this.lastName;
    }
};

// to recreate objects similar to prevoius but only their values defer first declare a function with its name starting with capital letter and pharameters that are similar in numbers to previous object variables you want to give values to. ex 
function Student(fn, ln){
    this.firstName = fn;
    this.lastName = ln;
}


// now create a variable with a new syntax followed by a previous object giver function  name used to create new variable and give any values you want .

const challa = new Student("Challa","Abebe")
// console.log(challa);

// constracters are used to recreate objects which are similar to previously created one they are used as templates


// another example is

function Car(carName, carModel, carWeight, carColor){
    this.name = carName,
    this.model = carModel,
    this.weight = carWeight,
    this.color = carColor;
    
    // adding a method/function for a constructor function.//
    
    this.start = function(){
        return "start my " + this.name; 

    }
    this.drive = function(){
        return 'start my ' + this.name; 
    }
    this.brake = function(){
        return 'brake my ' + this.name; 
    }
    this.stop = function() {
        return 'stop my ' + this.name; 


        
    }
    
}


let Tesla = new Car("Tesla", "tr-4566", "608kg", "gray")



function mycar(CarName, CarModel, CarCode, CarAi, CarWeight){

    this.name = CarName;
    this.model = CarModel;
    this.qrcode = CarCode;
    this.versionAi = CarAi;
    this.weight = CarWeight;
    // Events

    this.start = function(){
        return 'start my ' + this.name
    }
    this.drive = function(){
        return 'drive my ' + this.name
    }
    
    this.checkModel = function(){
        return 'check my model ' + this.model
    }
     
    this.checkWeight = function(){
        return 'check my weight ' + this.weight
    }
    
    this.checkVersion = function(){
        return 'check the version' + this.versionAi
    }
    
}

let Mercedes_benz = new mycar("Mercedes", "Futuristic", 9089, "open ai 90 autonomous", "600kg");


console.log(Mercedes_benz)
console.log(Mercedes_benz.start());

let BYD = new mycar("BYD", "ch-90", 9087, "open ai 90 autonomous", "900kg");

console.log(BYD)
console.log(BYD.start())


function Driver(cars, neba, mojulo,kick){
    this.car = cars;
    this.name = neba;
    this.mojule = mojulo;
    this.kickoff = kick ;

    
    this.start = function(){
        return ' this is my ' + this.name
    }
    this.walk = function(){
        return ' this is my ' + this.car
    }
}



function galory(a, b, c, d ){

    this.y = a;
    this.u = b;
    this.i = c;
    this.t = d;

     this.start = function(){
        return 'this is my ' + this.name
     }



}
let yu = new galory(mercedes, )






var example1 = "abebe"
console.log(example1.length);

// String.prototype.charAt()





function neba(Carcode, Carname, Carnumber, Cardesing){
    this.code = Carcode;
    this.name = Carname;
    this.number = Carnumber;
    this.design = Cardesing;
    
    
    this.code = () => 'this is my code' + this.code

    this.name = () => 'this is the name' + this.name

    this.number = () => 'this is the number ' + this.number

    this.designName = () => 'this is the design name' + this.design
}


let turkishStyle = new neba('90', 'mersedes', '8090', 'intel' )


let science = {
    physics: name,
}




let myFiatCar = {
    name : "fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    "number of renches": 780,

    start: function(){
       
    }
}



console.log(myFiatCar["number of renches"]);

console.log(myFiatCar.name)




class Human{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    work(){
        console.log("I am working");
    }
}

class Employee extends Human{
    constructor(empid){
        super();
        this.empid=empid;
    }

    printName(){
        console.log(this.name);
    }
     printempId(){
         console.log();
     }
}

const emp1 = new Employee("Vinod", 30);
emp1.work();
emp1.printName();
emp1.printempId
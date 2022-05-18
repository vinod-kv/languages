const i = 5; // Use const wherever possible, can't change the value 
let i = 5; //  local variable, Can change the value
var i = 5; // global variable, Avaoid, use when absolutely necessary

let a = []; // Array 
let b = {name:"vinod"}; // Object 

//Complex data modelling using array and objects

let users = [
    {
        name:"vinod",
        address : {first : "Vinod", last:"Kumar"},
        skills : [
            {
                frontend : ["React","React Native"]
            },
            {
                backend : ["node", "express", "prisma"]
            },
            {
                testautomation : ["web", "mobile", "API"]
            }
        ]
    },

    {},
    {}
]
//function 
function myfn(){
    return 5;
}





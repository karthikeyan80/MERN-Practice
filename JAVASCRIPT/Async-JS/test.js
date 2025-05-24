//------------------------CallBack Hell--------------


/* console.log("Start");
function getUserNameFromDB(name , callback){
    setTimeout(()=>{
        console.log("Getting User name...");
        callback(name);
    }, 2000)
}

function getUserHobbies(name , callback){
    setTimeout(()=>{
        console.log("Getting User Hobbies");
        hobbies = ["Reading" , "Sleeping", "anime"];
        callback(hobbies);
    }, 2000)
}

getUserNameFromDB("Tony" , (data)=>{
    console.log(data);
    getUserHobbies(data , (hobbies)=>{
        console.log(hobbies);
    })
})

console.log("End");
 */





//-------------------Promises-----------------------------
/* 
console.log("Start");

function getUserNameFromDB(name){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Getting User name...");
            resolve(name);
        }, 2000) 
    })
}

function getUserHobbies(name){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Getting User Hobbies");
            hobbies = ["Reading" , "Sleeping", "anime"];
            resolve(hobbies);
        }, 2000) 
    })
   
}


getUserNameFromDB("KARTHI")
.then((name)=>console.log(name))
.then((hobbies)=>getUserHobbies(hobbies))
.then((hobbies)=>console.log(hobbies))
.catch((error)=>console.log(` ${error} : no user found}`)) */









// ----------------------Async-await Functions--------------------

/* console.log("start");

function getUserDataFromDB(name){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(name)
            console.log(`valid name : ${name}` );
        }, 2000)
    })
}

function getUserHobbbies(hobbies){
    return new Promise((resolve) => {
        setTimeout(()=>{ 
            console.log(`Getting User Hobbies : ${hobbies}`);
            resolve(hobbies)
        },2000)
        
    })
}


async function User(){
    try{
    const data = await getUserDataFromDB("KARTHI");
    const hobbes = await getUserHobbbies(["eating", "playing"]);
    }
    catch(error){
        console.log(error);
    }
}

User() */

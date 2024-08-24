var userName = "Yash Gohel"
var age = 21

// @ts-ignore
module.exports = userName
module.exports = age


const displayUserData = (x)=>{

    console.log("user file....display funciton called...",x)
}

module.exports = {
    userName,age,displayUserData
}

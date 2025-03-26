const fs = require("fs");

// sign-in system
const userData = process.argv.slice(2);

if(userData.length === 4) {
    console.log("checking...")
    checkData(...userData);
}else {
    console.log("ERROR: invaild data, just pass the address, name, age, password");
}


function checkData(address, name, age, password) {
    for(let i = 0; i < userData.length; i++) {
        if(userData[i] === ""){
            console.log("ERROR: empty data, just pass the address, name, age, password");
            return 0;
        }
    }

    const data = JSON.parse(fs.readFileSync("./usersInformation.json", "utf8"));
    for (const userId in data) {
        if(data[userId].address === userData[0]) {
            console.log("WARNING: this address has already been registered!");
            return 0;
        }
    }

    console.log("no warnings! seting data...")
    setData(...userData);
}

function setData(address, name, age, password) { 
    const data = JSON.parse(fs.readFileSync("./usersInformation.json", "utf8"));

    let newUserId = `user${Object.keys(data).length += 1}`;

    data[newUserId] = {
        "address" : `${address}`,
        "name" : `${name}`,
        "age" : `${age}`,
        "password" : `${password}`
    };

    fs.writeFileSync('./usersInformation.json', JSON.stringify(data, null, 2))
    console.log('new user added successfuly! check the .json file.')
}




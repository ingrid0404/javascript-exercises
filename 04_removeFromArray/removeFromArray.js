const removeFromArray = function(init) {
    let newInit = init.map(x=>x);

    let itemsToRemove = [];
    
    for (let i = 1; i < arguments.length; i++) {
        itemsToRemove.push(arguments[i]);
    }
   
   let toReturn = newInit.filter(x => { return !itemsToRemove.includes(x)});
    
    return toReturn;
};

// Do not edit below this line
module.exports = removeFromArray;

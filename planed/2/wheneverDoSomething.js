
var count = 0;
var wheneverPattern = 0;

result.forEach(item=>{
    if (item._type.endsWith('Policy')){
        count ++;
        if(item.name.toLowerCase().startsWith("whenever ")) wheneverPattern ++;
    } 
});

returnValue(count == wheneverPattern);
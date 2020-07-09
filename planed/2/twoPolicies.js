var count = 0;

result.definition.forEach(item=>{
    if (item && item._type.endsWith('Policy')){
        count ++;
    } 
});

returnValue(count > 1);
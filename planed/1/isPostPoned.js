
var count = 0;
var postponed = 0;

result.definition.forEach(item=>{
    if (item && item._type=='org.uengine.modeling.model.Event'){
        count ++;
        if(item.name.endsWith("d") || item.name.endsWith("됨") || item.name.endsWith("함")) postponed++;
    } 
});

returnValue(count == postponed);
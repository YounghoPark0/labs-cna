var count = 0;

result.definition.forEach(item=>{
    if (item && item._type=='org.uengine.modeling.model.Event'){
        count ++;
    } 
});

returnValue(count > 2);
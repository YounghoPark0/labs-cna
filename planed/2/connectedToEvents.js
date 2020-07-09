
var count = 0;
var connected = 0;
var rightMatch = {
    "notify order":"OrderPlaced", 
    "send kakaotalk": "OrderPlaced, OrderCanceled",
    "send kakao talk": "OrderPlaced, OrderCanceled",
}

var policies = tool.modelForElements.Policy;

policies.forEach(item=>{
    count ++;
    if(item.relationEventInfo && item.relationEventInfo.length > 0 && item.relationEventInfo[0].eventValue) {
        var rightEvent = rightMatch[item.name.toLowerCase()];
        if(rightEvent.includes(item.relationEventInfo[0].eventValue.name))
            connected ++;
    }
});

returnValue(count == connected);
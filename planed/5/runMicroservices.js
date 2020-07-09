var lines = result.split("\n");
var answerPart = null;
var testCount = 0;
var passCount = 0;

for(var i=0; i<lines.length; i++){
    var line = lines[i];
    if(line.startsWith("####### test ")){
        answerPart = line.split(":")[1].trim();
        testCount++;
        continue;
    }

    if(answerPart && line.includes(answerPart)){
        passCount++;
        answerPart = null;
    }
}

returnValue(testCount == passCount)
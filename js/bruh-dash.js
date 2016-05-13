function validateArray(thisArray,dictionary,hideDisplay)
{  
  if(!thisArray instanceof Array)
  {
    consoleOut('Array was not passed',hideDisplay);
    return false;
  }

  if(dictionary && dictionary.min && thisArray.length< dictionary.min)
  {
    consoleOut('array length should be >= '+ dictionary.min,hideDisplay);
    return false;
  }

  consoleOut('Array is Ok',hideDisplay);
  return true;
}
function validateNumber(thisNumber,dictionary,hideDisplay)
{
    if(isNaN(parseInt(thisNumber)))
  {
    consoleOut(thisNumber + ' is not a number.',hideDisplay);
    return false;
  }

    if(dictionary && dictionary.min && thisNumber < dictionary.min)
  {
    consoleOut(thisNumber + ' should be >= '+ dictionary.min,hideDisplay);
    return false;
  }

    consoleOut(thisNumber + ' is Ok',hideDisplay);
  return true;
}

function consoleOut(message, hideDisplay)
{
  if(!hideDisplay)
  {
    console.log(message);
  }

}


var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array,number){

    number=(number==undefined)?1:number;

    validateArray(array,{min:20});
    validateNumber(number);

    var toArray=[];

    for(var i=0;i<array.length;i+=number)
    {
      toArray.push(array.slice(i,i+number));
    }

    return toArray;
  },

  compact: function(array) {
    var returnArray=[];

    return array.filter(function(element){return element;});

    /*
    for(var i=0;i<array.length;i++)
    {
      if(array[i])
      {
        console.log(array[i]);
        returnArray.push(array[i]);
      }
    }

    return returnArray;
    */
  },

  difference: function(arrayIn, arrayCompare) {

    return arrayIn.filter(function(element){return !(arrayCompare.indexOf(element) +1)});
    /*

    var returnArray=[];

    for(var i=0;i<arrayIn.length;i++)
    {
      if(arrayCompare.indexOf(arrayIn[i])===-1)
      {
          returnArray.push(arrayIn[i]);
      }
    }

    return returnArray;
    */
  },

  drop: function(array, number){
     // number=(number == undefined)?1:number;
      return array.slice((number == undefined)?1:number);
  },

  dropRight: function(array, number) {
      //console.log("number=" +number);
      return array.slice(0,array.length-((number == undefined)?1:number));
  },

  fill: function(array,value,start,end) {
    
    end=(end==undefined)?(end=array.length):(end);
    start=(start==undefined)?0:(start);

    for(var i=start;i<end;i++)
    {
      array[i]=value;
    }
  },

  first: function (array) {
      return array[0];
  },

  indexOf: function (array,value,start) {
    start=(start==undefined)?0:(start);
    var end=array.length;

    for(var i=start;i<end;i++)
    {
      if(array[i]==value)
      {
        return i;
      }
    }

    return -1;
  },

  initial: function (array) {
    return array.slice(0,array.length-1);
  },

  last: function (array) {
    return array[array.length-1];
  },

  lastIndexof: function (array,value,start) {
    start=(start==undefined)?array.length-1:start;

    start=(start<0)?(array.length+start):start;

    for(var i=start;i>-1;i--)
    {
      if(array[i]==value)
      {
        return i;
      }
    }

    return -1;
  },

  pull: function () {
    var numOfArgs=arguments.length;
    var toRemoveArray=[];

    console.log("args=" + numOfArgs);

    if(numOfArgs>1)
    {
      for(var i=1;i<numOfArgs;i++){
        if(toRemoveArray.indexOf(arguments[i])==-1)
        {
          toRemoveArray.push(arguments[i]);
        }
      }
    

  //  var searchArrayLength=array[0].length;

    arguments[0].filter(function(element){return !toRemoveArray.indexOf(element)});

    /*

    for(var i=0;i<arguments[0].length;i++)
    {
      if(toRemoveArray.indexOf(arguments[0][i])>-1)
      {
        arguments[0].splice(i,1);
        i--;
      }
    }

    return 1;
    */
}
   // return -1;
    
      
  },

  pullAt: function (searchArray,removeArray) {
    for(var i=0;i<searchArray.length;i++)
    {
      if(removeArray.indexOf(searchArray[i])>-1)
      {
        searchArray.splice(i,1);
        i--;
      }
    }

    return 1;
  },

  rest: function (array) {
    var returnArray=[];
    for(var i=0;i<array.length-1;i++)
    {
      returnArray.push(array[i]);
    }

    return returnArray;
  },

  slice: function (array,start,end) {
    var returnArray=[];

    for(var i=start;i<=end;i++)
    {
      returnArray.push(array[i]);
    }

    return returnArray;
  },

  take: function (array, takeTil) {
   return array.slice(0,takeTil);
  },

  takeRight: function (array, takeTil) {
    return array.slice(takeTil*-1);
  },

  zip: function () {
    var newArray=[];
    var numOfArgs=arguments.length;
    var longestArg=0;

    for(var i=0;i<numOfArgs;i++)
    {
      if(longestArg<arguments[i].length)
      {
        longestArg=arguments[i].length;
      }
    }

    for(var i=0;i<longestArg;i++)
    {
      newArray.push([]);
    }

   // var atIndex=0;
  for(var i=0;i<numOfArgs;i++)
    {
    for(var j=0;j<arguments[i].length;j++)
    {
        newArray[j].push(arguments[i][j]);
    }

     // atIndex++;
    }

    return newArray;
  },

  unzip: function (array) {
    var newArray=[];
    var numOfArgs=array.length;
    var longestArg=0;

    for(var i=0;i<numOfArgs;i++)
    {
      if(longestArg<array[i].length)
      {
        longestArg=array[i].length;
      }
    }

    for(var i=0;i<longestArg;i++)
    {
      newArray.push([]);
    }

   // var atIndex=0;
  for(var i=0;i<numOfArgs;i++)
    {
    for(var j=0;j<array[i].length;j++)
    {
        newArray[j].push(array[i][j]);
    }

     // atIndex++;
    }

    return newArray;
  },

  without: function() {
    var numOfArgs=arguments.length;
    var toRemoveArray=[];
    var newArray=[];

    console.log("args=" + numOfArgs);

    if(numOfArgs>1)
    {
      for(var i=1;i<numOfArgs;i++){
        if(toRemoveArray.indexOf(arguments[i])==-1)
        {
          toRemoveArray.push(arguments[i]);
        }
      }
      

    //  var searchArrayLength=array[0].length;

      for(var i=0;i<arguments[0].length;i++)
      {
        if(toRemoveArray.indexOf(arguments[0][i])==-1)
        {
          newArray.push(arguments[0][i]);
        }
      }

      return newArray;
  }
      return -1;
  }
};

console.log(bruhdash.chunk([1,2,3,4,5],2));
console.log("chunk use Default" + bruhdash.chunk([1,2,3,4,5]));

console.log("Compact " + bruhdash.compact([1,2,undefined,4,NaN,0,null,5]));

console.log("Difference "+ bruhdash.difference([1,2,3,4,5],[3,1,5,2]));
console.log("Drop "+ bruhdash.drop([1,2,3,4,5]));
console.log("Drop "+ bruhdash.drop([1,2,3,4,5],2));

console.log("DropRight" + bruhdash.dropRight([1,2,3,4,5],2));
console.log("fill" + bruhdash.fill([1,2,3,4,5],'*',1,3));

console.log("first" + bruhdash.first([1,2,3,4,5]));
console.log("first none"  + bruhdash.first([]));

console.log("index of"  + bruhdash.indexOf([1,2,3,4,5]));
console.log("initial"  + bruhdash.initial([1,2,3,4,5]));

console.log("last"  + bruhdash.last([1,2,3,4,5]));
console.log("lastIndexOf =="  + bruhdash.lastIndexof([1,2,3,4,3,5,6,7],3,5));

var dataArray=[1,2,3,4,3,5,6,7];
console.log("pull =="  + bruhdash.pull(dataArray,3,5));
console.log(dataArray);

dataArray=[1,2,3,4,3,5,6,7];
console.log("pullAt =="  + bruhdash.pullAt(dataArray,[3,5]));
console.log(dataArray);

dataArray=[1,2,3,4,3,5,6,7];
console.log("rest =="  + bruhdash.rest(dataArray));
console.log(dataArray);

dataArray=[1,2,3,4,3,5,6,7];
console.log("slice =="  + bruhdash.slice(dataArray,2,4));
console.log(dataArray);

dataArray=[1,2,3,4,3,5,6,7];
console.log("take =="  + bruhdash.take(dataArray,2));
console.log(dataArray);

dataArray=[1,2,3,4,3,5,6,7];
console.log("takeRight =="  + bruhdash.takeRight(dataArray,2));
console.log(dataArray);

var zipped=bruhdash.zip([1,2,3,4,5,6,7],[1,2,3,4,5],[2,1,3]);
console.log("zip =="  + zipped);

var unzipped=bruhdash.unzip(zipped);
console.log("unzip =="  + unzipped);

dataArray=[1,2,3,4,3,5,6,7];
var withoutResultArray=bruhdash.without(dataArray,3,5);
console.log("without =="  + withoutResultArray);
console.log("dataArray="+ dataArray);

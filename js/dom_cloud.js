window.onload = function(){
  //assign variable to div where cloud will be printed
  var container = document.getElementById("dom_cloud_container");
  //assign variable to html document node
  var theDoc = document.documentElement;
  //empty array to hold all elements and attributes
  var everythingArr = [];

  //recursive function to traverse DOM and push elements and attributes into empty array
  function traverseDOM(node) {
    everythingArr.push(node.nodeName);
    //base case (stop if current node has no childNodes)
    if (node.children.length === undefined){
      return;
    }
    //for elements
    for (var i = 0; i < node.children.length; i++) {
      traverseDOM(node.children[i]);
    }
    //for attributes
    for (var j = 0; j < node.attributes.length; j++) {
      everythingArr.push(node.attributes[j].name);
    }
  }
  //invoke recursive function with document node
  traverseDOM(theDoc);

  //create object to count number of elements and attributes
  var counterObj = {};
  for (var k = 0; k < everythingArr.length; k++) {
    var key = everythingArr[k];
    if (counterObj[key]){
      counterObj[key]++;
    }else{
      counterObj[key] = 1;
    }
  }

  //create array to store top 20 elements and attributes
  var sortedArr = [];
  //"convert" object into array
  for (var countKey in counterObj){
      sortedArr.push([countKey.toLowerCase(), counterObj[countKey]]);
  }
  //sort arrays in sortedArr from highest to lowest
  sortedArr.sort(function(a, b) {
    return b[1] - a[1];
    });
  //retrieve top 20 elements and attributes
  var topTwenty = sortedArr.slice(0,20);

  //insert elements and attributes into #dom_cloud_container
  for (var l = 0; l < topTwenty.length; l++) {
    //create div container for each element/attribute
    var cloudDiv = document.createElement("div");
    cloudDiv.className = "cloud";
    //set size and insert each elements/attributes w/o count into div
    cloudDiv.style.fontSize = topTwenty[l][1] * 0.10 + 'em';
    cloudDiv.innerHTML = topTwenty[l][0];
    //insert each div into #dom_cloud_container
    container.appendChild(cloudDiv);
  }
};

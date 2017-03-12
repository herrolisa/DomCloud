window.onload = function(){

  var container = document.getElementById("dom_cloud_container");

  // puts all tags in an array
  var allTags = document.getElementsByTagName("*");

  // declare empty array to store tags and attributes
  var tagsAndAttributes = [];

  for (var i = 0; i < allTags.length; i++) {
    tagsAndAttributes.push(allTags[i].nodeName); // pushes stringified tag name to new array
    if (allTags[i].attributes.length > 0){
      for (var j = 0; j < allTags[i].attributes.length; j++) {
        tagsAndAttributes.push(allTags[i].attributes[j].name); // pushes attributes into new array
      }
    }
  }

  var countObj = tagsAndAttributes.reduce(function(prev, curr, inx, arr){
    if (prev[curr]){
      prev[curr]++;
    }else{
      prev[curr] = 1;
    }
    return prev;
  }, {});
  console.log(countObj);

  var sortable = [];
  for (var key in countObj){
      sortable.push([key, countObj[key]]);
  }
  sortable.sort(function(a, b) {
    return b[1] - a[1];
    });
  var topTwenty = sortable.slice(0,20);
  console.log(topTwenty);
  container.innerHTML  = topTwenty;
};

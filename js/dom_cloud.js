window.onload = function(){
  //assign variable to div where cloud will be printed
  var container = document.getElementById("dom_cloud_container");
  //assign variable to html document node
  var theDoc = document.documentElement;
  //empty array to hold all elements and attributes
  var everythingArr = [];

  //test to display child node elements and attributes
  var docFile = document.head;
  console.log(document.getElementsByTagName("head"));
  console.log(docFile); //return node requested (and html code)
  console.log(docFile.nodeName); //.nodeName --- return string name of node (element name)
  console.log(docFile.children.length); //.children.length --- return # of children in node
  console.log(docFile.children[0]); //[i] --- return childNodes requested (and html code)
  console.log(docFile.children[0].nodeName); //.nodeName --- return string name of first child
  console.log(docFile.children[1].nodeName);
  console.log(docFile.children[2].nodeName);
  console.log(docFile.children[0].attributes.length); //.attributes.length --- returns whether child has any attributes (if length !== undefined)
  console.log(docFile.children[0].attributes[0].name); //attributes[0].name --- return attribute name of children
  console.log(docFile.children[1].attributes[0].name);
  console.log(docFile.children[1].attributes[1].name);
  console.log(docFile.children[1].attributes[2].name);

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

  traverseDOM(theDoc);
  console.log(everythingArr);
};

// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
]; 

window.onload = function () {
    var listContainer = document.querySelector("#outputList1");
    var myListString = "<ol>";

    for (var i = 0; i < fruits.length; i++) {
        myListString += "<li>" + fruits[i] + "</li>"
    }

    myListString += "</ol>";

    listContainer.innerHTML = myListString;


    var listContainer2 = document.querySelector("#outputList2");
    var myListString2 = "<ul>";

    for (var i = 0; i < directory.length; i++) {
        if (directory[i].type == "file")
            myListString2 += "<li>" + directory[i].name + "</li>";
        else {
            myListString2 += "<li>" + directory[i].name + "<ul>";
            for (var j = 0; j < directory[i].files.length; j++)
                myListString2 += "<li>" + directory[i].files[j].name + "</li>";
            myListString2 += "</ul>" + "</li>";
        }
    }

    myListString2 += "</ul>";

    listContainer2.innerHTML = myListString2;
};

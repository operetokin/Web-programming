var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function () {
    loadTableWithFilters();
};

function loadTableWithFilters() {

    var tableContainer = document.querySelector("#main-table-body");

    tableContainer.innerHTML = "";
  
    for (var i = 0; i < petData.length; i++) {

        if ( filterType == petData[i].type && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) {

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            tr.appendChild(td1);
            tr.appendChild(td2);

            var img = document.createElement("img");

            img.setAttribute("src", petData[i].image.src);
            img.setAttribute("alt", petData[i].image.alt);
            img.setAttribute("width", petData[i].image.width);
            img.setAttribute("height", petData[i].image.height);

            td1.appendChild(img);

            var h4 = document.createElement("h4");
            var h4Text = document.createTextNode(petData[i].name);
            h4.appendChild(h4Text);

            td2.appendChild(h4);

            var p = document.createElement("p");
            p.innerHTML = petData[i].description;

            td2.appendChild(p);

            var span = document.createElement("span");
            var span_no = document.createTextNode ("Age: " + petData[i].age + " years old.");
            span.appendChild(span_no);
            td2.appendChild(span);

            tableContainer.appendChild(tr);
        }

       else if (filterType == "" && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) {

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            tr.appendChild(td1);
            tr.appendChild(td2);

            var img = document.createElement("img");

            img.setAttribute("src", petData[i].image.src);
            img.setAttribute("alt", petData[i].image.alt);
            img.setAttribute("width", petData[i].image.width);
            img.setAttribute("height", petData[i].image.height);

            td1.appendChild(img);

            var h4 = document.createElement("h4");
            var h4Text = document.createTextNode(petData[i].name);
            h4.appendChild(h4Text);

            td2.appendChild(h4);

            var p = document.createElement("p");
            p.innerHTML = petData[i].description;

            td2.appendChild(p);

            var span = document.createElement("span");
            var span_no = document.createTextNode ("Age: " + petData[i].age + " years old.");
            span.appendChild(span_no);
            td2.appendChild(span);

            tableContainer.appendChild(tr);
        }
    }
  
}

var filterDog = function () {
    filterType = 'dog';
    
    loadTableWithFilters();
    //
};

var filterCat = function () {
    filterType = 'cat';
    
    loadTableWithFilters();

    //
};

var filterBird = function () {
    filterType = 'bird';
    
    loadTableWithFilters();

    //
};

var filter_zero_1 = function () {
    
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
    //
};

var filter_1_3 = function () {
    
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
    //
};

var filter_4_plus = function () {
   
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
    //
};

var filterAllPets = function () {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
    //
};


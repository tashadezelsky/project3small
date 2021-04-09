console.log("Please work");

var Airtable = require("airtable");
console.log(Airtable);

var base = new Airtable({ apiKey: 'keyHlLjNPepQaUXmp'}).base('appaAFtNuU8ZmHaV8');

base('dynamic').select({}).eachPage(gotPageOfMermaids, gotAllMermaids);
    // This function (`page`) will get called for each page of records.

const mermaids = [];

function gotPageOfMermaids(records, fetchNextPage) {
    console.log("gotPageOfMermaids()");
    mermaids.push(...records);
    fetchNextPage();
}

function gotAllMermaids(err) {
    console.log("gotAllMermaids()");

    if (err) {
        console.log("error loading faces");
        console.error(err);
        return;
       }

consoleLogMermaids();
showMermaids();
}

function consoleLogMermaids() {
    console.log("consoleLogMermaids()");
    mermaids.forEach((mermaid) => {
    console.log("Mermaid:", mermaid);
});
}

function showMermaids() {
    console.log("showMermaids()");
    mermaids.forEach((mermaid) => {

        //var pictureTitle = document.createElement("h3");
        //pictureTitle.innerText = mermaid.fields.title;
        //document.body.append(pictureTitle);

        //new div where the container for the images will go
        var galleryContainer = document.createElement("div");
        galleryContainer.classList.add("gallery-container");
        document.querySelector(".container").append(galleryContainer);

        var imageDesc = document.createElement("h4");
        imageDesc.classList.add=("desc");
        imageDesc.innerText = mermaid.fields.description;
        galleryContainer.append(imageDesc);

        var imageTitle = document.createElement("h1");
        imageTitle.classList.add=("image-title");
        imageTitle.innerText = mermaid.fields.title;
        galleryContainer.append(imageTitle);

        //add the picture 
        //var galleryImage = document.createElement("img");
        //galleryImage.classList.add("image-container");
        //galleryImage.src = mermaid.fields.cursor[0].url;
        //galleryContainer.append(galleryImage);

        //var imageCursor = document.createElement("img");
        //imageCursor.classList.add("image-cursor");
        //document.querySelector(".cursor1").append(imageCursor);

        //var imageBg = document.createElement("img");
        //imageBg.classList.add("bgimage-container");
        //imageBg.classList.src = mermaid.fields.cursor[0].url;
        //imageCursor.append(imageBG);

        //get genre field through airtable
        //loop through the array and add genreas
        // a class to the song container

        //var imageNumber = mermaid.fields.number;
        //imageNumber.forEach(function(number) {
            //galleryContainer.classList.add(number);
        //})

        //addevent listener to filter to our filter
        // to add an active class to our images

        //var filterI = document.querySelector('.I');
        //filterI.addEventListener("click", function(){

            //(galleryConatiner.classList.contains("I")) {
                //galleryContainer.classList.toggle("active");
        //})
    })
};

// This tool is set to work on this webpage as of Oct. 7th 2021

// - Load the https://bookaudio.online/651-dune.html
// - Right click anywhere on the page
// - Select inspect element
// - Slect console tab
// - Paste the code below into the console:

let trackListElements = document.getElementsByClassName("track");
let urls = [];
for (trackListElement in trackListElements) {
  console.log(trackListElement, " <= trackListElement")
  if (trackListElement !== "length" && trackListElement !== "item") {
    urls.push(trackListElements[trackListElement].getAttribute("data-url"));
  }
}

// - You might get an error message, but it doesn't matter
// - Type this into the console:

urls

// - Right click the big list of URLS
// - Select _Copy Object_
// - Import this copy into the download_script.rb file

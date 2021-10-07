let trackListElements = document.getElementsByClassName("track");
let urls = [];
for (trackListElement in trackListElements) {
  console.log(trackListElement, " <= trackListElement")
  if (trackListElement !== "length" && trackListElement !== "item") {
    urls.push(trackListElements[trackListElement].getAttribute("data-url"));
  }
}

// - You should get an error message, it doesn't matter
// - Type this into the console:

urls

// - Right click the big list of URLS
// - Select _Copy Object_
// - Import this copy into the download_script.rb file

# The Standard Download Files Tool

Before you get started, ensure you have [Ruby](https://www.ruby-lang.org/en/) downloaded and installed on your computer.

## Getting Started

- Open the Terminal application
- Navigate to Desktop with this command
  - `cd ~/Desktop`
- Clone this repository with this command
  - `git clone https://github.com/iarobinson/the_standard_download_files_tool`
- Change directories into this file with this command
  - `cd the_standard_download_files_tool`

If you want to use the media URLs for Dune by Frank Herbert _and_ the URLS here are still valid (they are valid as of Oct. 7th, 2021) you can run the following script:
`ruby download_script.rb`

Be patient, there is no loading graphic here.

The files should start populating in this folder.

If you want to use a different collection of URLs, follow the instructions in How to Get an Array of URLS using JavaScript.

## How to Get an Array of URLS using JavaScript

This tool is set to work on this webpage as of Oct. 7th 2021

- Load the https://bookaudio.online/651-dune.html
- Right click anywhere on the page
- Select inspect element
- Slect console tab
- Paste the code that you see in `getURLS.js` into the console:
- Finally, type in `urls` and you will get an array of URL strings
- Right click on this big list of URLS that result and click `copy`
- Paste that into the `download_script.rb` so the list of URLS is an array of strings
- Follow instructions in getURLS.js

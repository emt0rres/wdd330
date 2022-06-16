const myNotesLinks = [
  {
    label: "Week 01",
    url: "../portfolio/notes/week01/index.html",
  },
  {
    label: "Week 02",
    url: "../portfolio/notes/week02/index.html",
  },
  {
    label: "Week 03",
    url: "../portfolio/notes/week03/index.html",
  },
  {
    label: "Week 04",
    url: "../portfolio/notes/week04/index.html",
  },
  {
    label: "Week 05",
    url: "../portfolio/notes/week05/index.html",
  },
  {
    label: "Week 06",
    url: "../portfolio/notes/week06/index.html",
  },
  {
    label: "Week 07",
    url: "../portfolio/notes/week07/index.html",
  },
  {
    label: "Week 08",
    url: "../portfolio/notes/week08/index.html",
  },
  {
    label: "Week 09",
    url: "../portfolio/notes/week09/index.html",
  },
  {
    label: "Week 10",
    url: "../portfolio/notes/week10/index.html",
  },
  {
    label: "Week 11",
    url: "../portfolio/notes/week11/index.html",
  },
  {
    label: "Week 12",
    url: "../portfolio/notes/week12/index.html",
  },
];

// HTML id: notes-list
let myUnorderedNotesList = document.querySelector("#notes-list");

for (let i = 0; i < myNotesLinks.length; i++) {
  // Create Elements
  let anchorElement = document.createElement("a");
  let listElement = document.createElement("li");

  // The textContent property sets or returns the text content of the specified node, and all its descendants. - w3schools
  anchorElement.textContent = myNotesLinks[i].label;

  // Set Attribute
  anchorElement.setAttribute("href", myNotesLinks[i].url);

  // Append Elements
  listElement.appendChild(anchorElement);
  myUnorderedNotesList.appendChild(listElement);
}
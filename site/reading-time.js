"use strict";
document.getElementById("reading-time").addEventListener("submit", function(event) {
 event.preventDefault();
 const words = Number(document.getElementById("word-count").value);
 const pace = Number(document.getElementById("reading-pace").value);
 const out = document.getElementById("reading-result");
 if (!Number.isFinite(words) || !Number.isFinite(pace) || words <= 0 || pace <= 0 || words > 100000000 || pace > 2000) {out.textContent = "Enter a positive word count and pace within the stated limits."; return;}
 const mins = words / pace;
 const rounded = Math.ceil(mins);
 const hours = Math.floor(rounded / 60);
 out.textContent = "Estimated reading time: " + (hours ? hours + (hours === 1 ? " hour " : " hours ") + (rounded % 60) + " minutes" : rounded + " minutes") + ". Rounded up to the next minute; pauses are not included.";
});

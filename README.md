# 12-Column-Grid-PS-CS6
12-column grid system and text example for Photoshop CS6

How to do it?
1) First, open a 1440x1024 px page in Photoshop.
2) Go back to the PC interface and open a new txt file
3) Paste the following text into
4) Save the txt text
5) change the text format from .txt to .jsx
6) Then go back to the page you opened in Photoshop
7) Click on "File" in the top left, then click on "Scripts" at the bottom, then select "Browse"
8) Click on the jsx file we made
9) Now you have a 12 column grid, congratulations 🎉

Text:

// === Photoshop CS6 12 Column Grid (1440x1024) ===
var doc = app.documents.add(1440, 1024, 72, "1440x1024_12col_Grid");

// Margins
var leftMargin = 80;
var rightMargin = 80;
var gutter = 20;
var columns = 12;

var contentWidth = 1440 - leftMargin - rightMargin;
var totalGutterWidth = (columns - 1) * gutter;
var columnWidth = (contentWidth - totalGutterWidth) / columns;


app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(leftMargin, "px"));
app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(1440 - rightMargin, "px"));


var x = leftMargin;
for (var i = 0; i < columns - 1; i++) {
    x += columnWidth;
    app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(x, "px"));
    x += gutter;
    app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(x, "px"));
}


app.activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(0, "px"));
app.activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(1024, "px"));

alert("1440x1024 px, 12 colomn successfully created !");

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

// Sol ve sağ kenar rehberleri
app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(leftMargin, "px"));
app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(1440 - rightMargin, "px"));

// Kolon rehberlerini oluştur
var x = leftMargin;
for (var i = 0; i < columns - 1; i++) {
    x += columnWidth;
    app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(x, "px"));
    x += gutter;
    app.activeDocument.guides.add(Direction.VERTICAL, new UnitValue(x, "px"));
}

// Üst ve alt yatay rehberler (isteğe bağlı)
app.activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(0, "px"));
app.activeDocument.guides.add(Direction.HORIZONTAL, new UnitValue(1024, "px"));

alert("1440x1024 px, 12 kolon grid başarıyla oluşturuldu!");

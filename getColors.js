const fs = require("fs");
const unzip = require("unzip");
const fstream = require("fstream");

var readStream = fs.createReadStream("./colors_b2c.sketch");
if (!fs.existsSync("./tmp/")) {
  fs.mkdirSync("./tmp/");
}
var writeStream = fstream.Writer("./tmp/");
readStream
  .pipe(unzip.Parse())
  .pipe(writeStream);
readStream.on("end", function() {
  console.info("lalalala");


  const sketchJsonFile = fs.readFileSync("./tmp/document.json", "utf8");
  const colorFile = fs.readFileSync("./src/lib/color.json", "utf8");
  const sketchObject = JSON.parse(sketchJsonFile);
  const colorObject = JSON.parse(colorFile);
  const colors = {};
  sketchObject["layerStyles"]["objects"].forEach((item) => {
    const color = item.value.fills[0].color;
    let { blue, green, red, alpha } = color;
    blue = Math.ceil(blue * 255);
    green = Math.ceil(green * 255);
    red = Math.ceil(red * 255);
    let colorHex;
    if (alpha === 1) {
      colorHex = [red.toString(16), blue.toString(16), green.toString(16)];
    } else {
      colorHex = [red.toString(16), blue.toString(16), green.toString(16), (Math.ceil(alpha * 255)).toString(16)];
    }
    colorHex.forEach((color, index) => {
      if (color.length === 1) {
        colorHex[index] = "0" + color;
        ;
      }
    });
    colorHex = "#" + colorHex.join("");
    let name = item.name;
    if (name.search("/") > 0) {
      name = name.split("/")[1].trim().replace(/_/g, " ").toLowerCase();
    }
  });
// console.log('____')
// console.log(colorObject)
  Object.keys(colorObject).map((key) => {
    console.info("-->>> ", colorObject[key]);
    if (colors[colorObject[key]]) {
      console.info("###", colors[colorObject[key].toUpperCase()]);
    }
  });
  var removeDirectory = function(path) {
    if (fs.existsSync(path)) {

      if (fs.lstatSync(path).isDirectory()) {
        var dir = fs.readdirSync(path);
        if (dir.length > 0) {
          dir.forEach((item) => {
            console.info("dir", dir);
            if (item)
              var newPath = [path, item].join("/");
            if (newPath) {
              removeDirectory([path, item].join("/"));
              console.info("1", path);
            }
          });
          setTimeout(function() {
            removeDirectory(path);
          },1000)

        } else {
          fs.rmdirSync(path);
        }
      } else {
        if (fs.existsSync(path)) {
          fs.unlinkSync(path);
        }
      }
    }
  };
  setTimeout(function() {
    removeDirectory("./tmp");
  }, 3000);
  // fs.unlinkSync("./tmp");
});

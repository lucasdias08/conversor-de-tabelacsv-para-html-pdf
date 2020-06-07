var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PdfWriter = require("./PdfWriter")

var myReader = new Reader();
var myWriter = new Writer();
 
async function main(){
    var data = await myReader.readerFile("./users.csv");
    console.log(data);

    var dataProcessor = Processor.process(data);
    console.log(dataProcessor);

    var table = new Table(dataProcessor);
    console.log(table.header);
    console.log("linhas: " +table.rowCount);
    console.log("linhas: " +table.colCount);

    var html = await HtmlParser.parse(table);
    console.log(html);

    myWriter.write(Date.now() + ".html", html);
    console.log("html criado na raíz da página!");

    PdfWriter.writePdf(Date.now() + ".pdf", html);
    console.log("PDF criado e savo na pasta raíz, a partir do HTML gerado");
}

main();

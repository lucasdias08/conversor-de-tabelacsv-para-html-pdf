const pdf = require("html-pdf");

class PdfWriter{
    static writePdf(fileName, html){
        pdf.create(html,{}).toFile(fileName)
    }
}

module.exports = PdfWriter;
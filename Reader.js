const fs = require("fs");
const util = require("util");

class Reader{

    constructor(){
        this.read = util.promisify(fs.readFile);  //parâmetro do promisify é a função que se tornará uma Promise
    }

    async readerFile(filePath){

        try{
            return await this.read(filePath, "utf-8");
        } catch (err) {
            return undefined;
        }
        
    };
}


module.exports = Reader;
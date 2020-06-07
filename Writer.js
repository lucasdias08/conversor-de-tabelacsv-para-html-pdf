const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async write(fileName, data){
        try{
            await this.writer(fileName, data);
            return true;
        } catch(err){
            console.log("Erro ao escrever arquivo .html: ");
            console.log(err);
            return false;
        }

    }
}

module.exports = Writer;
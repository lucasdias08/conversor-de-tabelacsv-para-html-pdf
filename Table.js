class Table{
    
    constructor(arr){
        this.header = arr[0];
        arr.shift();  // remove o primeiro elemento
        this.rows = arr;
    }

    get rowCount(){
        return this.rows.length;
    }

    get colCount(){
        return this.header.length;
    }

}

module.exports = Table;
class Processor{

    static process(data){
        var a = data.split("\r\n"); //identifica a quebra de linha
        var rows = []; // linhas serão colocadas aqui

        a.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        console.log(rows);
        return rows;
    }

}

module.exports = Processor;
const csv = require('csv-parser')
const fs = require('fs')

module.exports = {
    async get(req, res){
        try{

            const results = [];
            fs.createReadStream(`${__dirname}/teste.csv`)
                .setEncoding('latin1')
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    let textTranform = []
                    results.map(result=>{
                        if (Object.keys(result).length != 0){
                            let text = result[Object.keys(result)[0]]
                            textTranform.push(text.split('\";\"'))
                        }
                    })
                    let result =[]
                    for(let i=1; i<=1170; i++){
                        let objInfo = {}
                        for(let j=0; j <= 18; j++){
                            let texto = textTranform[0][j]
                              .replace(" ", "")
                              .replace("ã", "a")
                              .replace("ú", "u")
                              .replace("ç", "c")
                              .replace("ô", "o")
                              .replace(" ", "");
                                if (
                                  textTranform[i][j] == undefined ||
                                  textTranform[i][j] == null ||
                                  textTranform[i][j].length == 0 ||
                                  textTranform[i][j]== false
                                ) {
                                  textTranform[i][j] = "";
                                }
                                  objInfo[texto] = textTranform[i][j];
                        }
                        result.push(objInfo);
                    }

                    res.status(200).send(result)
            });
        }catch(msg){
            res.status(400).send(msg)
        }
    },

    async save(req, res){
        try{
            res.status(200)
        }
        catch(msg){
            return res.status(400).send(msg)
        }
    }
}
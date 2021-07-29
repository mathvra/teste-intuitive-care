const csv = require('csv-parser')
const fs = require('fs')

module.exports = {
    async get(req, res){
        try{

            const results = [];
            fs.createReadStream(`${__dirname}/teste.csv`)
                .setEncoding('utf8')
                .pipe(csv())
                .on('data', (data) => results.push(data))
                .on('end', () => {
                    let textTranform = []
                    results.map(result=>{
                        if (Object.keys(result).length != 0){
                            let text = result[Object.keys(result)[0]]
                            textTranform.push(text.split("\";\""))
                        }
                    })
                    console.log(`${textTranform[0][0]}:${textTranform[1][0]}`);
                    console.log(`${textTranform[0][1]}:${textTranform[1][1]}`);
                    console.log(`${textTranform[0][2]}:${textTranform[1][2]}`);
                    console.log(`${textTranform[0][3]}:${textTranform[1][3]}`);
                    console.log(`${textTranform[0][4]}:${textTranform[1][4]}`);
                    res.status(200).send(textTranform)
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
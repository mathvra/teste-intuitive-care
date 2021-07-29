import csv from 'csvtojson'

export default async function manipulateData(){
    // await fs.readFile("@/data/Relatorio_cadop.csv", "utf8", (err,data)=>{
    //     console.log(data)
    // })

    console.log("Gésio")
    const data = await csv().fromFile(`${__dirname}/Relatorio_cadop.csv`)
    console.log('Gésio pegou')

    return data
}
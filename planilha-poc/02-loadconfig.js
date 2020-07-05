const { GoogleSpreadsheet} = require ("google-spreadsheet");
const credentials = require("./creditials.json");


const doc = new GoogleSpreadsheet("1q1_LXvhEEsjjWg1zVxzD3CM1WZ2R9LN_4DKLU2mln7E");

const run = async() => {
    try{
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        

        const sheet = doc.sheetsByIndex[2];
        await sheet.loadCells('A2:B2');
        const mostraPromocaoCell = sheet.getCell(1, 0);
        console.log(mostraPromocaoCell.value);

        const textoCell = sheet.getCell(1,1);
        console.log(textoCell.value);
    } catch(err) {
        console.log(err);
    }
};

run()
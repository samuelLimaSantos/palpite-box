const { GoogleSpreadsheet} = require ("google-spreadsheet");
const credentials = require("./creditials.json");


const doc = new GoogleSpreadsheet("1q1_LXvhEEsjjWg1zVxzD3CM1WZ2R9LN_4DKLU2mln7E");

const run = async() => {
    try{
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[1];
        // Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome: "Samuel Santos",
            Email: "samuellima280499@gmail.com",
            Whatsapp: "81 995773117",
            Cupom: "aaa111",
            Promo: "asfasfsaf"
        });

    } catch(err) {
        console.log(err);
    }
};

run()
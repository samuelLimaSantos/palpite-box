const { GoogleSpreadsheet} = require ("google-spreadsheet");
const credentials = require("./creditials.json");


const doc = new GoogleSpreadsheet("1q1_LXvhEEsjjWg1zVxzD3CM1WZ2R9LN_4DKLU2mln7E");

const run = async() => {
    try{
        await doc.useServiceAccountAuth(credentials);
        await doc.loadInfo();
        console.log(doc);

    } catch(err) {
        console.log(err);
    }
};

run()
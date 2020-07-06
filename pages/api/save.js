import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../creditials.json";
import moment from "moment";

const doc = new GoogleSpreadsheet(
  "1q1_LXvhEEsjjWg1zVxzD3CM1WZ2R9LN_4DKLU2mln7E"
);

const genCupom = () => {
  const code = parseInt(moment().format("YYMMDDHHmmssSSS"))
    .toString(16)
    .toUpperCase();
  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};

export default async (request, response) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(request.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A2:B2");

    const mostraPromocaoCell = sheetConfig.getCell(1, 0);
    const textoCell = sheetConfig.getCell(1, 1);

    let Cupom = "";
    let Promo = "";

    if (mostraPromocaoCell.value === "VERDADEIRO") {
      // todo: GERAR CUPOM
      Cupom = genCupom();
      Promo = textoCell.value;
    }
    // Nome	Email	Whatsapp	Cupom	Promo
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      "Data Preenchimento": moment().format("DD/MM/YYYY, HH:mm:ss"),
      Cupom,
      Promo,
    });
    response.end(
      JSON.stringify({
        showCoupon: Cupom !== "",
        Cupom,
        Promo,
      })
    );
  } catch (err) {
    response.end("Error");
  }
};

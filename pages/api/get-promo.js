import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const fromBase64 = (value) => {
  const buff = new Buffer(value, "base64");
  return buff.toString("ascii");
};

export default async (request, response) => {
  try {
    // await doc.useServiceAccountAuth(credentials);
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells("A2:B2");

    const mostraPromocaoCell = sheet.getCell(1, 0);
    const textoCell = sheet.getCell(1, 1);

    response.end(
      JSON.stringify({
        showCoupon: mostraPromocaoCell.value === "VERDADEIRO",
        message: textoCell.value,
      })
    );
  } catch (err) {
    response.end(
      JSON.stringify({
        showCoupon: false,
        message: "",
      })
    );
  }
};

import { GoogleSpreadsheet } from "google-spreadsheet";
import credentials from "../../creditials.json";

const doc = new GoogleSpreadsheet(
  "1q1_LXvhEEsjjWg1zVxzD3CM1WZ2R9LN_4DKLU2mln7E"
);

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

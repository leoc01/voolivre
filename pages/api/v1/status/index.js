import database from "../../../../infra/database.js";

async function Status(request, response) {
  const result = await database.query("SELECT 5+2+1 as pimba;");
  console.log(result.rows);
  response.status(200).json({ chave: "são acima da média!" });
}

export default Status;

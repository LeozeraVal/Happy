const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2312077",
    lng: "-49.6575264",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "595847",
    images: [
      "https://images.unsplash.com/photo-1602460289499-ead2d092db21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "https://images.unsplash.com/photo-1601399010637-e688bfa299ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //consultar somente 1 orphanato, pelo ID
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  //console.log(orphanage);

  // deletar dado da tabela
  //console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'));
});

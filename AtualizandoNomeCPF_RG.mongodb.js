const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1'

use(database);

db[collection].updateOne(
    {cod_aluno:"3"},
    {$set:{nome:"Maria Milena Andes",cpf:"147.258.369-01",rg:"12.345.678-9"}
    }
)
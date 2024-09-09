const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1'

use(database);

db[collection].find(
    {"cpf":"866.214.521-85"},
    {"cod_aluno":0}
);
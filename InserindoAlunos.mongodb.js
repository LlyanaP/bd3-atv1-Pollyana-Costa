const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1'

use(database);

db[collection].insertMany(
    [
        {
            "cod_aluno":"1",
            "nome":"Maria Joaquina Meneses",
            "cpf":"258.456.258-52",
            "rg":"25.322.211-8",
            "telefone_aluno":"(11)25482-2254",
            "telefone_responsavel":"(11)58655-2856",
            "email":"joaquinamaria588@gmail.com",
            "data_nascimento":"12/02/2005"
        },
        {
          "cod_aluno":"2",
            "nome":"Josue Manuel Ramos",
            "cpf":"582.145.585-52",
            "rg":"25.752.124-5",
            "telefone_aluno":"(11)14789-1456",
            "telefone_responsavel":"(11)74158-7458",
            "email":"josueramos888@gmail.com",
            "data_nascimento":"01/01/2006"  
        },
        {
            "cod_aluno":"3",
            "nome":"Maria Luiza Lapa",
            "cpf":"465.751.125-85",
            "rg":"36.852.145-9",
            "telefone_aluno":"(11)25482-2254",
            "telefone_responsavel":"(11)58655-2856",
            "email":"joaquinamaria588@gmail.com",
            "data_nascimento":"12/02/2005"
        },
        {
            "cod_aluno":"4",
            "nome":"Hanna Leão Gusman",
            "cpf":"458.256.124-22",
            "rg":"27.421.754-1",
            "telefone_aluno":"(11)45713-1236",
            "telefone_responsavel":"(11)58124-1245",
            "email":"hanna08gusman@gmail.com",
            "data_nascimento":"05/05/2006"
        },
        {
            "cod_aluno":"5",
            "nome":"Samuel Bezerra Cabral",
            "cpf":"256.487.513-55",
            "rg":"48.324.485-7",
            "telefone_aluno":"(11)51853-2454",
            "telefone_responsavel":"(11)23654-5622",
            "email":"bezerracabrasamuel@gmail.com",
            "data_nascimento":"25/12/2005"
        },
        {
            "cod_aluno":"6",
            "nome":"Helela Amara Nativi",
            "cpf":"165.255.422-64",
            "rg":"58.135.254-6",
            "telefone_aluno":"(11)45821-3654",
            "telefone_responsavel":"(11)36512-1254",
            "email":"amaranativi25@gmail.com",
            "data_nascimento":"08/09/2006"
        },
        {
            "cod_aluno":"7",
            "nome":"Valentina Mirah Beatah",
            "cpf":"866.214.521-85",
            "rg":"36.856.487-2",
            "telefone_aluno":"(11)56584-2315",
            "telefone_responsavel":"(11)32564-8456",
            "email":"valentinamirahbheata@gmail.com",
            "data_nascimento":"04/06/2005"
        },
        {
            "cod_aluno":"8",
            "nome":"Enzo Gabriel Tomazo",
            "cpf":"562.148.023-08",
            "rg":"54.265.820-0",
            "telefone_aluno":"(11)58642-8546",
            "telefone_responsavel":"(11)32564-2856",
            "email":"tomazogabriel@gmail.com",
            "data_nascimento":"12/02/2006"
        },
        {
            "cod_aluno":"9",
            "nome":"Bheatriz Medeiro",
            "cpf":"562.548.032-85",
            "rg":"58.565.422-4",
            "telefone_aluno":"(11)65482-3215",
            "telefone_responsavel":"(11)36489-8345",
            "email":"bheatrizzmedeiro@gmail.com",
            "data_nascimento":"29/10/2005"
        },
        {
            "cod_aluno":"10",
            "nome":"Ricardo Montana",
            "cpf":"563.458.235-07",
            "rg":"69.254.325-0",
            "telefone_aluno":"(11)85482-3658",
            "telefone_responsavel":"(11)84568-3658",
            "email":"ricardomontana@gmail.com",
            "data_nascimento":"06/06/2006"
        }
    ]
)
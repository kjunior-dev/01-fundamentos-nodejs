import http from 'http'

/*
* Criar Usuário
* Listagem de Usuários
* Atualizar Usuário
* Remover Usuário
*/

/*
*  - HTTP
*    - Metodo HTTP
*       - GET, POST, PUT, PATCH, DELETE
*    - URL
*/

/*
* GET => Buscar uma informação no back-end
* POST => Criar uma informação no back-end
* PUT => Alterar uma informação no back-end
* PATCH => Alterar uma informação específica no back-end
* DELETE => Deletar uma informação no back-end
*/

// Statefull - Stateless

// Cabeçalhos (Requisição/Resposta) => Metadados

// HTTP Status Code

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Kevin Junior',
            email: 'kevin.sousa@example.com'
        });

        return res.writeHead(201).end();
    }

    res.writeHead(404).end('Rota não encontrada')
});

server.listen(3333, () => {
    console.log('Servidor ON na porta 3333')
});

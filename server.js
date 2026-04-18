const http = require('http');
const url = require('url');
const calc = require('./calculator');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
const parsedUrl = url.parse(req.url, true);
const { pathname, query } = parsedUrl;
const a = Number(query.a);
const b = Number(query.b);

let result

switch (pathname) {
case '/soma':
result = calc.soma(a, b)
break
case '/subtracao':
result = calc.subtracao(a, b);
break;
case '/multiplicacao':
result = calc.multiplicacao(a, b);
break;
case '/divisao':
result = calc.divisao(a, b);
break;
case '/potencia':
result = calc.potencia(a, b);
break;
case '/resto':
result = calc.resto(a, b);
break;
default:
res.writeHead(404);
return res.end('Rota não encontrada');
}
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ resultado: result }));
});
server.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
})
const sinesp = require('sinesp-api');

async function start() {
    sinesp.configure({
        host: 'cidadao.sinesp.gov.br',
        endpoint: '/sinesp-cidadao/mobile/consultar-placa/',
        serviceVersion: 'v4',
        androidVersion: '8.1.0',
        timeout: 0,
        maximumRetry: 3, 
        proxy: {}
    });
    let vehicle = await sinesp.search('AAA1111');
    console.log(vehicle);
};

start();
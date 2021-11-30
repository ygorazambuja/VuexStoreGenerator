const ncp = require('ncp').ncp;
const source = `${__dirname}/src/vuex-module/models/`;
const destination = `${__dirname}/out/vuex-module/models/`;
ncp(source, destination);

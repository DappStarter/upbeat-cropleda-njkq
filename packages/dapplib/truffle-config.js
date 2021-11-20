require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift random situate unlock hockey clinic blue genre'; 
let testAccounts = [
"0x732d0f3944ef82c76fe7db1c89d890c4546ca9d4310a769be120ce50452c9a0a",
"0x9b461c09ea721281c9ad23b5b9f4ecd91f37177fe5daff1ac5e56ca81cddd027",
"0x0bdbca79e8333efb23d27d9dd26204030a503cbfa18e58c465b54f8b77c0fd7c",
"0xfe34842c6eca1ee5aafde4f2e9a91da41de854b524e273e8ef66915353d15e85",
"0xb5e2ab64364e296a457d7e66e78b84279dfa899d361d11cd949f45bbef00074a",
"0x77bfb51b03691cac5f03e3f8b7e8d9b1948078933ec969e93ac83b1c892b2399",
"0xe446917fe0822b24cd58d3512d5032b0e5da13dd31e6e89121726545bd50fbf6",
"0x6afde3cbe2a00d63dccc880c647f29723023bdd1136cb6d3e43de286f191a4bd",
"0xc864f8e55626b159865d5333dd20f0897e00c1935d8b8576f34a0da84275fb43",
"0x9279923eaea1de11fe0dbe8416c1fe95be652fa8d26034121ba914e8ef886f1b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



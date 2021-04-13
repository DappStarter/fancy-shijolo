require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strong reflect pizza evil hockey kangaroo army general'; 
let testAccounts = [
"0x9f773f41e24964cd7e1e05b6a48a3ea5431bd66dec422a2072399a9367c04e0d",
"0xafa35e4dfe3fff6736336b48688124751831a3e3bcdc95fbed49bd661975dcc6",
"0x74cc1e7276455bf5c34e2f18103393ba62873c8a20d6f51c634f156df971b4f5",
"0xca0e079c813bdbd26cbd157d70391322f80f3c9bc3b788cadc8de4651fc1bd56",
"0xbcbf84deebb10d2ffd786f84c70dcafb7f399353ae39d2f03493da28ea4a5c94",
"0x693af0716c0b193e704c6bd5ff215a1f86d163d950ba57e3322ce60d8e25924c",
"0x11efb5035ebc70ac345ca9ced455c605785b6b7a2e74f552acb3259db966e70e",
"0x29bec4cb6da49a91f1d144ffa5df5dedcd4af2c4ebe99223286775b686aee811",
"0x617c1c1c044bb53c08279a19ea2622d9fd259fa2df5adb5ded60eaed3a9a65ea",
"0xfed6ce42c72722af66e35ed0eb7ad7585024e688b1d34661fdd6df5809bac3e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

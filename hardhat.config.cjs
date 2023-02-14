// https://eth-goerli.g.alchemy.com/v2/H7kddwsNgEhf7B_koEqkQzjkvEVriXb4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/H7kddwsNgEhf7B_koEqkQzjkvEVriXb4',
      accounts: [
        '0e97dad3ef47dc4ca4d8852a990f330a3ca0656c9370ac923e03504b31458e24',
      ],
    },
  },
};

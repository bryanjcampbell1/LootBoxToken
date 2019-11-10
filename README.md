# UI

required deps:

```sh
npm i -g truffle ganache-cli lerna yarn 
```

1. First compile and build the contracts

```sh
cd solidity`
truffle build
```

2. init ui dir

```sh
cd solidity/drizzle
yarn
```

3. start local devchain via ganache, in separate terminal and leave running

```sh
yarn ganache
```

4. deploy contracts on ganache

```sh
yarn ganache:deploy
```

5. start and serve ui on localhost:3001 and supporting providers

```sh
yarn serve:ui
```

6. Go to localhost:3001 in your browser and interact

# Enigma
discovery init (only the first time need to say yes to docker download offer)
follow commmand create enigma contract project structure
cargo new secret_contracts/<name> --lib
for example:
cargo new secret_contracts/lookbox --lib

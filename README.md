# Read-LevelDB-Geth

This is a supporting repo for etherworld.co article

follow the steps:-

you will a local geth instance ro run this demo..

1) git clone git@github.com:bit-warrior/Read-LevelDB-Geth.git
2) change directory to cloned rep 
3) Open index.js
 and change the path to local geth cahian data
 ````
 const db=new ReadLevelDB("path_to_chain_chaindata");
 
 ````
 4) npm install 
 5) node index.js
 
 ![alt text](https://github.com/bit-warrior/Read-LevelDB-Geth/blob/master/Screenshot%20from%202019-01-30%2020-36-59.png)

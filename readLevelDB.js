const level = require('level')
const rlp = require('rlp')
const ethUtil = require('ethereumjs-util')
const BN = ethUtil.BN

const bufBE8 = n => n.toArrayLike(Buffer, 'be', 8)
const bodyKey = (n, hash) => Buffer.concat([Buffer.from('b'), bufBE8(n), hash])
const headerKey = (n, hash) => Buffer.concat([Buffer.from('h'), bufBE8(n), hash])
const recptKey = (n, hash) => Buffer.concat([Buffer.from('r'), bufBE8(n), hash])

function ReadLevelDB(path){
      this.db=level(path)
}


ReadLevelDB.prototype.getBody=function(blockNumber,blockHash,cb){

    this.db.get(bodyKey(new BN(blockNumber),ethUtil.toBuffer(blockHash)),{
        keyEncoding: 'binary',
        valueEncoding: 'binary'
      }, function (err, value) {
        cb(err,rlp.decode(value))
        
      })



}


ReadLevelDB.prototype.getHeader=function(blockNumber,blockHash,cb){

    this.db.get(headerKey(new BN(blockNumber),ethUtil.toBuffer(blockHash)),{
        keyEncoding: 'binary',
        valueEncoding: 'binary'
      }, function (err, value) {
        cb(err,rlp.decode(value))
        
      })



}

ReadLevelDB.prototype.getReceiptTrie=function(blockNumber,blockHash,cb){

    this.db.get(recptKey(new BN(blockNumber),ethUtil.toBuffer(blockHash)),{
        keyEncoding: 'binary',
        valueEncoding: 'binary'
      }, function (err, value) {
        cb(err,rlp.decode(value))
        
      })



}

ReadLevelDB.prototype.getStateTrie=function(blockHash,cb){

    this.db.get(ethUtil.toBuffer(blockHash),{
        keyEncoding: 'binary',
        valueEncoding: 'binary'
      }, function (err, value) {
        cb(err,rlp.decode(value))
        
      })



}


module.exports=ReadLevelDB;

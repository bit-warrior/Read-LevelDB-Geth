const ReadLevelDB = require('./readLevelDB')


const db=new  ReadLevelDB("/media/manish/Sam/ethchain_fast/geth/chaindata");


db.getStateTrie("0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544",function(err,val){

console.log(val)

})


db.getBody(3151411,"0xb52ae3643f564b46db41d79270b303e6eb079c602db32032b9cb68a765bb2492",function(err,val){

    console.log(val)
    
    })

db.getHeader(3151411,"0xb52ae3643f564b46db41d79270b303e6eb079c602db32032b9cb68a765bb2492",function(err,val){

        console.log(val)
        
        }) 
        
db.getReceiptTrie(3151411,"0xb52ae3643f564b46db41d79270b303e6eb079c602db32032b9cb68a765bb2492",function(err,val){

            console.log(val)
            
})         
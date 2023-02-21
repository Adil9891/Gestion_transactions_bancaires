let transactions=[
                {id : 1,nom_client : "Adil",montant :100,emetteur : "SG",destinataire : "lui meme", date_execution : "12/01/2023"},
                {id : 2,nom_client : "sabir",montant :200,emetteur : "SG",destinataire : "lui meme", date_execution : "12/01/2023"},
                {id : 3,nom_client : "hakimi",montant :300,emetteur : "SG",destinataire : "lui meme", date_execution : "12/01/2023"},
                {id : 4,nom_client : "Achraf",montant :400,emetteur : "SG",destinataire : "lui meme", date_execution : "12/01/2023"}
                ];


function get_transactions(){
    return transactions;
}
function get_transaction(transaction_number){
    
return transactions.find(transaction => transaction.id === transaction_number)
}

function new_transction(customer_name, amount,emett,dest,dateExecution){
    let trans = {id : generer_id(),nom_client : customer_name,montant : amount,emetteur : emett, destinataire : dest,date_execution : dateExecution }
    transactions.push(trans);
}

function generer_id(){
    max=0;
    transactions.forEach(element =>{
        if (max<element.id){
            max=element.id;
        }
    })
    return max+1
}

//new_transction('amrabet',700)
//console.log(get_transactions())
//console.log(Math.max(transactions.values.id));

module.exports.get_transactions=get_transactions;
module.exports.get_transaction=get_transaction;
module.exports.new_transction=new_transction;
//module.exports.transactions=transactions
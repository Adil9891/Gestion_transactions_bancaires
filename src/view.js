function displayTransaction(transaction){
    result=`<!DOCTYPE html>
    <html><head>
            <title>All transactions</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <table class="table">
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Montant</th>
                <th>Emetteur</th>
                <th>Destinataire</th>
                <th>date_execution</th>
            </tr>
            <tr>
                <td>${transaction.id}</td>
                <td>${transaction.nom_client}</td>
                <td>${transaction.montant}</td>
                <td>${transaction.emetteur}</td>
                <td>${transaction.destinataire}</td>
                <td>${transaction.date_execution}</td>
                </tr>`

    return result+`</table></body></html>`
}

function displayAllTransactions(transactions){
    result=`<!DOCTYPE html>
    <html><head>
            <title>All transactions</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <table class="table">
            <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Montant</th>
            <th>Emetteur</th>
            <th>Destinataire</th>
            <th>date_execution</th>
            <th>lien</th></tr>`
    transactions.forEach(transaction => {
    result+=`<tr>
            <td>${transaction.id}</td>
            <td>${transaction.nom_client}</td>
            <td>${transaction.montant}</td>
            <td>${transaction.emetteur}</td>
            <td>${transaction.destinataire}</td>
            <td>${transaction.date_execution}</td>
            <td><a href=\"http://localhost:4000/html/transaction/${transaction.id}\">View</a></td>
            </tr>`
        
    });
    return result+`</table></body></html>`
}

module.exports.displayTransaction=displayTransaction
module.exports.displayAllTransactions=displayAllTransactions
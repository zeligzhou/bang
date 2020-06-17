// (function() {
    var taxObj = {
        rate: 0.2,
        tax: 0,
        fix: true
    };

    $('#sub').on('click', function() {
        var vol = $('#vol').val();
        var price = $('#price').val();
        if (!price) {
            $('.alert').show();
            setTimeout(function() {
                $('.alert').hide()
            }, 2000);
        } else {
            var costObj = calTax(vol, price);
            $('#tax').text(costObj.tax);
            $('#cost').text(costObj.cost);
        }
    });
// });


function calTax(vol, price) {
    var ret = {
        tax: 0,
        cost: price
    }
    var taxRate = priceMap[vol];
    if (price > 150) {
        var p = 150;
        var taxUnit;
        taxRate.map(function (key) {
            if (price >= key.num) {
                p = key.num;
                taxUnit = key;
            }
        });
        var realTax = taxUnit.fix ? taxUnit.tax : price * taxUnit.rate;
        console.log(taxUnit);
        ret.tax  = (+realTax).toFixed(2);
        ret.cost = (+price + realTax).toFixed(2);
    }
    return ret;
}

var priceMap = {
    30: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 300,
            rate: 0.5,
            tax: 150,
            fix: true
        },
        {
            num: 600,
            rate: 0.5,
            tax: 300,
            fix: false
        }
    ],
    50: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 500,
            rate: 0.5,
            tax: 150,
            fix: true
        },
        {
            num: 600,
            rate: 0.5,
            tax: 300,
            fix: false
        }
    ],
    75: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 600,
            rate: 0.2,
            tax: 120,
            fix: false
        },
        {
            num: 750,
            rate: 0.5,
            tax: 375,
            fix: false
        }
    ],
    100: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 600,
            rate: 0.2,
            tax: 120,
            fix: false
        },
        {
            num: 1000,
            rate: 0.5,
            tax: 500,
            fix: false
        }
    ],
    120: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 600,
            rate: 0.2,
            tax: 120,
            fix: false
        },
        {
            num: 1200,
            rate: 0.5,
            tax: 600,
            fix: false
        }
    ],
    150: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 600,
            rate: 0.2,
            tax: 120,
            fix: false
        },
        {
            num: 1500,
            rate: 0.5,
            tax: 750,
            fix: false
        }
    ],
    180: [
        {
            num: 150,
            rate: 0.2,
            tax: 60,
            fix: true
        },
        {
            num: 600,
            rate: 0.2,
            tax: 120,
            fix: false
        },
        {
            num: 1800,
            rate: 0.5,
            tax: 900,
            fix: false
        }
    ]
};

function calcWaitingTime(priceUber) {
    var waitingTime = document.getElementById('thoiGianCho').value;
    var moneyWaitingTime = waitingTime * priceUber;
    return moneyWaitingTime;
}

function calcTotalKm(firstFrice, secondPrice, thridPrice) {
    var totalKm = document.getElementById('soKM').value;
    if (totalKm < 1) {
        moneyTotalKm = totalKm * firstFrice;
    } if (totalKm < 20 & totalKm >= 1) {
        moneyTotalKm = firstFrice + (totalKm - 1) * secondPrice;
    } if (totalKm >= 20) {
        moneyTotalKm = firstFrice + (20 - 1) * secondPrice + (totalKm - 20) * thridPrice;
    }
    return moneyTotalKm;
}

function calcUberX() {
    var waitingTimeUberX = calcWaitingTime(2000);
    var totalKmUberX = calcTotalKm(8000, 12000, 10000);
    var totalMoney = waitingTimeUberX + totalKmUberX;
    return totalMoney;
}

function calcUberSUV() {
    var waitingTimeUberX = calcWaitingTime(3000);
    var totalKmUberX = calcTotalKm(9000, 14000, 12000);
    var totalMoney = waitingTimeUberX + totalKmUberX;
    return totalMoney;
}

function calcUberBlack() {
    var waitingTimeUberX = calcWaitingTime(4000);
    var totalKmUberX = calcTotalKm(10000, 16000, 14000);
    var totalMoney = waitingTimeUberX + totalKmUberX;
    return totalMoney;
}

document.getElementById('btnTotalMoney').onclick = function () {

    document.getElementById('divThanhTien').style.display = 'block';
    var addMoneyTotal = document.getElementById('xuatTien');

    if (document.getElementById('uberX').checked == true) {
        addMoneyTotal.innerHTML = calcUberX();
    } if (document.getElementById('uberSUV').checked == true) {
        addMoneyTotal.innerHTML = calcUberSUV();
    } if (document.getElementById('uberBlack').checked == true) {
        addMoneyTotal.innerHTML = calcUberBlack();
    }
}

document.getElementById('btnInvoice').onclick = function () {
    var titleBill = document.getElementById('titleBill');
    var inputKm = document.getElementById('inputKm');
    var inputWaitingTime = document.getElementById('inputWaitingTime');
    var totalMoney = document.getElementById('totalMoney');

    inputKm.innerHTML = document.getElementById('soKM').value;
    inputWaitingTime.innerHTML = document.getElementById('thoiGianCho').value;

    if (document.getElementById('uberX').checked == true) {
        titleBill.innerHTML = 'Biên lai cước UberX';
        totalMoney.innerHTML = calcUberX();
    } if (document.getElementById('uberSUV').checked == true) {
        titleBill.innerHTML = 'Biên lai cước UberSUV';
        totalMoney.innerHTML = calcUberSUV();

    } if (document.getElementById('uberBlack').checked == true) {
        titleBill.innerHTML = 'Biên lai cước UberBlack';
        totalMoney.innerHTML = calcUberBlack();
    }
}

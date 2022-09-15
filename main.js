
var array = [];
var arrayInteger = [];

document.getElementById("addNum").addEventListener("click", function() {
    var value = document.getElementById("numN").value * 1;
    array.push(value);

    document.getElementById("showN").innerHTML =  array.join();
});


// Bài tập 1: Tổng các số dương

document.getElementById("tinhTong").addEventListener("click", function(){
    var tinhTong = 0;

    for(var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            continue;
        }
        tinhTong = tinhTong + array[i];
    }   

    document.getElementById("showTong").innerHTML ="Tổng các số dương: " + tinhTong;
});

// Bài tập 2: Đếm số dương

document.getElementById("demSoDuong").addEventListener("click", function() {
    var count = 0;
    for(var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            continue;
        } else if(array[i] > 0){
            count++;
        }
    }
    document.getElementById("showDemSoDuong").innerHTML = "Số dương: " + count;
});

// Bài tập 3: Tìm số nhỏ nhất

document.getElementById("btnTimSo").addEventListener("click", function() {
    var min = array[0];

    for(var i = 1; i < array.length; i++) {
        if(min > array[i]) {
            min = array[i];
        }
    }
    document.getElementById("showTimSo").innerHTML = "Số nhỏ nhất: " + min;
});

// Bài tập 4: Tìm số dương nhỏ nhất

document.getElementById("minNum").addEventListener("click", function() {
    var arrayPlus = [];
    var output = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            arrayPlus.push(array[i]);
        } else{
            continue;
        }
    }
    if (arrayPlus == 0) {
        output = 'Không có số dương trong mảng!';
    } else{
        var minNum = arrayPlus[0];
    
        for (j = 1; j < arrayPlus.length; j++) {
        if (minNum > arrayPlus[j]) {
            minNum = arrayPlus[j];
            }
        }
        output =  "Số dương nhỏ nhất: " + minNum;
    }
    
    document.getElementById("showMinNum").innerHTML = output;
});

// Bài tập 5: Tìm số chẵn cuối cùng

document.getElementById("lastEvenNum").addEventListener("click", function() {
    var evenNumber = array.filter(function(n) {
        return n % 2 == 0;
    });

    if (evenNumber == 0) {
        result = -1;
    } else {
        result = 'Số chẵn cuối cùng: ' + evenNumber.pop();
    }

    document.getElementById("showEvenNum").innerHTML = result;
});

// Bài tập 6: Đổi chỗ 2 giá trị trong mảng theo vị trí

document.getElementById("btnConvert").addEventListener("click", function () {
    var index1 = +document.getElementById("index1").value;
    var index2 = +document.getElementById("index2").value;

    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    document.getElementById("showConvert").innerHTML = "Mảng sau khi đổi chỗ: " +  array;
});

// Bài tập 7: Sắp xếp mảng theo thứ tự tăng dần.

document.getElementById("btnSapXep").addEventListener("click", function() {
    
    for(var i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp2 = array[i];
                array[i] = array[j];
                array[j] = temp2;
            }
        }
    }

    document.getElementById("showSapXep").innerHTML = "Mảng sau khi sắp xếp: " + array;
});

// Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng

document.getElementById("btnPrime").addEventListener("click", function() {
    function checkPrime(n) {
        if (n <= 1) {
            return false;
        }

        for (var i = 2; i < n; i++) {
            if(n % i == 0) {
                return false;
            }
        }

        return true;
    }


    function isPrime() {
        var prime = '';
        for(var i = 0; i < array.length; i++) {
            if(checkPrime(array[i])) {
                prime = "Số nguyên tố đầu tiên: " + array[i];
                break;
            } else{
                prime = -1;
            }
        }

        document.getElementById("showPrime").innerHTML = prime;
    }
    isPrime();
});

// Bài tập 9: Đếm số nguyên arrayInteger

document.getElementById("btnAddNum").addEventListener("click", function() {
    var value2 = +document.getElementById("numInteger").value;

    arrayInteger.push(value2);

    document.getElementById("showAddNum").innerHTML = arrayInteger.join();
});

document.getElementById("btnInteger").addEventListener("click", function() {
    var count = 0;

    for (var i = 0; i < arrayInteger.length; i++) {
        if(Number.isInteger(arrayInteger[i])) {
            count++;
        }
    }

    document.getElementById("showInteger").innerHTML ="Số nguyên: " + count;
});

// Bài tập 10: Đếm số lượng sô âm và số dương

document.getElementById("btnSoSanh").addEventListener("click", function() {
    var soDuong = 0;
    var soAm = 0;
    var output = '';
    for(var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            soDuong++;
        } else if (array[i] < 0) {
            soAm++;
        }
    };

    if(soDuong > soAm) {
        output = "Số dương > Số âm";
    } else if (soDuong < soAm) {
        output = "Số âm > Số dương";
    } else if (soDuong = soAm) {
        output = "Số dương = Số âm";
    }

    document.getElementById("showSoSanh").innerHTML = output;
});
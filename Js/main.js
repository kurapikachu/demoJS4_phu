/** BÀI TẬP 1
 * 
 * Khối 1
 * Nhập ngày tháng năm
 * 
 * Khối 2
 * Khai báo biến cho ngày
 * Khai báo biến cho tháng
 * Khai báo biến cho năm
 * 
//  * Điều kiện 1:
Nếu người dùng nhập vào ngày 1, tháng khác 1
    *Trước đó
 -> Ngày = tổng số ngày của tháng trước đó
 -> Tháng = tháng hiện tại - 1
 -> Năm = năm hiện tại
    *Sau đó
 -> Ngày = ngày 2
 -> Tháng = tháng hiện tại
 -> Năm = năm hiện tại

//  Điều kiện 2:
Nếu người dùng nhập vào ngày 1, tháng = 1
    *Trước đó
 -> Ngày = 31
 -> Tháng = tháng 12
 -> Năm = năm hiện tại - 1
    *Sau đó
 -> Ngày = ngày 2
 -> Tháng = tháng hiện tại
 -> Năm = năm hiện tại

//  Điều kiện 3
Nếu người dùng nhập vào ngày 31, tháng khác 12
    *Trước đó
 -> Ngày = 30
 -> Tháng = tháng hiện tại
 -> Năm = năm hiện tại 
    *Sau đó
 -> Ngày = ngày 1
 -> Tháng = tháng hiện tại + 1
 -> Năm = năm hiện tại 

//  Điều kiện 4
Nếu người dùng nhập vào ngày 31, tháng = 12
    *Trước đó
 -> Ngày = 30
 -> Tháng = tháng hiện tại
 -> Năm = năm hiện tại 
    *Sau đó
 -> Ngày = ngày 1
 -> Tháng =  1
 -> Năm = năm hiện tại + 1

//  Điều kiện 5:
Các trường hợp còn lại
    *Trước đó:
 -> Ngày = ngày hiện tại - 1
 -> Tháng = tháng hiện tại
 -> Năm = năm hiện tại 
    *Sau đó
 -> Ngày = ngày hiện tại + 1
 -> Tháng = tháng hiện tại
 -> Năm = năm hiện tại

 * Khối 3:
 * Xuất kết quả của ngày tiếp theo và ngày trước đó
 */

var ketQua = document.getElementById("ketQua");



ketQua.addEventListener("click", function () {
    var date = document.getElementById("inputDate").value;
    var ngayTruoc = document.getElementById("ngayTruoc");
    var ngaySau = document.getElementById("ngaySau");

    var d = new Date(date);
    var day = d.getDate();
    var month = d.getMonth();
    month = month + 1;
    var year = d.getFullYear();

    console.log(day, month, year);



    switch (day) {
        case 1:
            day = day + 1;
            ngaySau.innerHTML = "Ngày sau đó là: " + day + "/" + month + "/" + year;
            switch (month) {
                case 1:
                    year = year - 1;
                    ngayTruoc.innerHTML = "Ngày trước đó là: 31/12/" + year;
                    break;
                case 5: case 7: case 10: case 12:
                    month = month - 1;
                    ngayTruoc.innerHTML = "Ngày trước đó là: 30/" + month + "/" + year;
                    break;
                case 2: case 4: case 6: case 8: case 9: case 11:
                    month = month - 1;
                    ngayTruoc.innerHTML = "Ngày trước đó là: 31/" + month + "/" + year;
                    break;
                case 3:
                    if (year % 400 == 0) {
                        ngayTruoc.innerHTML = "Ngày trước đó là: 29/2/" + year;
                    } else {
                        ngayTruoc.innerHTML = "Ngày trước đó là: 28/2/" + year;
                    }

                    break;
            }
            break;
        case 31:
            ngayTruoc.innerHTML = "Ngày trước đó là: 30/" + month + "/" + year;
            console.log(month, year);
            switch (month) {
                case 12:
                    year = year + 1;
                    ngaySau.innerHTML = "Ngày sau đó là: 1/1/" + year;
                    break;
                default:
                    month = month + 1;
                    ngaySau.innerHTML = "Ngày sau đó là: 1/" + month + "/" + year;
                    break;
            }
            break;
        default:
            ngayTruoc.innerHTML = "Ngày trước đó là: " + (day - 1) + "/" + month + "/" + year;
            ngaySau.innerHTML = "Ngày sau đó là: " + (day + 1) + "/" + month + "/" + year;
    }
})

/**BÀI TẬP 2: XUẤT SỐ NGÀY CỦA THÁNG ĐƯỢC NHẬP
 * 
 * Khối 1:
 * Nhập tháng và năm
 * 
 * 
 * Khối 2:
 * 
 * Khai báo biến cho tháng
 * Khai báo biến cho năm
 * Xét các điều kiện
 * 
//  * Nếu tháng 1,3,5,7,8,10,12 thì có 31 ngày
//  * Nếu tháng 4,6,9,11 thì có 30 ngày
//  * Nếu tháng 2 - năm nhuận thì có 29 ngày
//  * Nếu tháng 2 - năm không nhuận thì có 28 ngày
 * 
 * Khối 3:
 * Xuất số ngày của tháng và năm tương ứng được chọn
 */

var ketQua2 = document.getElementById("ketQua2");

ketQua2.addEventListener("click", function () {
    var date = document.getElementById("inputMonth").value;
    var tbSoNgay = document.getElementById("tbSoNgay");

    var m = new Date(date);
    var month = m.getMonth() + 1;
    var year = m.getFullYear();

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            tbSoNgay.innerHTML = "Tổng số ngày của tháng " + month + " là: 31"
            break;
        case 4: case 6: case 9: case 11:
            tbSoNgay.innerHTML = "Tổng số ngày của tháng " + month + " là: 30"
            break;
        case 2:
            if ((year % 4 == 0) && (year % 100)) {
                tbSoNgay.innerHTML = "Tổng số ngày của tháng 2 là: 29"
            } else {
                tbSoNgay.innerHTML = "Tổng số ngày của tháng 2 là: 28"
            }
            break;
    }
})

/**BÀI TẬP 3: XUẤT RA CÁCH ĐỌC SỐ CÓ 3 CHỮ SỐ
 * Khối 1:
 * Nhập số cần đọc
 * 
 * Khối 2:
 * Khai báo biến cho số cần đọc
 * Tìm giá trị hàng trăm, hàng chục và hàng đơn vị của số đó
 * Gán cách đọc dựa theo các giá trị bên trên 
 * 
 * 
 * Khối 3:
 * Xuất ra cách đọc số tương ứng số nhập
  */

var ketQua3 = document.getElementById("ketQua3");

ketQua3.addEventListener("click", function (e) {
    var num3Ditgit = document.getElementById("num3Ditgit").value;
    var cachDoc = document.getElementById("cachDoc");
    e.preventDefault();
    var hundred = Math.floor(num3Ditgit / 100);
    var ten = Math.floor((num3Ditgit % 100) / 10);
    var unit = num3Ditgit % 10;

    var hangTram = "";
    var hangChuc = "";
    var hangDonVi = "";
    if (num3Ditgit <= 999 && num3Ditgit >= 100){
        switch (hundred) {
            case 1:
                hangTram = "Một trăm";
                break;
            case 2:
                hangTram = "Hai trăm";
                break;
            case 3:
                hangTram = "Ba trăm";
                break;
            case 4:
                hangTram = "Bốn trăm";
                break;
            case 5:
                hangTram = "Năm trăm";
                break;
            case 6:
                hangTram = "Sáu trăm";
                break;
            case 7:
                hangTram = "Bảy trăm";
                break;
            case 8:
                hangTram = "Tám trăm";
                break;
            case 9:
                hangTram = "Chín trăm";
                break;
        }
        switch (ten) {
            case 0:
                hangChuc = " lẻ";
                break;
            case 1:
                hangChuc = " mười";
                break;
            case 2:
                hangChuc = " hai mươi";
                break;
            case 3:
                hangChuc = " ba mươi";
                break;
            case 4:
                hangChuc = " bốn mươi";
                break;
            case 5:
                hangChuc = " năm mươi";
                break;
            case 6:
                hangChuc = " sáu mươi";
                break;
            case 7:
                hangChuc = " bảy mươi";
                break;
            case 8:
                hangChuc = " tám mươi";
                break;
            case 9:
                hangChuc = " chín mươi";
                break;
        }
        switch (unit) {
            case 0:
                hangDonVi = "";
                break;
            case 1:
                hangDonVi = " mốt";
                break;
            case 2:
                hangDonVi = " hai";
                break;
            case 3:
                hangDonVi = " ba";
                break;
            case 4:
                hangDonVi = " tư";
                break;
            case 5:
                hangDonVi = " lăm";
                break;
            case 6:
                hangDonVi = " sáu";
                break;
            case 7:
                hangDonVi = " bảy";
                break;
            case 8:
                hangDonVi = " tám";
                break;
            case 9:
                hangDonVi = " chín";
                break;
        }
        cachDoc.innerHTML = hangTram + hangChuc + hangDonVi;
        cachDoc.classList.add("alert-success");
        cachDoc.classList.remove("alert-danger");
    }else { 
        cachDoc.classList.remove("alert-success");
        cachDoc.classList.add("alert-danger");
        cachDoc.innerHTML = "Số được nhập không hợp lệ!! Vui lòng nhập lại!!";
    }
});

/**BÀI TẬP 4: XÁC ĐỊNH KHOẢNG CÁCH XA NHẤT TỪ NHÀ ĐẾN TRƯỜNG
 * 
 *Khối 1:
 Nhập vị trí của học sinh thứ 1, thứ 2, thứ 3 và vị trí của trường

 * Khối 2:
Khai báo biến các vị trí của trường, học sinh thứ 1, thứ 2 và thứ 3
// Giả sử toạ độ của các điểm trên nằm trên 1 trục ngang

-> khoảng cách xa nhất = | vị trí của trường - vị trí của học sinh|

 * Khối 3:
 Xuất ra khoảng cách xa nhất và của học sinh nào
 */

var btnKhoangCach = document.getElementById("btnKhoangCach");

btnKhoangCach.addEventListener("click", function(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var location1 = document.getElementById("location1").value;
    var location2 = document.getElementById("location2").value;
    var location3 = document.getElementById("location3").value;
    var locationSchool = document.getElementById("locationSchool").value;
    var tbKhoangCach = document.getElementById("tbKhoangCach");

    a = Math.abs(locationSchool - location1);
    b = Math.abs(locationSchool - location2);
    c = Math.abs(locationSchool - location3);

    if (a > b && a > c){
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường là của " + name1; 
    }else if (b > a && b > c){
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường là của " + name2; 
    }else if (c > a && c > b){
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường là của " + name3; 
    }else if (a == b && a > c){
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường là của " + name1 + " và " + name2; 
    }else if (b == c && b > a){
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường là của " + name2 + " và " + name3; 
    }else if (a == c && a > b){
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường là của " + name1 + " và " + name3; 
    }else{
        tbKhoangCach.innerHTML = "Khoảng cách xa nhất là từ nhà đến trường của 3 bạn bằng nhau"; 
    }
})
/**
 * Created by Liu-Mac on 05/10/2016.
 */
// 如何创建引用类型（类似：类）
// 1.创建构造函数
// 通常，引用类型用一个大写字母定义，这有助于简捷地区分函数和引用类型。
function CustomerBooking(bookingId, customerName, film, showDate) {

    this.customerName = customerName;
    this.bookingId = bookingId;
    this.showDate = showDate;
    this.film = film;

}

CustomerBooking.prototype.getCustomerName = function () {
    return this.customerName;
}

CustomerBooking.prototype.setCustmerName = function (customerName) {
    this.customerName = customerName;
}

CustomerBooking.prototype.getShowDate = function () {
    return this.showDate;
}

CustomerBooking.prototype.setShowDate = function (showDate) {
    this.showDate = showDate;
}

CustomerBooking.prototype.getFilm = function () {
    return this.film;
}

CustomerBooking.prototype.setFilm = function (film) {
    this.film = film;
}

CustomerBooking.prototype.getBookingId = function () {
    return this.bookingId;
}

CustomerBooking.prototype.setBookingId = function (bookingId) {
    this.bookingId = bookingId;
}

function Cinema() {
    this.bookings = new Array();
}

Cinema.prototype.addBooking = function (bookingId, customerName, film, showDate) {
    this.bookings[bookingId] = new CustomerBooking(bookingId, customerName, film, showDate);
}

Cinema.prototype.getBookingsTable = function () {
    var booking;
    var bookingsTableHTML = '<table border=1>';

    for (booking in this.bookings) {

        bookingsTableHTML += '<tr><td>';
        bookingsTableHTML += this.bookings[booking].getBookingId();
        bookingsTableHTML += '</td>';

        bookingsTableHTML += '<td>';
        bookingsTableHTML += this.bookings[booking].getCustomerName();
        bookingsTableHTML += '</td>';

        bookingsTableHTML += '<td>';
        bookingsTableHTML += this.bookings[booking].getFilm();
        bookingsTableHTML += '</td>';

        bookingsTableHTML += '<td>';
        bookingsTableHTML += this.bookings[booking].getShowDate();
        bookingsTableHTML += '</td>';

    }

    bookingsTableHTML = '</table>';

    return bookingsTableHTML;
}
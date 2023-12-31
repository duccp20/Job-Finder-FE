// Hàm chuyển đổi ngày từ "YYYY-MM-DD" sang "DD/MM/YYYY"
function convertDateFormatDDMMYYYY(dateString) {
  var date = new Date(dateString);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  // Thêm số 0 phía trước nếu ngày hoặc tháng nhỏ hơn 10
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + "/" + month + "/" + year;
}

const convertDateFormatYYYYMMDD = (timestamp) => {
  var date = new Date(timestamp);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  // Thêm số 0 phía trước nếu ngày hoặc tháng nhỏ hơn 10
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  console.log(`${year}-${month}-${day}`);
  return `${year}-${month}-${day}`;
};

export { convertDateFormatDDMMYYYY, convertDateFormatYYYYMMDD };

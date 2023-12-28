// Hàm chuyển đổi ngày từ "YYYY-MM-DD" sang "DD/MM/YYYY"
function convertDateFormat(dateString) {
  let parts = dateString.split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

export { convertDateFormat };

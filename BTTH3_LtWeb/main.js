// 1. Dùng JavaScript để tìm nút bấm và dòng chữ trên file HTML
const nutBam = document.getElementById("runBtn");
const dongChu = document.getElementById("welcome");

// 2. Gắn sự kiện "click" vào nút bấm
nutBam.addEventListener("click", function() {
  
  // 3. Hành động xảy ra khi nhấn nút: Đổi nội dung dòng chữ
  dongChu.textContent = "Tuyệt vời! JavaScript đã bắt đầu hoạt động!";
  
  // (Tùy chọn) Bật lên một hộp thoại thông báo nhỏ
  alert("Bạn vừa kích hoạt JavaScript thành công!");
});

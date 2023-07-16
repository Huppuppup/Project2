const ABC = []
const Usernames = []

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
  
    registerForm?.addEventListener("submit", function (event) {
      
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
    
      if (password !== confirmPassword) {
        alert("Mật khẩu không khớp");
        return; 
      }
      if (Usernames.includes(username)){
        alert("Tài khoản đã tồn tại")
        return
      }


      const User = {
        Username: username,
        Password: password,
      }

      ABC.push(User)
      XYZ = JSON.stringify(ABC)
      Usernames.push(username)
      
      localStorage.setItem("Usernames",JSON.stringify(Usernames))
      localStorage.setItem("User",XYZ)
      alert("Đăng ký thành công")
    });
  });
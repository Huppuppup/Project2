document.getElementById("btn-signup")
    .addEventListener('click', function (event) {
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem('users')) ?? []

        let registerUsername = document.getElementById('registerUsername')
        let registerPassword = document.getElementById('registerPassword')

        let newuser = {
            id: users.length,
            userName: registerUsername.value,
            password: registerPassword.value
        }
        for (var i = 0; i < users.length; i++) {
            if (registerUsername.value === users[i].userName) {
                alert("Ten dang nhap da ton tai");
                return;
            }
        }

        users.push(newuser)
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('userNow', JSON.stringify(newuser));

        window.location.href = "/Project/Project.html";
    })

document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        let loginName = document.getElementById('loginName')
        let loginPassword = document.getElementById('loginPassword')

        let users = JSON.parse(localStorage.getItem('users')) ?? []

        for (var i = 0; i < users.length; i++) {
            if (loginName.value === users[i].userName) {
                if (loginPassword.value === users[i].password) {
                    let userNow = {};
                    userNow.id = users[i].id;
                    userNow.userName = users[i].userName;
                    userNow.password = users[i].password;
                    localStorage.setItem('userNow', JSON.stringify(userNow));
                    users.push(userNow)
                    window.location.href = "/Project/Project.html";
                    return;
                } else {
                    alert('Password khong chinh xac!')
                }
            }
        }

        alert('User khong ton tai!');
    })



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const userTable = document.getElementById("userTable");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                contact: document.getElementById("contact").value,
                address: document.getElementById("address").value
            };
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            form.reset();
        });
    }

    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTable.innerHTML += row;
        });
    }
});

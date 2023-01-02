//active bg-color nav-menu
let menuItems = document.querySelectorAll(`#nav-menu li`);
for (const item of menuItems) {
    item.addEventListener(`click`, (event) => {
        for (const ritem of menuItems) {
            ritem.classList.remove(`active`);
        }
        item.classList.add(`active`);
    });
}
//validation form
const form = document.getElementsByTagName(`form`);
let arrInput = document.querySelectorAll(`#form-container input`); // lenght  = 15
let submit = arrInput[13]; //input[type=`submit`];
let resetForm = arrInput[14];
let fullName = arrInput[0];
let phone = arrInput[1];
let mail = arrInput[2];
let birth = arrInput[3];
let age = arrInput[4];
let nowDate = new Date(); //get date
let nowYear = nowDate.getFullYear(); // 2023
let gender = document.getElementById(`gender`);
let answer = document.getElementById(`answer`);
let animal = ``;
submit.addEventListener(`click`, (event) => {
    event.preventDefault();
    if (!fullName.value) {
        alert(`Name Không được để trống !`);

        return fullName.focus(), inputError(fullName);
    }
    let rexPhone = /^0\d{9}$/;
    if (phone.value && !rexPhone.test(phone.value)) {
        alert(`Số điện thoại không hợp lệ, bắt đầu bằng '0' và có 10 chữ số ! `);
        return phone.focus();
    }
    let rexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!mail.value) {
        alert(`E-mail không được để trống !`);
        return mail.focus(), inputError(mail);
    } else if (!rexMail.test(mail.value)) {
        alert(` Nhập sai định dạng E-mail !`);
        return mail.focus(), inputError(mail);
    }
    if (!birth.value) {
        alert(`Ngày tháng năm sinh không được để trống !`);
        return birth.focus(), inputError(birth);
    }
    let rexAge = /^[1-9][0-9]{0,2}$/;
    if (!age.value) {
        alert(`Tuổi không được để trống !`);
        return age.focus(), inputError(age);
    } else if (!rexAge.test(age.value)) {
        alert(` Nhập sai định dạng tuổi !`);
        return age.focus(), inputError(age);
    }
    //check age
    let birthYear = birth.value.split(`-`)[0];
    let nowAge = nowYear - parseInt(birthYear);
    if (nowAge != age.value) {
        alert(`Năm sinh và tuổi không khớp. Vui lòng kiểm tra lại ! `);
        return age.focus(), inputError(age);
    }
    if (!answer.value) {
        alert(`Câu hỏi không được để trống !`);
        return answer.focus(), inputError(answer);
    } else if (answer.value.length > 150) {
        alert(`Câu hỏi tối đa 150 ký tự`);

        return answer.select(), inputError(answer);
    }
    let checkboxCount = 0;
    for (let i = 5; i < arrInput.length - 1; i++) {
        if (arrInput[i].checked) {
            animal += arrInput[i].value + ` `;
            checkboxCount++;
        }
    }
    if (checkboxCount < 2) {
        alert(`Vui lòng chọn ít nhất 2 con vật yêu thích !`);
        return;
    }
    let choice = confirm(
        `Xác nhận thông tin trước khi gửi:` +
            `\nName: ` +
            fullName.value +
            `\nTelephone: ` +
            phone.value +
            `\nEmail: ` +
            mail.value +
            `\nBirth Date: ` +
            birth.value +
            `\nAge: ` +
            age.value +
            `\nGender: ` +
            gender.value +
            `\nAnswer: ` +
            answer.value +
            `\nFavorite Animals: ` +
            animal
    );
    if (choice) {
        form[0].submit();
        alert(`Thông tin đã gửi !`);
    }
});
resetForm.addEventListener(`click`, (event) => {
    form[0].reset();
});
let inputError = (ip) => {
    ip.style.backgroundColor = `#ffff003a`;
};

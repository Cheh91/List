window.addEventListener("DOMContentLoaded", () => {

    let objectItem = {
        technology: [
            // 'html',
            // 'css',
            // 'js'
        ]
    };


    const form = document.querySelector("form"),
        // btnSubmit = document.querySelector(".form__btn"),
        formValue = document.querySelector(".form__value"),
        list = document.querySelector(".list");


  



    const addTechnology = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            objectItem.technology.push(formValue.value);
            console.log(objectItem.technology)

            // list.innerHTML = "";

            // objectItem.technology.forEach((item, i) => {
            //     console.log(item);

                // list.innerHTML += `
                //     <li class="list__item">${i + 1}. ${item}<span class="list__item-del"></span></li>
                // `;
            // });

            availableTechnology();
        });

    }
    addTechnology();

    const availableTechnology = () => {
        list.innerHTML = "";

        objectItem.technology.forEach((it, i) => {
            console.log(it);
            list.innerHTML += `
                <li class="list__item">${i + 1}. ${it}<span class="list__item-del"></span></li>
            `;
        });

        // document.querySelectorAll(".list__item-del").forEach(item => {
        //     item.addEventListener("click", () => {
        //         item.parentElement.remove();
        //     });
        // });
        delTechnology();
    }
    // availableTechnology();


    function delTechnology() {

        const delBtn = document.querySelectorAll(".list__item-del");

        delBtn.forEach((item, i) => {
            item.addEventListener("click", () => {
                item.parentElement.remove();
            });
        });

    }
    delTechnology();


    // const newArr = objectItem.technology.splice();
    // console.log(newArr);



});




window.addEventListener("DOMContentLoaded", () => {

    const listArray = {
        // technology: [
        //     // "html",
        //     // "css",
        //     // "js"
        // ]
        technology: JSON.parse(localStorage.getItem("items"))
    };

    const form = document.querySelector(".form-item"),
        formValue = document.querySelector(".form__value"),
        list = document.querySelector(".list"),
        counter = document.querySelector(".counter"),
        removeAll = document.querySelector(".remove-all"),
        sortItem = document.querySelector(".sort-all");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);

        let newItem = formValue.value;

        if (newItem.trim().length > 0) {
            listArray.technology.push(newItem);
            // listArray.technology.sort();
            listAdd(list, listArray.technology);
            listSort();
            localSave();
        }

        // form.reset();
        formValue.value = "";
    });

    counter.innerHTML = `
        <div class="counter__item">${listArray.technology.length} <span>items</span></div>
    `;


    const listAdd = (listParent, listTechnology) => {
        listParent.innerHTML = "";

        listTechnology.forEach((item, i) => {

            listParent.innerHTML += `
                <li class="list__item"><input type="checkbox"><span class="list__item-text">${i + 1}. ${item}</span><span class="list__item-del"></span></li>
            `;
            count();

            const btnDel = document.querySelectorAll(".list__item-del");

            btnDel.forEach((item, x) => {
                item.addEventListener("click", () => {
                    item.parentElement.remove();
                    listTechnology.splice(x, 1);
                    listAdd(list, listArray.technology);
                    // if (listArray.technology.length == 0) {
                        count();
                    // }
                    localSave();
                });
            });

        });
    };
    listAdd(list, listArray.technology);


    function count() {
        counter.innerHTML = `
            <div class="counter__item">${listArray.technology.length} <span>items</span></div>
        `;
    }
    count();

    function listRemove() {
        removeAll.addEventListener("click", () => {
            list.innerHTML = "";
            listArray.technology.splice(0);
            count();
            localSave();
        });
    }
    listRemove();

    function listSort() {
        sortItem.addEventListener("click", () => {
            listArray.technology.sort();
            listAdd(list, listArray.technology);
            localSave()
        });
        
    }
    listSort();

    function localSave(){
        localStorage.setItem("items", JSON.stringify(listArray.technology));
    }



























































    //     let objectItem = {
    //         technology: [
    //             // 'html',
    //             // 'css',
    //             // 'js'
    //         ]
    //     };


    //     const form = document.querySelector("form"),
    //         // btnSubmit = document.querySelector(".form__btn"),
    //         formValue = document.querySelector(".form__value"),
    //         list = document.querySelector(".list");






    //     const addTechnology = () => {
    //         form.addEventListener("submit", (e) => {
    //             e.preventDefault();

    //             objectItem.technology.push(formValue.value);
    //             console.log(objectItem.technology)

    //             // list.innerHTML = "";

    //             // objectItem.technology.forEach((item, i) => {
    //             //     console.log(item);

    //                 // list.innerHTML += `
    //                 //     <li class="list__item">${i + 1}. ${item}<span class="list__item-del"></span></li>
    //                 // `;
    //             // });

    //             availableTechnology();
    //         });

    //     }
    //     addTechnology();

    //     const availableTechnology = () => {
    //         list.innerHTML = "";

    //         objectItem.technology.forEach((it, i) => {
    //             console.log(it);
    //             list.innerHTML += `
    //                 <li class="list__item">${i + 1}. ${it}<span class="list__item-del"></span></li>
    //             `;
    //         });

    //         // document.querySelectorAll(".list__item-del").forEach(item => {
    //         //     item.addEventListener("click", () => {
    //         //         item.parentElement.remove();
    //         //     });
    //         // });
    //         delTechnology();
    //     }
    //     // availableTechnology();


    //     function delTechnology() {

    //         const delBtn = document.querySelectorAll(".list__item-del");

    //         delBtn.forEach((item, i) => {
    //             item.addEventListener("click", () => {
    //                 item.parentElement.remove();
    //             });
    //         });

    //     }
    //     delTechnology();


    //     // const newArr = objectItem.technology.splice();
    //     // console.log(newArr);



});




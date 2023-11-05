window.addEventListener("DOMContentLoaded", () => {

    let listArray = {
        technology: []
    };

    if (localStorage.getItem("items")) {
        listArray = {
            technology: JSON.parse(localStorage.getItem("items"))
        }
    }



    const form = document.querySelector(".form-item"),
        formValue = document.querySelector(".form__value"),
        list = document.querySelector(".list"),
        counter = document.querySelector(".counter"),
        removeAll = document.querySelector(".remove-all"),
        sortItem = document.querySelector(".sort-all"),
        removeCheck = document.querySelector(".remove-check");


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(e);

        let newTodo = {
            todo: formValue.value,
            checked: false
        }

        // let newItem = formValue.value;

        if (newTodo.todo.trim().length > 0) {
            listArray.technology.push(newTodo);

            console.log(listArray.technology);
            // listArray.technology.sort();
            listAdd(list, listArray.technology);
            reloadListItem();
            listSort();
            localSave();
        }

        // form.reset();
        formValue.value = "";
    });


    function listAdd(listParent, listTechnology) {
        listParent.innerHTML = "";

        listTechnology.forEach((item, i) => {

            listParent.innerHTML += `
                <li class="list__item">
                    <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
                    <label class="list__item-text" for="item_${i}">${i + 1}. ${item.todo}</label><span class="list__item-del"></span>
                </li>
            `;
            count();
            localSave();

            const btnDel = document.querySelectorAll(".list__item-del");

            btnDel.forEach((item, x) => {
                item.addEventListener("click", () => {
                    item.parentElement.remove();
                    listTechnology.splice(x, 1);
                    listAdd(list, listArray.technology);
                    reloadListItem();
                    // if (listArray.technology.length == 0) {
                    count();
                    // }
                    localSave();
                });
            });

        });
        localSave();
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
            listArray.technology.sort((a, b) => a.todo > b.todo ? 1 : -1);
            listAdd(list, listArray.technology);
            localSave();
        });
    }
    listSort();

    function localSave() {
        localStorage.setItem("items", JSON.stringify(listArray.technology));
    }


    list.addEventListener("change", function (e) {
        // console.log(e.target.getAttribute("id"));
        let idInput = e.target.getAttribute("id");
        let forLabel = list.querySelector('[for=' + idInput + ']');
        // console.log(forLabel);
        let valueLabel = forLabel.innerHTML.split(" ");
        let removeNumber = valueLabel.splice(0, 1);
        let valueLabelText = valueLabel.join(" ");
        // console.log(valueLabel);
        // console.log(removeNumber);
        // console.log(valueLabelText);


        listArray.technology.forEach((item) => {
            // console.log(item.todo);
            if (item.todo == valueLabelText) {
                item.checked = !item.checked;

                listAdd(list, listArray.technology);

                console.log(listArray.technology);
                console.log(list);
                reloadListItem();


                
                // document.location.reload();

                // console.log(item);
                // if(item.checked == true){
                //     forLabel.style.textDecoration = "line-through";
                //     console.log(listArray.technology);
                //     // localSave();
                // } else {
                //     forLabel.style.textDecoration = "none";
                //     // localSave();
                // }

                localSave();
            }
        })
    });

    
    let listItem;

    function reloadListItem(){
        listItem = document.querySelectorAll("input[type='checkbox']:checked");
        console.log(listItem);
        localSave();
    }
    reloadListItem();


    removeCheck.addEventListener("click", () => {
        console.log(list);
        listItem.forEach(item => {
            // console.log(item);
            item.parentElement.remove();
            
            // console.log(listArray.technology);

            listArray.technology = listArray.technology.filter((n) => {return n.checked == false});
            // console.log(listArray.technology);
            listAdd(list, listArray.technology);

        });
    });



    






















    // const listArray = {
    //     // technology: [
    //     //     // "html",
    //     //     // "css",
    //     //     // "js"
    //     // ]
    //     technology: JSON.parse(localStorage.getItem("items"))
    // };

    // const form = document.querySelector(".form-item"),
    //     formValue = document.querySelector(".form__value"),
    //     list = document.querySelector(".list"),
    //     counter = document.querySelector(".counter"),
    //     removeAll = document.querySelector(".remove-all"),
    //     sortItem = document.querySelector(".sort-all");


    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     console.log(e);

    //     let newItem = formValue.value;

    //     if (newItem.trim().length > 0) {
    //         listArray.technology.push(newItem);
    //         // listArray.technology.sort();
    //         listAdd(list, listArray.technology);
    //         listSort();
    //         localSave();
    //     }

    //     // form.reset();
    //     formValue.value = "";
    // });

    // counter.innerHTML = `
    //     <div class="counter__item">${listArray.technology.length} <span>items</span></div>
    // `;


    // const listAdd = (listParent, listTechnology) => {
    //     listParent.innerHTML = "";

    //     listTechnology.forEach((item, i) => {

    //         listParent.innerHTML += `
    //             <li class="list__item"><input type="checkbox"><span class="list__item-text">${i + 1}. ${item}</span><span class="list__item-del"></span></li>
    //         `;
    //         count();

    //         const btnDel = document.querySelectorAll(".list__item-del");

    //         btnDel.forEach((item, x) => {
    //             item.addEventListener("click", () => {
    //                 item.parentElement.remove();
    //                 listTechnology.splice(x, 1);
    //                 listAdd(list, listArray.technology);
    //                 // if (listArray.technology.length == 0) {
    //                     count();
    //                 // }
    //                 localSave();
    //             });
    //         });

    //     });
    // };
    // listAdd(list, listArray.technology);


    // function count() {
    //     counter.innerHTML = `
    //         <div class="counter__item">${listArray.technology.length} <span>items</span></div>
    //     `;
    // }
    // count();

    // function listRemove() {
    //     removeAll.addEventListener("click", () => {
    //         list.innerHTML = "";
    //         listArray.technology.splice(0);
    //         count();
    //         localSave();
    //     });
    // }
    // listRemove();

    // function listSort() {
    //     sortItem.addEventListener("click", () => {
    //         listArray.technology.sort();
    //         listAdd(list, listArray.technology);
    //         localSave()
    //     });
    // }
    // listSort();

    // function localSave(){
    //     localStorage.setItem("items", JSON.stringify(listArray.technology));
    // }



























































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




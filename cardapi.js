(function () {
    function apiCall(method, url, data) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest;
            xhr.open(method, url, true);
            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        reject("Errr");
                    }
                }
            }
            xhr.send();
        })
    }

    apiCall('GET', 'https://teknopointstaging.com/api/mock/users.json', true)
        .then(function (res) {
            // console.log(JSON.parse(res))
            var data = JSON.parse(res);
            singleItem = data.items;
            //console.log(singleItem);
            populateData(singleItem);
        })

    function populateData(singleItem) {
        var card = document.getElementsByClassName('card')[0];
        singleItem.forEach(element => {
            card.innerHTML += cardPopulate(element)
        });
        addButtonData();
    }

    function cardPopulate(data) {

        var myvar = '<div class="mydiv">' +
            '            <img src="' + data.avatar + '" style="width: 270px; height:200px;" alt="...">' + '<span>' + data.id + '</span>' +
            '              <h5 class="card-title">' + data.name + '</h5>' +
            '              <button class="btn btn-outline-primary">Submit</button>' +
            '          </div>';


        return myvar;
    }


    function addButtonData() {
        const addtocard = document.getElementsByClassName('btn');
        let items = [];
        //console.log(addtocard.length);
        for (let i = 0; i < addtocard.length; i++) {
            addtocard[i].addEventListener("click", function (e) {
                //console.log(e.target.parentElement.children[2].textContent);
                //console.log(i+1);
                if (localStorage !== 'undefined') {
                    let item = {
                        id: i + 1,
                        name: e.target.parentElement.children[2].textContent,
                    };
                    items.push(item);
                    console.log(items)
                    localStorage.setItem("items", JSON.stringify(items));

                } else {
                    console.log('check storage');
                }
            })
        }
        // console.log(items);
    }
})
    ();
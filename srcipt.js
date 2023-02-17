const apiKey = `Ul-GJzhNjj4SSXB7Ieg7CvpmZKqOMS-Puf8G-C0u11c`;
const main = document.querySelector('.main');
const urlRandomImg = `https://api.unsplash.com/photos/random/?client_id=${apiKey}`;
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');

fetch(urlRandomImg).then((response) => {
    return response.json()
 }).then((data) => {
    console.log(data)
    {
    // Разметка для карточки
    const html = `
    <div class="delete">
        <div class="wrapper-img">
            <img src="${data.urls.regular}" alt="space" class="img-photo" width="600px" height="600px">  
        </div>
    </div>`;
    main.insertAdjacentHTML('beforeend', html);
}});
function removeImg() {
    const prevImg = document.querySelector('.delete');
    if(prevImg) prevImg.remove();
}
// Отправка формы
form.onsubmit = function (e) {
    // Отменяем отправку формы
    e.preventDefault();
    // Берем значения из инпута и обрезаем пробелы 
    let request = input.value.trim();
    // Делаем запрос на сервер
    // Адрес запроса
    const url = `https://api.unsplash.com/search/collections?client_id=${apiKey}&page=1&query=${request}&lang=ru`;  
    //Выполняем запрос
    fetch(url).then((response) => {
        return response.json()
     }).then((data) => {
        console.log(data)
        {
        removeImg()
         // Разметка для карточки
         const html = `
            <div class="delete">
            <ul class="images-grid">
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[0].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name: ${data.results[0].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[0].cover_photo.user.name}</p>
                </div>
            </li>
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[1].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name: ${data.results[1].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[1].cover_photo.user.name}</p>
                </div
            </li>
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[2].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name:  ${data.results[2].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[2].cover_photo.user.name}</p>
                </div
            </li>
            
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[3].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name: ${data.results[3].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[3].cover_photo.user.name}</p>
                </div>
            </li>
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[4].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name: ${data.results[4].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[4].cover_photo.user.name}</p>
                </div
            </li>
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[5].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name:  ${data.results[5].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[5].cover_photo.user.name}</p>
                </div
            </li>

            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[6].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name: ${data.results[6].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[6].cover_photo.user.name}</p>
                </div>
            </li>
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[7].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name: ${data.results[7].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[7].cover_photo.user.name}</p>
                </div
            </li>
            <li class="img-item">
                <div class="wrapper-img-item">
                    <img src="${data.results[8].cover_photo.urls.regular}" alt="space" class="img-photo" width="300px" height="300px">
                </div>
                <div class='img-description'>
                    <p class="img-name">Name:  ${data.results[8].cover_photo.alt_description}</p>
                    <p class="author">Prod by: ${data.results[8].cover_photo.user.name}</p>
                </div
            </li>
        </ul>
                
            </div>`;
        main.insertAdjacentHTML('afterbegin', html);
        //Очищаем поле ввода и возвращаем на него фокус
        input.value = '';
        input.focus();
        
        }   
     });
}
const app = document.getElementById('app');
const loadingBlock = document.getElementById('loading');
const errorBlock = document.getElementById('error');

function resetScreen() {
  app.innerHTML = '';
  errorBlock.style.display = 'none';
  loadingBlock.style.display = 'block';
}

// Задание 1
function getPosts() {
  resetScreen();
  
  fetch('https://typicode.com')
    .then(function(response) {
      return response.json();
    })
    .then(function(posts) {
      let html = '';
      for (let i = 0; i < 20; i++) {
        html += `
          <div class="card">
            <h3>${posts[i].title}</h3>
            <p>${posts[i].body}</p>
          </div>
        `;
      }
      app.innerHTML = html;
    })
    .catch(function(err) {
      errorBlock.style.display = 'block';
    })
    .finally(function() {
      loadingBlock.style.display = 'none';
    });
}

// Задание 2
function getComments() {
  resetScreen();
  
  fetch('https://typicode.com')
    .then(function(response) {
      return response.json();
    })
    .then(function(comments) {
      let html = '';
      for (let i = 0; i < 20; i++) {
        html += `
          <div class="card">
            <h3>${comments[i].name}</h3>
            <p><strong>Email:</strong> ${comments[i].email}</p>
            <p>${comments[i].body}</p>
          </div>
        `;
      }
      app.innerHTML = html;
    })
    .catch(function(err) {
      errorBlock.style.display = 'block';
    })
    .finally(function() {
      loadingBlock.style.display = 'none';
    });
}

// Задание 3
function getTodos() {
  resetScreen();
  
  fetch('https://typicode.com')
    .then(function(response) {
      return response.json();
    })
    .then(function(todos) {
      let html = '<ul class="todo-list" style="grid-column: 1/-1; width: 100%;">';
      
      for (let i = 0; i < 20; i++) {
        let item = todos[i];
        let statusText = item.completed ? 'Выполнено' : 'Не выполнено';
        let cssClass = item.completed ? 'completed' : 'not-completed';
        
        html += `
          <li class="todo-item ${cssClass}">
            ${item.title} — (${statusText})
          </li>
        `;
      }
      
      html += '</ul>';
      app.innerHTML = html;
    })
    .catch(function(err) {
      errorBlock.style.display = 'block';
    })
    .finally(function() {
      loadingBlock.style.display = 'none';
    });
}

// Бонус
function getPhotos() {
  resetScreen();
  
  fetch('https://typicode.com')
    .then(function(response) {
      return response.json();
    })
    .then(function(photos) {
      let html = '';
      for (let i = 0; i < 20; i++) {
        html += `
          <div class="card" style="text-align: center;">
            <img src="${photos[i].thumbnailUrl}" alt="${photos[i].title}">
            <p>${photos[i].title}</p>
          </div>
        `;
      }
      app.innerHTML = html;
    })
    .catch(function(err) {
      errorBlock.style.display = 'block';
    })
    .finally(function() {
      loadingBlock.style.display = 'none';
    });
}

// Задание 4
function triggerError() {
  resetScreen();
  
  fetch('https://typicode.coms')
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
      return response.json();
    })
    .then(function(data) {
      app.innerHTML = "Данные загружены";
    })
    .catch(function(err) {
      errorBlock.style.display = 'block';
    })
    .finally(function() {
      loadingBlock.style.display = 'none';
    });
}

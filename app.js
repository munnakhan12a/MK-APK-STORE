const appList = document.getElementById('app-list');

fetch('apps.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(app => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${app.name}</h2>
        <p>${app.description}</p>
        <a href="${app.apk}" download>📥 Download APK</a>
      `;
      appList.appendChild(card);
    });
  });

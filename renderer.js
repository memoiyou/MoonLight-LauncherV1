

document.getElementById('settings-button').addEventListener('click', () => {
  document.getElementById('settings-modal').style.display = 'flex';
});

document.getElementById('close-settings').addEventListener('click', () => {
  document.getElementById('settings-modal').style.display = 'none';
});
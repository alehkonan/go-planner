const openButton = document.getElementById('openGameDialogButton');
const closeButton = document.getElementById('closeGameDialogButton');
const gameDialog = document.getElementById('gameDialog');

const onOpenDialog = () => {
  gameDialog.showModal();
};

const onCloseDialog = () => {
  gameDialog.close();
};

openButton.addEventListener('click', onOpenDialog);
closeButton.addEventListener('click', onCloseDialog);

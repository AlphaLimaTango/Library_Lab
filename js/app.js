document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const submitForm = document.querySelector("#new-item-form");

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // console.log(event.target.author.value);

    const readingList = document.querySelector('#reading-list');
    const newListItem = document.createElement('div');

    // newListItem.classList.add()
    const titleBlock = document.createElement('h2');
    titleBlock.textContent = event.target.title.value;

    const authorBlock = document.createElement('h3');
    authorBlock.textContent = event.target.author.value;

    const categoryBlock = document.createElement('p');
    categoryBlock.textContent = event.target.category.value;

    newListItem.appendChild(titleBlock);
    newListItem.appendChild(authorBlock);
    newListItem.appendChild(categoryBlock);

    readingList.appendChild(newListItem);

    submitForm.reset();
  };


  submitForm.addEventListener('submit', handleSubmitForm);

});

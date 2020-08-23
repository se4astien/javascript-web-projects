const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  //   console.log(e.target);
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id;

  if (id) {
    // Remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
      // Add active class when button clicked
      e.target.classList.add('active');
    });
    // Hide other articles
    articles.forEach((article) => {
      // Remove active from other buttons
      article.classList.remove('active');
      // Keep all articles and change to only one id
      const item = document.getElementById(id);
      console.log(item);
      // Add active class for article clicked
      item.classList.add('active');
    });
  }
});

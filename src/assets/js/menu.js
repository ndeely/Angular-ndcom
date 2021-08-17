window.addEventListener('scroll', showBlocks);
window.addEventListener('click', showBlocks);

setTimeout(showBlocks, 10);

function showBlocks() {
  const blocks = document.querySelectorAll('.menu-button');

  const triggerBottom = window.innerHeight * 0.9;

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      block.classList.add('show');
    } else {
      block.classList.remove('show');
    }
  });
}

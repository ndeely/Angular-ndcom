window.addEventListener('scroll', showBlocks);

showBlocks();

function showBlocks() {
  const blocks = document.querySelectorAll('.menu-button');

  const triggerBottom = window.innerHeight * 0.8;

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      block.classList.add('show');
    } else {
      block.classList.remove('show');
    }
  });
}

export const scrollIntoView = (anchor) => {
  document.querySelector(anchor).scrollIntoView({
    behavior: 'smooth'
  });
}
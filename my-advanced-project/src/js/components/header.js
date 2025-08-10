export function createHeader() {
  const header = document.createElement('header');
  header.innerHTML = '<h1>Advanced Project</h1>';
  document.body.prepend(header);
}
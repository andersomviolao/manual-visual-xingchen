/* Barreira de apresentação do site estático; não é autenticação de servidor. */
(() => {
  'use strict';
  const form = document.querySelector('#access-form');
  const input = document.querySelector('#access-password');
  const error = document.querySelector('#access-error');
  const button = form.querySelector('button');
  const gate = document.querySelector('#access-gate');
  const content = document.querySelector('#guide-content');
  const denied = document.querySelector('#access-denied');
  document.querySelector('#access-retry').addEventListener('click', () => {
    denied.hidden = true;
    form.hidden = false;
    input.value = '';
    input.focus();
  });
  const expected = '52bb7cc738dbf5e5eee2c76754d87904e6750c63eda5e0a866197d2e16d9c142';
  async function hash(value) {
    const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
    return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, '0')).join('');
  }
  let opened = false;
  async function open() {
    if (opened) return;
    for (const source of document.querySelectorAll('script[data-guide-code]')) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = atob(source.dataset.guideCode);
        script.onload = resolve;
        script.onerror = () => reject(new Error('Não foi possível carregar o guia. Recarregue a página.'));
        document.body.append(script);
      });
    }
    for (const link of document.querySelectorAll('[data-destination]')) link.href = atob(link.dataset.destination);
    opened = true;
    content.hidden = false;
    gate.hidden = true;
    document.querySelector('#launch-bot').focus();
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    button.disabled = true;
    error.textContent = '';
    try {
      if (await hash(input.value) !== expected) {
        form.hidden = true;
        denied.hidden = false;
        input.value = '';
        document.querySelector('#access-denied-title').focus();
        return;
      }
      await open();
      input.value = '';
    } catch (e) {
      error.textContent = e.message;
    } finally {
      button.disabled = false;
    }
  });
})();

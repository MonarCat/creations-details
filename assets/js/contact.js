(() => {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  const setError = (field, message) => {
    const existing = field.parentElement.querySelector('.field-error');
    if (existing) existing.remove();
    if (!message) return;
    const error = document.createElement('small');
    error.className = 'field-error';
    error.textContent = message;
    field.parentElement.appendChild(error);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach((field) => {
      const value = field.value.trim();
      if (!value) {
        valid = false;
        setError(field, 'This field is required.');
      } else {
        setError(field, '');
      }
    });

    const email = form.querySelector('input[name="email"]');
    if (email.value && !/^\S+@\S+\.\S+$/.test(email.value)) {
      valid = false;
      setError(email, 'Please enter a valid email address.');
    }

    if (!valid) return;

    const values = Object.fromEntries(new FormData(form).entries());
    console.log('Enquiry submission:', values);
    const name = values.firstName || 'there';
    form.outerHTML = `<div class="success-card"><h3>Thank you, ${name}!</h3><p>We've received your enquiry and will be in touch within 24 hours.</p></div>`;
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
})();

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

  const formspreeEndpoint = 'https://formspree.io/f/xaqzyype';

  form.addEventListener('submit', (event) => {
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

    event.preventDefault();
    const formData = new FormData(form);

    fetch(formspreeEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok === false || data.errors) {
          const errorMessage = data.errors ? data.errors.map((error) => error.message).join(' ') : 'Submission failed. Please try again.';
          alert(errorMessage);
          return;
        }

        const name = form.querySelector('input[name="firstName"]').value.trim() || 'there';
        form.outerHTML = `<div class="success-card"><h3>Thank you, ${name}!</h3><p>Your enquiry has been sent successfully. We'll respond within 24 hours.</p></div>`;
      })
      .catch(() => {
        alert('Sorry, there was a problem sending your enquiry. Please try again later.');
      });
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
})();

(() => {
  const form = document.getElementById('quoteForm');
  const result = document.getElementById('formResult');

  if (form && result) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton?.textContent || 'Send Enquiry →';

      if (!form.reportValidity()) {
        return;
      }

      if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
      }

      try {
        const formData = new FormData(form);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();

        result.style.display = 'block';

        if (data.success) {
          result.style.background = '#d4edda';
          result.style.color = '#155724';
          result.innerHTML = '✓ Thank you! We\'ll be in touch within 24 hours.';

          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'form_submit', {
              event_category: 'Lead',
              event_label: 'Quote Form'
            });
          }

          form.reset();
        } else {
          result.style.background = '#f8d7da';
          result.style.color = '#721c24';
          result.innerHTML = '✗ Something went wrong. Please WhatsApp us directly.';
        }
      } catch (error) {
        result.style.display = 'block';
        result.style.background = '#f8d7da';
        result.style.color = '#721c24';
        result.innerHTML = '✗ Something went wrong. Please WhatsApp us directly.';
      } finally {
        if (submitButton) {
          submitButton.textContent = originalLabel;
          submitButton.disabled = false;
        }
      }
    });
  }

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
})();

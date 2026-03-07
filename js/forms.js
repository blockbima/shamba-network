/* ============================================
   SHAMBA NETWORK — Form Validation & Handling
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  // === Contact Form Validation ===
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      let isValid = true;

      // Clear previous errors
      this.querySelectorAll('.form-error').forEach(err => {
        err.style.display = 'none';
      });
      this.querySelectorAll('.error').forEach(el => {
        el.classList.remove('error');
      });

      // Validate required fields
      const name = this.querySelector('#name');
      const email = this.querySelector('#email');

      if (name && !name.value.trim()) {
        showError(name, 'Please enter your name');
        isValid = false;
      }

      if (email) {
        if (!email.value.trim()) {
          showError(email, 'Please enter your email');
          isValid = false;
        } else if (!isValidEmail(email.value)) {
          showError(email, 'Please enter a valid email address');
          isValid = false;
        }
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  // === Newsletter Form ===
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && !isValidEmail(emailInput.value)) {
        e.preventDefault();
        emailInput.style.borderColor = '#EF4444';
        setTimeout(() => {
          emailInput.style.borderColor = '';
        }, 2000);
      }
    });
  });

  // === Helper Functions ===
  function showError(input, message) {
    input.classList.add('error');
    let errorEl = input.parentElement.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.className = 'form-error';
      input.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});

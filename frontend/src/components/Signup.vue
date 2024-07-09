<template>
  <div class="signup-container text-center py-5">
    <h2 class="mb-5">LET YOUR JOURNEY BEGIN NOW!</h2>
    <div class="signup-form card mx-auto p-4" style="max-width: 500px; background-color: #FCE663; border-radius: 10px;">
      <form @submit.prevent="signup">
        <div class="form-group mb-3">
          <label for="email" class="form-label">Enter E-mail</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group mb-3">
          <label for="password" class="form-label">Create Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="form-group mb-3">
          <label for="confirmPassword" class="form-label">Re-enter Password</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <div class="form-check mb-3">
          <input type="checkbox" class="form-check-input" id="terms" v-model="terms" required>
          <label class="form-check-label" for="terms">
            I agree to all terms & conditions
          </label>
        </div>
        <p class="small">User must be over 20 years of age to join the event*</p>
        <button type="submit" class="btn btn-primary" style="background-color: #7AE0E6;">Sign-up</button>
      </form>
      <img src="https://i.postimg.cc/wBYhykLK/image-11.png" alt="Logo" class="logo-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    };
  },
  methods: {
    async signup() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });

        if (response.ok) {
          alert('User created successfully');
          this.$router.push('/');
        } else {
          const error = await response.text();
          alert(error);
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('An error occurred during signup');
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  background-color: #010922;
  min-height: 100vh;
}

.signup-form {
  background-color: #FCE663;
  padding: 30px;
  border-radius: 10px;
  position: relative;
}

.signup-form label {
  font-weight: bold;
}

.signup-form .btn {
  width: 100%;
}

.logo-image {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
}
</style>

<template>
    <div class="login-container text-center py-5">
      <h2 class="mb-5">WELCOME BACK!</h2>
      <div class="login-form card mx-auto p-4" style="max-width: 500px; background-color: #FCE663; border-radius: 10px;">
        <form @submit.prevent="login">
          <div class="form-group mb-3">
            <label for="email" class="form-label">Enter E-mail</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="form-group mb-3">
            <label for="password" class="form-label">ENTER Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <button type="submit" class="btn btn-primary" style="background-color: #7AE0E6;">LOGIN</button>
        </form>
        <img src="https://i.postimg.cc/wBYhykLK/image-11.png" alt="Logo" class="logo-image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost:3000/login', {
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
            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Login successful');
            if (!data.surveyCompleted) {
              this.$router.push('/survey'); // Redirect to survey if not completed
            } else {
              this.$router.push('/');
            }
          } else {
            const error = await response.text();
            alert(error);
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    background-color: #010922;
    min-height: 100vh;
  }
  
  .login-form {
    background-color: #FCE663;
    padding: 30px;
    border-radius: 10px;
    position: relative;
  }
  
  .login-form label {
    font-weight: bold;
  }
  
  .login-form .btn {
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
  
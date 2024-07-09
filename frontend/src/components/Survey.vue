<template>
    <div class="survey-container text-center py-5">
      <h2 class="mb-5">Tell us about yourself</h2>
      <div class="survey-form mx-auto p-4" style="max-width: 800px; background-color: #FCE663; border-radius: 10px; position: relative;">
        <form @submit.prevent="submitSurvey">
          <div class="question-box mb-4">
            <h4>Which Gender are you?</h4>
            <div>
              <label class="d-block">
                <input type="radio" v-model="gender" value="Male"> Male
              </label>
              <label class="d-block">
                <input type="radio" v-model="gender" value="Female"> Female
              </label>
              <label class="d-block">
                <input type="radio" v-model="gender" value="Prefer not to say"> Prefer not to say
              </label>
            </div>
          </div>
          <div class="question-box mb-4">
            <h4>What is your Relationship status?</h4>
            <div>
              <label class="d-block">
                <input type="radio" v-model="relationshipStatus" value="Single"> Single
              </label>
              <label class="d-block">
                <input type="radio" v-model="relationshipStatus" value="Taken"> Taken
              </label>
              <label class="d-block">
                <input type="radio" v-model="relationshipStatus" value="Married"> Married
              </label>
              <label class="d-block">
                <input type="radio" v-model="relationshipStatus" value="Prefer not to say"> Prefer not to say
              </label>
            </div>
          </div>
          <div class="question-box mb-4">
            <h4>What is your Type of Music?</h4>
            <div>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="EDM"> EDM
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="R&B"> R&B
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="Jazz"> Jazz
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="Rock"> Rock
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="Hip Hop"> Hip Hop
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="DJ"> DJ
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="Country"> Country
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="Reggae"> Reggae
              </label>
              <label class="d-inline-block mr-2">
                <input type="checkbox" v-model="musicTypes" value="Pop music"> Pop music
              </label>
            </div>
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-primary" style="background-color: #7AE0E6;">Finish</button>
          </div>
        </form>
      </div>
      <img src="https://i.postimg.cc/wBYhykLK/image-11.png" alt="Logo" class="background-logo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'Survey',
    data() {
      return {
        gender: '',
        relationshipStatus: '',
        musicTypes: []
      };
    },
    methods: {
      async submitSurvey() {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:3000/survey', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            },
            body: JSON.stringify({
              gender: this.gender,
              relationshipStatus: this.relationshipStatus,
              musicTypes: this.musicTypes
            })
          });
  
          if (response.ok) {
            alert('Survey submitted successfully');
            this.$router.push('/');
          } else {
            const error = await response.text();
            alert(error);
          }
        } catch (error) {
          console.error('Error during survey submission:', error);
          alert('An error occurred during survey submission');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .survey-container {
    background-color: #010922;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }
  
  .survey-form {
    background-color: #FCE663;
    padding: 30px;
    border-radius: 10px;
    position: relative;
    z-index: 2;
  }
  
  .question-box {
    background-color: #33383A;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 30px;
    text-align: left;
  }
  
  .question-box h4, .question-box label {
    color: #fff;
    z-index: 2;
  }
  
  .background-logo {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 20%;
    height: auto;
    opacity: 0.1;
    z-index: 1;
  }
  
  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 10px;
  }
  
  input[type="radio"]:checked + label::before,
  input[type="checkbox"]:checked + label::before {
    background-color: #7AE0E6; /* Change checkmark color */
  }
  </style>
  
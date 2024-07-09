<template>
  <div class="main-content container-fluid text-light py-5" style="background-color: #010922;">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="row align-items-center">
          <div class="col-md-6 text-left">
            <h1>DISCOVER the night of your life!</h1>
            <p class="lead">
              The best way to look for a party you truly need, a party you will never forget. We'll match you wherever you are!
            </p>
            <div class="btn-group mt-3">
              <router-link to="/signup" class="btn btn-lg" style="background-color: #FCE663;">Sign-up</router-link>
              <router-link to="/login" class="btn btn-lg btn-outline-light" style="border-color: #39F3FF;">Login</router-link>
            </div>
          </div>
          <div class="col-md-6 text-right">
            <img src="https://i.postimg.cc/wBYhykLK/image-11.png" alt="Exclusive Logo" class="img-fluid larger-image">
          </div>
        </div>
        <div class="row mt-5 text-center">
          <div class="col-12">
            <h4>Featured on</h4>
            <div class="featured-bar d-flex justify-content-around align-items-center mt-3" style="background-color: #7AE0E6; width: 1175px; height: 90px; margin: auto;">
              <img src="https://i.postimg.cc/XJHLCCnw/image-6.png" alt="TechCrunch" class="featured-logo" style="width: 150px; height: auto;" />
              <img src="https://i.postimg.cc/hjPMvrRD/image-5.png" alt="FastCompany" class="featured-logo" style="width: 150px; height: auto;" />
              <img src="https://i.postimg.cc/MHnDbpGg/image-7.png" alt="MIT" class="featured-logo" style="width: 70px; height: auto;" />
              <img src="https://i.postimg.cc/MHYW5qrb/1684047548forbes-logo-white.png" alt="Forbes" class="featured-logo" style="width: 120px; height: auto;" />
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <img src="https://i.postimg.cc/NMpTnqVY/image-15.png" alt="Party Image" class="img-fluid mx-auto" style="width: 1185px; height: 534px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style scoped>
.main-content h1, .main-content .lead {
  color: #fff;
}

.larger-image {
  max-width: 100%; /* Ensure the image does not exceed its container width */
  width: 80%; /* Adjust the width to make the image bigger */
  margin-right: -50px; /* Shift the image further to the right */
}

.featured-bar {
  padding: 10px;
  border-radius: 5px;
}

.featured-logo {
  max-width: 100%;
  margin: 0 10px;
}
</style>

<template>
    <div class="about container-fluid text-light py-5" style="background-color: #010922;">
      <div class="row justify-content-center">
        <div class="col-md-3 text-left" style="padding-left: 3px;">
              <img src="https://i.postimg.cc/wBYhykLK/image-11.png" alt="Exclusive Logo" class="img-fluid larger-image ">
              <h1>An exclusive party app!
                Based on preference</h1>
            </div>
        <div class="col-md-5">
          <div class="row align-items-center">
            <div class="col-md-3 text-right">
            <div class="col-md-center">
                <h1>ABOUT EXCLUSIVE</h1>
            </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-8 mt-5">
              <img src="https://i.postimg.cc/ZRDSxpxh/Web-Pro-Pic1.png" alt="Party Image01" class="img-fluid larger-image" style="width: 250px; height: 450px;" />
              <!-- <img src="https://i.postimg.cc/nz5Lc657/Web-Pro-Pic3.png" alt="Party Image02" class="img-fluid larger-image" style="width: 300px; height: 500px;" /> --> 
            </div>
          </div>
        </div>
        <h1>Through AI we match your music taste,  people preference, and past history for your perfect party. </h1>
      </div>
      <div class = "row mt-3">
        <div class = "col-8 mt-5">
            <img src="https://i.postimg.cc/QCWRgPMp/Web-Pro-Pic2.png" alt="Party Image02" class="img-fluid larger-image" style="width: 270px; height: 470px;" />
        </div>
      </div>
    <h1>Whether you want to book tonight or months ahead,  
        we got you! </h1>
      <img src="https://i.postimg.cc/nz5Lc657/Web-Pro-Pic3.png" alt="Party Image02" class="img-fluid larger-image" style="width: 300px; height: 500px;" />
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
              <div class="featured-bar d-flex justify-content-around align-items-center mt-3" style="background-color:#FCE663 ; width: 1175px; height: 150px; margin: auto;">
                <div class="text center"><h1>CHECK OUT YOUR EVENTS!</h1><div class="btn-group mt-4">
              <router-link to="/events" class="btn btn-lg" style="background-color: #7AE0E6;">CLICK HERE</router-link>
            </div></div>
               
              </div>
            </div>
          </div>
          
  </template>



<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about h1, .main-content .lead {
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
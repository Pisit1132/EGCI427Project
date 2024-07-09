<template>
  <footer class="bg-dark text-light text-center py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h5>Exclusive</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light">Home</a></li>
            <li><a href="#" class="text-light">About</a></li>
            <li><a href="#" class="text-light">Events</a></li>
            <li><a href="#" class="text-light">Find Group</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5>Contact</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light">Email</a></li>
            <li><a href="#" class="text-light">LinkedIn</a></li>
            <li><a href="#" class="text-light">Instagram</a></li>
            <li><a href="#" class="text-light">Twitter</a></li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5>Join Our Event Notifications</h5>
          <form class="form-inline d-flex justify-content-center">
            <input type="email" class="form-control" placeholder="Email Address">
            <button type="submit" class="btn btn-primary ml-2" style="background-color: #7AE0E6;">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

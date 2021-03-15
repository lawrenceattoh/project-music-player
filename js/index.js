let Photos = [];
let Locations = [
  'Harrington',
  'Cornwall',
  'Southwell',
  'Mews',
  'Kensington',
  'Tourist',
  'Apartments',
];
function ShowError(event) {
  $('#error' + event.name).css('opacity', '0');
}
$(document).ready(function () {
  // Get Images from JSON
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let html = ``;
      Photos = data;
      Locations.map((item, index) => {
        let ItemArr = Photos.slice(index * 5, (index + 1) * 5);
        html +=
          `
            <div class="row">
              <div class="col-12">
                <div class="CarouselHeading">` +
          item +
          `:</div>
                <div id="carouselExampleIndicators` +
          index +
          `" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators` +
          index +
          `" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators` +
          index +
          `" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators` +
          index +
          `" data-slide-to="2"></li>
                      <li data-target="#carouselExampleIndicators` +
          index +
          `" data-slide-to="3"></li>
                      <li data-target="#carouselExampleIndicators` +
          index +
          `" data-slide-to="4"></li>
              
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="CarouselImage d-block w-100 h-100 " src="` +
          ItemArr[0].url +
          `" alt="First slide" style="max-width: 100%; max-height: 100%; display: block;" />
                        <div class="carousel-caption ">
                            <h5>` +
          ItemArr[0].title +
          `</h5>
                          </div>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100 h-100 " src="` +
          ItemArr[1].url +
          `" alt="Second slide" style="max-width: 100%; max-height: 100%; display: block;" />
                        <div class="carousel-caption ">
                             <h5>` +
          ItemArr[1].title +
          `</h5>
                          </div>
                      </div>
                      <div class="carousel-item ">
                        <img class="d-block w-100 h-100 " src="` +
          ItemArr[2].url +
          `" alt="Third slide" style="max-width: 100%; max-height: 100%; display: block;" />
                        <div class="carousel-caption ">
                            <h5>` +
          ItemArr[2].title +
          `</h5>
                          </div>
                      </div>
                      <div class="carousel-item">
                        <img class="CarouselImage d-block w-100 h-100 " src="` +
          ItemArr[3].url +
          `" alt="Fourth slide" style="max-width: 100%; max-height: 100%; display: block;" />
                        <div class="carousel-caption ">
                              <h5>` +
          ItemArr[3].title +
          `</h5>
                          </div>
                      </div>
                      <div class="carousel-item ">
                        <img class="CarouselImage d-block w-100 h-100 " src="` +
          ItemArr[4].url +
          `" alt="Fifth slide" style="max-width: 100%; max-height: 100%; display: block;" />
                        <div class="carousel-caption ">
                               <h5>` +
          ItemArr[4].title +
          `</h5>
                          </div>
                      </div>
              
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators` +
          index +
          `" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators` +
          index +
          `" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </div>
        </div>
            `;
      });
      $('#courselContainer').html(html);
    });
    // Submit Registeration form
  $("#contact-form").submit(function(e) {
      e.preventDefault();
    let Name = $('#Name').val();
    let Email = $('#Email').val();
    let Pass = $('#Password').val();
    let validatePass = $('#validatePass').val();
    if (Name === '') {
      $('#errorName').css('opacity', '1');
      return;
    }
    if (Email === '') {
      $('#errorEmail').css('opacity', '1');
      return;
    }
    if (Pass === '') {
      $('#errorPassword').css('opacity', '1');
      return;
    }
     if (validatePass==='') {
      $("#errorValidatePass").text("Validate Password is required");     
      $('#errorValidatePass').css('opacity', '1');
      return;
    }
    if (validatePass!==Pass) {
        $("#errorValidatePass").text("Password and Validate Password do no match");  
        $('#errorValidatePass').css('opacity', '1');
      return;
    }
    
    // else if (validatePass!==Pass){
    //      $('#errorValidatePassSame').css('opacity', '1');
    //   return;
    // }
    let formData = new FormData();
    formData.append('Name', Name);
    formData.append('Email', Email);
    formData.append('Password', Pass);

    $.ajax({
      type: 'POST',
      url: '/server/register.php',
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
                  if (data==="true") {
                    Swal.fire({
                      title: 'Successful!',
                      text:
                        'Check your email for further assistance',
                      icon: 'success',
                    });
                  } else {
                    Swal.fire({
                      title: 'Error Occured!',
                      text:
                        'Email Already Exists',
                      icon: 'error',
                    });
                  }
                },
                error: function (data) {
                  Swal.fire({
                      title: 'Error Occured!',
                      text:
                        'Something went wrong ,Please Try Again',
                      icon: 'error',
                    });
                },
 
    });

  });
});

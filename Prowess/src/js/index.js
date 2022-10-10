import $ from 'jquery'
import "slick-carousel"

$(document).ready(function(){
    $('#menu').click(function(){
        $('.navbar').toggleClass('active');
    });

    $('.dropDown').click(function(){
        $('.container--footerMain').toggleClass('active');
    });
    $('.side2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        speed: 400,
        verticalSwiping: true,
        vertical: true,
        asNavFor: '.side1',
        rows:0
      });
      $('.side1').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        asNavFor: '.side2',
        dots: true,
        centerMode: true,
        vertical: true,
        focusOnSelect: true,
        rows:0
      });

      $('#formSubmit').click(function(e){
        e.preventDefault()

        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var query = $('#query').val();
        var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var phoneRegex = /^([+]\d{2})?\d{10}$/;

        if(name == ''){
          $('.nameError').html('*Name cannot be empty !');
          $('.nameError').css('color','red');
          $('#name').css("background-color","rgba(255, 0, 0, 0.5)");
          $('.nameError').show();
          $('.nameError').focus();

          return false;
        }
        else{
          $('#name').css("background-color","rgba(0, 255, 0, 0.5)");
          $('.nameError').hide();
        }

        if(phone == ''){
          $('.phoneError').html('*Phone Number cannot be empty !');
          $('.phoneError').css('color','red');
          $('#phone').css("background-color","rgba(255, 0, 0, 0.5)");
          $('.phoneError').show();
          $('.phoneError').focus();

          return false;
        }

        if (!phoneRegex.test(phone)) {
          $('.phoneError').html('Please enter valid mobile number');
          $('#phone').css("background-color","rgba(255, 0, 0, 0.5)");
          $('.phoneError').show();
          $('.phoneError').focus();
          return false;
      }

        else{
          $('#phone').css("background-color","rgba(0, 255, 0, 0.5)");
          $('.phoneError').hide(); 
        }

        if(email == ''){
          $('.emailError').html('*Email cannot be empty !');
          $('.emailError').css('color','red');
          $('#email').css("background-color","rgba(255, 0, 0, 0.5)");
          $('.emailError').show();
          $('.emailError').focus();

          return false;
        }

        if (!emailRegex.test(email)) {
          $('.emailError').html('Please enter valid email id');
          $('#email').css("background-color","rgba(255, 0, 0, 0.5)");
          $('.emailError').show();
          $('.emailError').focus();
          return false;
        }

        else{
          $('#email').css("background-color","rgba(0, 255, 0, 0.5)");
          $('.emailError').hide(); 
        }

        if(query == ''){
          $('.queryError').html('*Query cannot be empty !');
          $('.queryError').css('color','red');
          $('#query').css("background-color","rgba(255, 0, 0, 0.5)");
          $('.queryError').show();
          $('.queryError').focus();

          return false;
        }

        else{
          $('#query').css("background-color","rgba(0, 255, 0, 0.5)");
          $('.queryError').hide(); 
        }
      })

      $(".catBox").on('click',function(){
        if($(this).next(".details2").hasClass("active")){
          $(this).next(".details2").removeClass("active").slideUp();
          $(this).children("i").removeClass("fa-minus").addClass("fa-plus");
        }
        else{
          $(".products .details2").slideUp();
          $(".products .categeory .catBox i").removeClass("fa-minus").addClass("fa-plus");
          $(this).next(".details2").addClass("active").slideDown();
          $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
        };
      });
});
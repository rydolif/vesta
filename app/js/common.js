$(function() {

//-------------------------------активація форми по кліку---------------------------------------
  $('.form-group input').click(function() {
    $(this).addClass('focus');
  });


//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//----------------------------slider-------------------------------

 var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


 var swiper2 = new Swiper('.swiper-sell', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

 var swiper = new Swiper('.sales__slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



//----------------------------tabs2-------------------------------

  $('.sales-tabs').tabslet({
    animation: true,
    controls: {
      prev: '.sales__prev',
      next: '.sales__next'
    }
  });


  $('.team-tabs').tabslet({
    animation: true,
  });

  function serviceCount() {

    var count = $('.sales-tabs .list li').length;
    var current = $('.sales-tabs .list li.active').index() + 1;

    $('.sales__count').text(count);
    $('.sales__current').text(current);
  };

  
  serviceCount();

  $('.sales-tabs__prev').click(function(event) {
    serviceCount();
  });

  $('.sales__next').click(function(event) {
    serviceCount();
  });



//----------------------------tabs1-------------------------------

  $('.services-tabs').tabslet({
    animation: true,
    controls: {
      prev: '.services-tabs__prev',
      next: '.services-tabs__next'
    }
  });


  $('.team-tabs').tabslet({
    animation: true,
  });

  function serviceCount() {

    var count = $('.services-tabs .tabs-list li').length;
    var current = $('.services-tabs .tabs-list li.active').index() + 1;

    $('.count').text(count);
    // $('.current').text(current);

  }
  
  serviceCount();

  $('.services-tabs__prev').click(function(event) {
    serviceCount();
  });

  $('.services-tabs__next').click(function(event) {
    serviceCount();
  });


//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger-active');
    $('nav').toggleClass('nav-active');
    $('header').toggleClass('header-menu');
  });

//------------------------------------form-------------------------------------------
  $('input[type="tel"]').mask('+0 (000) 000-00-00');

  jQuery.validator.addMethod("phoneno", function(phone_number, element) {
     return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
  }, "Введите Ваш телефон");

  $(".form").each(function(index, el) {
    $(el).addClass('form-' + index);

    $('.form-' + index).validate({
      rules: {
        phone: {
          required: true,
          phoneno: true
        },
        name: 'required',
      },
      messages: {
        haus: "Введите улицу и номер дома",
        name: "Введите имя",
        phone: "Введите Ваш телефон",
        number: "Введите общую площадь",
        time: "Введите время звонка",
      },
      submitHandler: function(form) {
        var t = {
          name: jQuery('.form-' + index).find("input[name=name]").val(),
          haus: jQuery('.form-' + index).find("input[name=haus]").val(),
          phone: jQuery('.form-' + index).find("input[name=phone]").val(),
          number: jQuery('.form-' + index).find("input[name=number]").val(),
          time: jQuery('.form-' + index).find("input[name=time]").val(),
          subject: jQuery('.form-' + index).find("input[name=subject]").val()
        };
        ajaxSend('.form-' + index, t);
      }
    });

  });


  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }


  $(".form button").on("click", function(){
    setTimeout(function() {
      $('label.error').hide();
    }, 3000);
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header-active');
      }
  });


  //-------------------------скорость якоря---------------------------------------
  $(".nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 1}, 'slow', 'swing');
  //--------------------закриття меню при кліку на ссилку якоря--------------------
     $('.hamburger').removeClass('hamburger-active');
     $('.header').removeClass('header-menu');
     $('.nav').removeClass('nav-active');

  });


  //-------------------------скорость якоря---------------------------------------
  $(".garants").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 1}, 'slow', 'swing');
  });
  
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });


$(document).ready(function () {
  const hotelSwiper = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });
  const reviewsSwiper = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-buttom").toggleClass("navbar-buttom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  modalButton.on("click", openModal);
  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "We need your phone number to contact you",
      },
    },
  });
  $(".forma").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "Name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
      },
      phone: {
        required: "We need your phone number to contact you",
      },
    },
  });
  $(".formo").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlenght: "name must be at least 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "We need your phone number to contact you",
      },
    },
  });
  $(".forme").validate({
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  });
  $(document).ready(function () {
    $("#phone").mask("+7 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#telphone").mask("+7 (999) 999-99-99");
  });
  $(document).ready(function () {
    $("#telephone").mask("+7 (999) 999-99-99");
  });
  AOS.init();
});

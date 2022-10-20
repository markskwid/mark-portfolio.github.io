$(document).ready(function () {
  circleContainerAnimation();
  eduPageAnimation();
  projectPageAnimation();
  formSubmit();
  logoHoverAnimationContacts();
  animateHover();
  // overviewAnimation();
});

$(document).scroll(function () {
  var sec = $("#overview").position().top;
  var header2 = $("#overview").children("h2");
  var paragraph = $(".section-description");
  if ($(this).scrollTop() >= sec) {
    overviewAnimation();
  }
});

const circleContainerAnimation = () => {
  var parent = $("#icons-container");
  var ctr = 0;

  var child = $(".circle-container");
  for (let i = 0; i < child.length; i++) {
    if (i == ctr) {
      ctr++;
      setInterval(() => {
        child.addClass("animate__animated animate__zoomInDown");
        child.eq(i).css("animation-delay", i + "s");
        child.eq(i).css("visibility", "visible");
      }, 1000);
    }
  }
};

const overviewAnimation = () => {
  var header2 = $("#overview").children("h2");
  var paragraph = $(".section-description");
  let child = $(".over-container");
  let ctr = 0;

  $(header2)
    .css("visibility", "visible")
    .addClass("animate__animated animate__backInLeft");
  $(paragraph)
    .css("visibility", "visible")
    .addClass("animate__animated animate__backInLeft");
  for (let i = 0; i < child.length; i++) {
    if (i == ctr) {
      ctr++;
      setInterval(() => {
        child.addClass("animate__animated animate__backInLeft");
        child.eq(i).css("animation-delay", i + "s");
        child.eq(i).css("visibility", "visible");
      }, 2000);
    }
  }
};

const eduPageAnimation = () => {
  var ctr = 0;
  var child = $(".edu-container");
  for (let i = 0; i < child.length; i++) {
    if (i == ctr) {
      ctr++;
      setInterval(() => {
        child.addClass("animate__animated animate__bounceInLeft");
        child.eq(i).css("animation-delay", i + "s");
        child.eq(i).css("visibility", "visible");
      }, 1000);
    }
  }
};

const projectPageAnimation = () => {
  var ctr = 0;
  var child = $(".proj-container");
  for (let i = 0; i < child.length; i++) {
    if (i == ctr) {
      ctr++;
      setInterval(() => {
        child.addClass("animate__animated animate__fadeInLeftBig");
        child.eq(i).css("animation-delay", i + "s");
        child.eq(i).css("visibility", "visible");
      }, 1000);
    }
  }
};

const animateHover = () => {
  var element = $(".see-codes");
  var span = $(".show");
  var ctr = 0;
  var screenWidth = screen.width;
  for (let i = 0; i < element.length; i++) {
    if (i == ctr) {
      let flag = true;
      ctr++;
      $(element)
        .eq(i)
        .click(function () {
          flag = !flag;
          if (flag) {
            $(element).eq(i).css("width", "150px");
            setTimeout(() => {
              $(span).eq(i).show();
            }, 300);
          } else {
            $(element).eq(i).css("width", "30px");
            $(span).eq(i).hide();
          }
        });
    }
  }
};

const logoHoverAnimationContacts = () => {
  var element = $(".logo");
  var ctr = 0;
  for (let i = 0; i < element.length; i++) {
    if (i == ctr) {
      ctr++;
      $(element)
        .eq(i)
        .hover(
          () => {
            $(element).eq(i).addClass("animate__animated animate__tada");
          },
          () => {
            $(element).eq(i).removeClass("animate__animated animate__tada");
          }
        );
    }
  }
};

const formSubmit = () => {
  $("#my-form").submit(function (e) {
    e.preventDefault();
    let regexNumber = /[0-9] | [\W]/g;
    var myForm = $("#my-form");
    var email = $("#email");
    var fullname = $("#fullname");
    var comment = $("#comment");

    // for fullname
    if (fullname.val().length == 0 || !fullname.val().match(/^[A-Za-z\s]*$/g)) {
      fullname.css("border-color", "red");
      fullname.addClass("animate__animated animate__shakeY");
    } else {
      fullname.css("border-color", "#d1d7dc");
      fullname.removeClass("animate__animated animate__shakeY");

      // for email
      if (email.val().length < 8) {
        email.css("border-color", "red");
        email.addClass("animate__animated animate__shakeY");
      } else {
        email.css("border-color", "#d1d7dc");
        email.removeClass("animate__animated animate__shakeY");

        //for comments

        if (comment.val().length == 0) {
          comment.css("border-color", "red");
          comment.addClass("animate__animated animate__shakeY");
        } else {
          comment.css("border-color", "#d1d7dc");
          comment.removeClass("animate__animated animate__shakeY");
          // submitting form into netlify
          let myForm = document.getElementById("my-form");
          let formData = new FormData(myForm);
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => {
              $("#alert-box").addClass(
                "animate__animated animate__jackInTheBox"
              );
              $("#alert-box").removeClass("d-none");
              $("#submit-btn").addClass("animate__animated animate__zoomOut");
              setTimeout(() => $("#submit-btn").addClass("d-none"), 2000);
            })
            .catch((error) => alert(error));
          $("#my-form")[0].reset();
        }
      }
    }
  });
};

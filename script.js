(function () {
  "use strict";

  // Hide hero image if it fails to load (no file yet)
  var heroImg = document.querySelector(".hero-img");
  if (heroImg) {
    heroImg.onerror = function () {
      heroImg.style.display = "none";
    };
  }

  // Hide broken gallery images so grid looks clean until photos are added
  document.querySelectorAll(".gallery-grid img").forEach(function (img) {
    img.onerror = function () {
      img.style.display = "none";
    };
  });

  // Mobile menu
  var menuToggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  // Google Calendar: build URL and open in new tab
  // https://developers.google.com/calendar/create-events#quickadd
  function formatGoogleCalendarDate(date) {
    return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  }

  var form = document.getElementById("calendar-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var title = encodeURIComponent(
        document.getElementById("event-title").value.trim() || "Soul Studio"
      );
      var dateStr = document.getElementById("event-date").value;
      var startStr = document.getElementById("event-start").value;
      var endStr = document.getElementById("event-end").value;
      var desc = encodeURIComponent(
        document.getElementById("event-desc").value.trim()
      );

      if (!dateStr || !startStr || !endStr) {
        alert("Please fill in date and times.");
        return;
      }

      var start = new Date(dateStr + "T" + startStr);
      var end = new Date(dateStr + "T" + endStr);
      if (end <= start) {
        end.setDate(end.getDate() + 1);
      }
      var startEnc = formatGoogleCalendarDate(start);
      var endEnc = formatGoogleCalendarDate(end);

      var url =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" +
        title +
        "&dates=" +
        startEnc +
        "/" +
        endEnc +
        "&details=" +
        desc;

      window.open(url, "_blank", "noopener");
    });
  }

  // Optional: set default end time 1 hour after start
  var startInput = document.getElementById("event-start");
  var endInput = document.getElementById("event-end");
  if (startInput && endInput) {
    startInput.addEventListener("change", function () {
      if (!endInput.value) {
        var parts = startInput.value.split(":");
        var h = parseInt(parts[0], 10);
        var m = parts[1] || "00";
        h = (h + 1) % 24;
        endInput.value =
          (h < 10 ? "0" : "") + h + ":" + m;
      }
    });
  }
})();

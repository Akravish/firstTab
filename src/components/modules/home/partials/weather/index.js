export default {
  name: 'bgImg',
  data () {
    return {
      bgStyle: {
        background: 'url(' + require(`@/assets/img/media/bg-img/default-bg.jpg`) + ') no-repeat center',
        backgroundSize: 'cover'
      }
    }
  },
  created(){
    this.getBgImg();
  },
  methods: {
    getBgImg() {
      let date = new Date,
          month = date.getMonth(),
          day = date.getDate();

      let monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

      if (day < 10) {
        day = '0' + day;
      }

      let url = require('@/assets/img/media/bg-img/' + monthArray[month] + '/' + day + '.jpg');
      this.bgStyle.background = 'url(' + url + ') no-repeat center'
    }
  }
}


//-------------------
$(function() {
  function a(a) {
    c(a.coords.latitude, a.coords.longitude)
  }

  function b() {
    $("#loading").fadeIn(),
      setTimeout(function() {
        $("#loading").fadeOut(),
          setTimeout(function() {
            $("body").addClass("loaded error"),
              $("#error").text("Unable to determine your location").fadeIn()
          }, 500)
      }, 2e3)
  }

  function c(a, b) {
    if (Modernizr.localstorage) {
      var c = localStorage.getItem("weather_result"),
        e = new Date,
        g = new Date(localStorage.getItem("result_time"));
      c && e - g < 36e5 ? (c = JSON.parse(c),
        d(c)) : $.getJSON("https://api.wunderground.com/api/" + f + "/geolookup/conditions/forecast/q/" + a + "," + b + ".json?callback=?", function(a) {
        a.location ? (localStorage.setItem("weather_result", JSON.stringify(a)),
          localStorage.setItem("result_time", new Date),
          d(a)) : ($("#loading").fadeIn(),
          setTimeout(function() {
            $("#loading").fadeOut(),
              setTimeout(function() {
                $("body").addClass("loaded error"),
                  $("#error").text("Unable to get the weather").fadeIn()
              }, 500)
          }, 2e3))
      })
    } else
      $.getJSON("https://api.wunderground.com/api/" + f + "/conditions/forecast/q/" + a + "," + b + ".json?callback=?", function(a) {
        a.location ? d(a) : ($("#loading").fadeIn(),
          setTimeout(function() {
            $("#loading").fadeOut(),
              setTimeout(function() {
                $("body").addClass("loaded error"),
                  $("#error").text("Unable to get the weather").fadeIn()
              }, 500)
          }, 2e3))
      })
  }

  function d(a) {
    var b = a.current_observation.display_location.city,
      c = "&deg;",
      d = Math.round(a.current_observation.temp_c) + c,
      f = Math.round(a.current_observation.temp_f) + c,
      g = a.current_observation.icon;
    for (var h in a.forecast.simpleforecast.forecastday)
      var i = a.forecast.simpleforecast.forecastday[h],
        j = Math.round(i.high.celsius) + c,
        k = Math.round(i.high.fahrenheit) + c,
        l = Math.round(i.low.celsius) + c,
        m = Math.round(i.low.fahrenheit) + c,
        n = i.icon,
        o = i.date.weekday_short;
    $(".location").html(b),
      $(".weather").html(e(g)),
      $(".w_temp").html('<div class="temp" data-cel="' + d + '" data-fah="' + f + '"></div>'),
      null !== localStorage.getItem("temp-type") ? ($("#" + localStorage.getItem("temp-type")).parent().addClass("current"),
        $(".temp").html("c" == localStorage.getItem("temp-type") ? function() {
          return $(this).data("cel")
        } : function() {
          return $(this).data("fah")
        })) : ($("#c").parent().addClass("current"),
        $(".temp").html(function() {
          return $(this).data("cel")
        })),
      $(".temp-type").on("click", "li", function() {
        $("li.current").removeClass("current"),
          $(this).addClass("current"),
        Modernizr.localstorage && localStorage.setItem("temp-type", $(this).children(":first").attr("id")),
          $(".temp").html("c" == localStorage.getItem("temp-type") ? function() {
            return $(this).data("cel")
          } : function() {
            return $(this).data("fah")
          })
      });
    var p = $("#f").parent().hasClass("current");
    $(".temp").html(function() {
      return $(this).data(p ? "fah" : "cel")
    }),
      $("#loading").fadeIn(),
      setTimeout(function() {
        $("#loading").fadeOut(),
          setTimeout(function() {
            $("body").addClass("loaded")
          }, 500)
      }, 2e3),
      "f" == localStorage.getItem("dash__weatherformat") ? $(".temp").html($(".temp").attr("data-fah")) : "c" == localStorage.getItem("dash__weatherformat") && $(".temp").html($(".temp").attr("data-cel"))
  }

  function e(a) {
    var b = "2";
    return "sunny" == a && (b = "<i class='wi wi-day-sunny'></i>"),
    "rain" == a && (b = "<i class='wi wi-rain'></i>"),
    "clear" == a && (b = "<i class='wi wi-day-sunny'></i>"),
    "sleet" == a && (b = "<i class='wi wi-sleet'></i>"),
    "cloudy" == a && (b = "<i class='wi wi-cloudy'></i>"),
    "snow" == a && (b = "<i class='wi wi-snow'></i>"),
    "flurries" == a && (b = "<i class='wi wi-rain-mix'></i>"),
    "fog" == a && (b = "<i class='wi wi-fog'></i>"),
    "hazy" == a && (b = "<i class='wi wi-day-haze'></i>"),
    "chanceflurries" == a && (b = "<i class='wi wi-rain-mix'></i>"),
    "chancerain" == a && (b = "<i class='wi wi-rain'></i>"),
    "chancetstorms" == a && (b = "<i class='wi wi-lightning'></i>"),
    "chancesleet" == a && (b = "<i class='wi wi-sleet'></i>"),
    "chancesnow" == a && (b = "<i class=wi wi-snow'></i>"),
    "chancetstorms" == a && (b = "<i class='wi wi-storm-showers'></i>"),
    "partlycloudy" == a && (b = "<i class='wi wi-day-cloudy'></i>"),
    "partlysunny" == a && (b = "<i class='wi wi-day-cloudy'></i>"),
    "mostlycloudy" == a && (b = "<i class='wi wi-day-cloudy'></i>"),
    "tstorms" == a && (b = "<i class='wi wi-storm-showers'></i>"),
    "nt_sunny" == a && (b = "<i class='wi wi-day-sunny></i>"),
    "nt_clear" == a && (b = "<i class='wi wi-night-clear'></i>"),
    "nt_chancerain" == a && (b = "<i class='wi wi-rain'></i>"),
    "nt_chanceflurries" == a && (b = "<i class='wi wi-rain-mix'></i>"),
    "nt_chancesleet" == a && (b = "<i class='wi wi-sleet'></i>"),
    "nt_chancesnow" == a && (b = "<i class='wi wi-snow'></i>"),
    "nt_chancetstorms" == a && (b = "<i class='wi wi-storm-showers'></i>"),
    "nt_cloudy" == a && (b = "<i class='wi wi-cloudy'></i>"),
    "nt_mostlysunny" == a && (b = "<i class='wi wi-night-clear'></i>"),
    "nt_mostlycloudy" == a && (b = "<i class=wi wi-night-alt-cloudy'></i>"),
    "nt_partlysunny" == a && (b = "<i class='wi wi-night-alt-cloudy'></i>"),
    "nt_partlycloudy" == a && (b = "<i class='wi wi-night-alt-cloudy'></i>"),
    "nt_flurries" == a && (b = "<i class='wi wi-rain-mix'></i>"),
    "nt_fog" == a && (b = "<i class='wi wi-fog'></i>"),
    "nt_hazy" == a && (b = "<i class='wi wi-day-haze'></i>"),
    "nt_sleet" == a && (b = "<i class='wi wi-sleet'></i>"),
    "nt_rain" == a && (b = "<i class='wi wi-rain'></i>"),
    "nt_snow" == a && (b = "<i class='wi wi-snow'></i>"),
    "nt_tstorms" == a && (b = "<i class='wi wi-storm-showers'></i>"),
      b
  }
  var f = "faca357e3d78d552";
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(a, b, {
      enableHighAccuracy: !0
    });
  else if (geoPosition.init())
    geoPosition.getCurrentPosition(a, b, {
      enableHighAccuracy: !0
    });
  else {
    var g = geoplugin_latitude(),
      h = geoplugin_longitude();
    g && h ? c(g, h) : ($("#loading").fadeIn(),
      setTimeout(function() {
        $("#loading").fadeOut(),
          setTimeout(function() {
            $("body").addClass("loaded error"),
              $("#error").text("Unable to determine your location").fadeIn()
          }, 500)
      }, 5e3))
  }
});
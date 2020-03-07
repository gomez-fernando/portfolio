jQuery(document).ready(function($) {
  // translate

  // Preloader
  $(window).on("load", function() {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function() {
        $(this).remove();
      });
  });

  // welcome rotating texts
  $("#welcome .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 2000
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: { opacity: "show" },
    speed: 400
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container")
      .clone()
      .prop({ id: "mobile-nav" });
    $mobile_nav.find("> ul").attr({ class: "", id: "" });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function(e) {
      $(this)
        .next()
        .toggleClass("menu-item-active");
      $(this)
        .nextAll("ul")
        .eq(0)
        .slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function(e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Stick the header at top on scroll
  $("#header").sticky({ topSpacing: 0, zIndex: "50" });

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this)
            .closest("li")
            .addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }

        return false;
      }
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
});

//////////////
/*
	Name: jqueryTranslator
	Author: Antonio Laguna
	Twitter: @Belelros
	Website: http://www.funcion13.com
	Version: 1.1.1
*/
(function($, window, document, undefined) {
  var Translate = {
    initialize: function(pkg, options) {
      this.packages = [];
      this.loaded = $.Deferred();

      this.translatable = true;

      this.options = $.extend({}, $.fn.jqTranslate.options, options);
      var userLanguage = this.getUserLanguage();

      if (typeof pkg === "string") {
        this.packages.push(pkg);
      } else {
        this.packages = pkg;
      }

      if (this.isTranslatable(userLanguage)) {
        this.loadLanguages();
      } else {
        this.translatable = false;
      }

      return this.loaded.promise();
    },
    getUserLanguage: function() {
      var userLang =
        this.options.forceLang || navigator.language || navigator.userLanguage;
      $.defaultLanguage = userLang;

      userLang = userLang.replace(/_/, "-").toLowerCase();

      if (userLang.length > 3) {
        userLang =
          userLang.substring(0, 3) + userLang.substring(3).toUpperCase();
        this.languages = [
          userLang.substring(0, 2),
          userLang.substring(3).toUpperCase()
        ];
      } else {
        this.languages = [userLang];
      }

      $.fn.jqTranslate.userLang = userLang;
      return userLang;
    },
    isTranslatable: function(language) {
      if (this.options.defaultLang === language) {
        return false;
      } else {
        return $.inArray(language, this.options.skip) === -1;
      }
    },
    loadLanguages: function() {
      var loaded = 0,
        maxLoad = Translate.languages.length * Translate.packages.length;
      this.translatedStrings = {};

      $.each(Translate.packages, function(i, pkg) {
        var ePkg = pkg;

        $.each(Translate.languages, function(i, lang) {
          Translate.getLanguage(ePkg, lang)
            .done(Translate.storeLangFile)
            .always(function() {
              loaded++;
              if (loaded >= maxLoad) {
                Translate.loaded.resolve();
              }
            });
        });
      });
    },
    getLanguage: function(pkg, language) {
      var self = this,
        path = "",
        got = $.Deferred();

      if (self.options.path) {
        path = self.options.path + "/";
      }
      var url = path + [pkg, language].join("-") + ".json";

      $.ajax({
        url: url,
        dataType: "json",
        cache: self.options.cache,
        async: self.options.asyncLangLoad
      })
        .done(function(data) {
          got.resolve(data);
        })
        .fail(function() {
          if (self.options.fallbackLang) {
            url = path + [pkg, self.options.fallbackLang].join("-") + ".json";
            $.ajax({
              url: url,
              dataType: "json",
              cache: self.options.cache,
              async: self.options.asyncLangLoad
            }).done(function(data) {
              got.resolve(data);
            });
          } else {
            got.reject();
          }
        });

      return got;
    },
    storeLangFile: function(data) {
      $.extend(Translate.translatedStrings, data);
    },
    translate: function() {
      var elem = $(this),
        key = elem.data("translate");

      if (Translate.translatable) {
        if (Translate.translatedStrings[key]) {
          if (Translate.translatedStrings[key].length === undefined) {
            // The key have nested keys
            Translate.translateElement(
              elem,
              Translate.translatedStrings[key].text
            );
            delete Translate.translatedStrings[key].text;
            elem.attr(Translate.translatedStrings[key]);
          } else {
            Translate.translateElement(elem, Translate.translatedStrings[key]);
          }
        }
      }

      if (typeof Translate.options.onComplete === "function") {
        Translate.options.onComplete.apply(this, arguments);
      }

      return elem;
    },
    translateElement: function(elem, value) {
      if (elem.is("input") || elem.is("textarea")) {
        if (elem.is("[placeholder]")) {
          elem.attr("placeholder", value);
        } else {
          elem.val(value);
        }
      } else if (elem.is("optgroup")) {
        elem.attr("label", value);
      } else if (elem.is("img")) {
        elem.attr("alt", value);
      } else {
        elem.html(value);
      }
    }
  };

  $.fn.jqTranslate = function(pkg, options) {
    var self = this;
    Translate.initialize(pkg, options).done(function() {
      self.each(Translate.translate);
    });
    return this;
  };
  $.fn.jqTranslate.options = {
    asyncLangLoad: true,
    cache: true,
    defaultLang: null,
    fallbackLang: null,
    forceLang: null,
    onComplete: null,
    path: null,
    skip: []
  };
})(jQuery, window, document);

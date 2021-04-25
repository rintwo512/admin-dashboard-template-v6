
"use strict";

$(document).ready(function () {
  function initTextPopovers() {
    $('*[data-toggle="popover"]').each(function () {
      var mode = $(this).attr('data-pop-mode');
      var title = $(this).attr('data-pop-title');

      var _content = $(this).attr('data-pop-content');

      var position = $(this).attr('data-pop-position');
      var width = $(this).attr('data-pop-width');
      var avatar = $(this).attr('data-pop-avatar');
      var icon = $(this).attr('data-pop-icon');
      var iconColor = $(this).attr('data-pop-iconbg');
      var avatarHtml = '';
      var iconHtml = '';

      if (avatar != null && avatar != undefined) {
        avatarHtml = "\n                    <div class=\"h-avatar is-small\">\n                        <img class=\"avatar\" src=\"" + avatar + "\" alt=\"\">\n                    </div>\n                ";
      } else if (icon != null && icon != undefined) {
        iconHtml = "\n                    <div class=\"h-icon is-small is-" + iconColor + "\">\n                        <i class=\"" + icon + "\"></i>\n                    </div>\n                ";
      }

      $(this).webuiPopover({
        trigger: mode,
        width: width,
        animation: 'pop',
        placement: position,
        style: 'default',
        content: function content() {
          var template = "\n                        <div class=\"popover-head\">\n                            " + avatarHtml + "\n                            " + iconHtml + "\n                            <h4 class=\"dark-inverted\">" + title + "</h4>\n                        </div>\n                        <div class=\"popover-body\">\n                            <p>" + _content + "</p>\n                        </div>\n                    ";
          return template;
        }
      });
    });
  }

  initTextPopovers();

  function initUserPopovers() {
    $('*[data-user-popover]').each(function () {
      var e = $(this);
      var userRef = $(this).attr('data-user-popover');
      var mailIcon = feather.icons.mail.toSvg();
      var phoneIcon = feather.icons.phone.toSvg();
      var profileIcon = feather.icons['more-horizontal'].toSvg();
      $.ajax({
        url: 'assets/data/user.json',
        dataType: 'json',
        success: function success(data) {
          e.webuiPopover({
            trigger: 'hover',
            placement: 'auto',
            width: 300,
            padding: false,
            offsetLeft: 0,
            offsetTop: 20,
            animation: 'pop',
            style: 'profile',
            cache: false,
            content: function content() {
              var destroyLoader = setTimeout(function () {
                $('.loader-overlay').removeClass('is-active');
              }, 500);

              if (data[userRef].pic != null) {
                var html = "\n                                    <div class=\"profile-popover-block\">\n\n                                        <div class=\"loader-overlay is-active\">\n                                            <div class=\"loader is-loading\"></div>\n                                        </div>\n\n                                        <div class=\"profile-popover-wrapper\">\n                                            <div class=\"popover-avatar\">\n                                                <img class=\"avatar\" src=\"" + data[userRef].pic + "\">\n                                                <img class=\"badge\" src=\"" + data[userRef].badge + "\">\n                                            </div>\n                                            <div class=\"popover-meta\">\n                                                <span class=\"user-meta\">\n                                                    <span class=\"username\">" + data[userRef].name + "</span>\n                                                    <span class=\"location\">" + data[userRef].location + "</span>\n                                                </span>\n                                                <span class=\"job-title\">" + data[userRef].position + "</span>\n                                                <span class=\"bio\">" + data[userRef].bio + "</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"popover-actions\">\n                                            <a class=\"popover-icon\">\n                                                " + phoneIcon + "\n                                            </a>\n                                            <a class=\"popover-icon\">\n                                                " + mailIcon + "\n                                            </a>\n                                            <a class=\"popover-icon\">\n                                                " + profileIcon + "\n                                            </a>\n                                        </div>\n                                    </div>\n                                ";
              } else {
                var classes = new Array('is-danger', 'is-info', 'is-primary', 'is-success', 'is-warning', 'is-h-purple', 'is-h-blue', 'is-h-green', 'is-h-orange', 'is-h-red', 'is-h-green');
                var length = classes.length;
                var randomClass = classes[Math.floor(Math.random() * length)];
                var html = "\n\n                                    <div class=\"profile-popover-block\">\n\n                                        <div class=\"loader-overlay is-active\">\n                                            <div class=\"loader is-loading\"></div>\n                                        </div>\n\n                                        <div class=\"profile-popover-wrapper\">\n                                            <div class=\"popover-fake-avatar " + randomClass + "\">\n                                                <div class=\"fake-avatar\">\n                                                    <span>" + data[userRef].initials + "</span>\n                                                </div>\n                                                <img class=\"badge\" src=\"" + data[userRef].badge + "\">\n                                            </div>\n                                            <div class=\"popover-meta\">\n                                                <span class=\"user-meta\">\n                                                    <span class=\"username\">" + data[userRef].name + "</span>\n                                                    <span class=\"location\">" + data[userRef].location + "</span>\n                                                </span>\n                                                <span class=\"job-title\">" + data[userRef].position + "</span>\n                                                <span class=\"bio\">" + data[userRef].bio + "</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"popover-actions\">\n                                            <a class=\"popover-icon\">\n                                                " + phoneIcon + "\n                                            </a>\n                                            <a class=\"popover-icon\">\n                                                " + mailIcon + "\n                                            </a>\n                                            <a class=\"popover-icon\">\n                                                " + profileIcon + "\n                                            </a>\n                                        </div>\n\n                                    </div>\n                                ";
              }

              return html;
              return destroyLoader;
            }
          });
        }
      });
    });
  }

  initUserPopovers();
 
});
/* eslint-disable no-unused-vars */
/*global OS, Browser, isSoftwareAvailable */
(function () {
   if (isMobileSafariDetect(window.navigator.userAgent)) {
      /**
       * Добавляем при авторизации куку для iPadOS
       * @link https://online.sbis.ru/opendoc.html?guid=f883aa54-ef79-4831-99c6-a8ee841ae29a
       */
      var IPAD_COOKIE_KEY = 'machine_is_ipad';
      document.cookie = IPAD_COOKIE_KEY + '=true;path=/';
   }

   var GET_params = window.location.href.split('?').pop().split('&');
   for (var i = 0; i < GET_params.length; i++) {
      var param = GET_params[i].split('=');
      /**
       * При GET-параметре nocheck=1 не проверяем software
       * см. https://online.sbis.ru/opendoc.html?guid=6525b59d-4f6e-45fb-b8d0-11a370262dd8
       */
      if (param.shift() == 'nocheck' && param.pop() === '1') {
         return;
      }
   }

   if (!isSoftwareAvailable(window.navigator.userAgent)) {
      redirect();
   }

   /** Редирект на страницу диагностики */
   function redirect() {
      var RETURN_LINK_PREFIX = '?ret=';
      var DIAGNOSTIC_PAGE = '/cdn/Maintenance/1.0.9/html/diagnostic.html';
      var returnLink = window.location.href.split(window.location.host).pop();
      window.location.href = window.location.protocol + '//' + window.location.host + DIAGNOSTIC_PAGE + RETURN_LINK_PREFIX + returnLink;
   }

   function isMobileSafariDetect(userAgent) {
      var MAC_OS_REGEXP = /\bMac\s+OS\s+X\b/;
      var IOS_REGEXP = /(iPod|iPhone|iPad)/;
      return IOS_REGEXP.test(userAgent) || (MAC_OS_REGEXP.test(userAgent) && navigator && navigator.maxTouchPoints > 0);
   }
}());
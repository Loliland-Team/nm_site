(function () {
   /**
    * Добавляем при авторизации куку для iPadOS
    * @link https://online.sbis.ru/opendoc.html?guid=f883aa54-ef79-4831-99c6-a8ee841ae29a
    */
   var MAC_OS_REGEXP = /\bMac\s+OS\s+X\b/;
   var IOS_REGEXP = /(iPod|iPhone|iPad)/;
   var IPAD_COOKIE_KEY = 'machine_is_ipad';
   function isMobileSafariDetect(userAgent) {
      return IOS_REGEXP.test(userAgent) || (MAC_OS_REGEXP.test(userAgent) && navigator && navigator.maxTouchPoints > 0);
   }
   if (isMobileSafariDetect(window.navigator.userAgent)) {
      document.cookie = IPAD_COOKIE_KEY + '=true;path=/';
   }

   var userAgent = window.navigator.userAgent;
   var userOs = OS.detect(userAgent);
   var userBrowser = Browser.detect(userAgent);
   if (!userOs.isAvailable || !userBrowser.isAvailable) {
      redirect();
   }

   function redirect() {
      var RETURN_LINK_PREFIX = '?ret=';
      var DIAGNOSTIC_PAGE = '/cdn/Maintenance/1.0.5/html/diagnostic.html';
      var returnLink = window.location.href.split(window.location.host).pop();
      window.location.href = window.location.protocol + '//' + window.location.host + DIAGNOSTIC_PAGE + RETURN_LINK_PREFIX + returnLink;
   }
}());
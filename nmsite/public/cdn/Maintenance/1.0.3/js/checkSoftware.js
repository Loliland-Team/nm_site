(function () {
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
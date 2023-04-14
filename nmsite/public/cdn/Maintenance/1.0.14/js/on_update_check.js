/**
 * Инициализация PARK_PAGE_CHECK_PERIOD и запуск waitForUnlock - в html файле
  */
var PARK_PAGE_CHECK_PERIOD;

function getResourcesURL() {
   var
      e = /^\/([^]+)\/[^]*/.exec(window.location.pathname),
      t = e? e[1].split("/")[0] + "/": "";
   return window.location.protocol + "//" + window.location.host + "/" + t + "resources/version.xml";
}

function handleCheckResult() {
   if (this.readyState !== this.DONE)
      return;
   if (this.status === 503 || this.status === 504) {
      waitForUnlock();
   } else {
      location.reload();
   }
}

function checkServerState() {
   var xhr = new XMLHttpRequest;
   xhr.open("HEAD", getResourcesURL());
   xhr.onreadystatechange = handleCheckResult;
   xhr.send();
}

function waitForUnlock() {
   setTimeout(checkServerState, PARK_PAGE_CHECK_PERIOD);
}

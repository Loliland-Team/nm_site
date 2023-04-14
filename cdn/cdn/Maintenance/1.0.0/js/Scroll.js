(function() {
   var scrollContainer = document.querySelector('.controls-Scroll');
   var SHADOW_CLASS = {
      both: 'controls-Scroll_shadow_both',
      bottom: 'controls-Scroll_shadow_bottom',
      top: 'controls-Scroll_shadow_top',
   };

   scrollContainer.onscroll = onscroll;
   onscroll(null, scrollContainer);

   function onscroll(e, element) {
      var el = e ? e.target : element;
      var showTopShadow = el.scrollTop > 0;
      var showBottomShadow = (el.scrollTop + el.getBoundingClientRect().height) < el.scrollHeight;
      var removingClasses = [SHADOW_CLASS.top, SHADOW_CLASS.bottom, SHADOW_CLASS.both];

      if (!showTopShadow && !showBottomShadow) {
         return;
      }

      var addingClass = showTopShadow && showBottomShadow
         ? removingClasses.splice(2, 1)
         : showTopShadow
            ? removingClasses.splice(0, 1)
            : removingClasses.splice(1, 1);

      el.classList.add(addingClass[0]);
      el.classList.remove.apply(el.classList, removingClasses);
   }
})()

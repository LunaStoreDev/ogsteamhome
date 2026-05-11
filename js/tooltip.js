var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/* Requires jQuery
 *
 * This plugin will create div.jsTooltip elements (or congigure your own!) in body for every tooltip on the page. Some
 * basic CSS is applied automagically, but you'll want to style it on your own from there. This code will be applied to
 * every element in your .tooltip() selector, so giving it a common selector like '.tooltip' is ideal.
 *
 * Options:
 * - location: Where the tooltip should spawn in relation to it's parent
 * - offsetN: How many pixels to add
 * - trackMouse: Should we track the mouse cursor instead of the parent?
 * - suppressOnClick: Should we hide if a user clicks the target?
 * - suppressWhileToggled: Should we ignore events if the target has the 'toggled' class?
 * - tooltipClass: css class to apply to tooltip elements
 * - fadeSpeed:	Time (in milliseconds) to spend fading in/out. Set to 0 to disable.
 * - allowHover: Should we keep the tooltip open if we mouse directly on to the tooltip? (Your tooltip will need to spawn inside it's owner's box for this to work)
 * - horizontalSnap: Generally useless property that lets you snap to the nearest n pixels. Used for supernav, ensures we always align the nav against the diagonal lines.
 * - tooltipParent: More generally useless properties for supernav: Lets us specify which element to parent the tooltips to. YOU PROBABLY DON'T NEED THIS.
 */

(function( $ ){
	var methods = {

		init : function( options ) {

			var settings = $.extend( {
				'location'			: 'top',
				'offsetX'			: 0,
				'offsetY'			: -10,
				'trackMouse'		: false,
				'suppressOnClick'	: true,
				'suppressWhileToggled': true,
				'tooltipClass'		: 'jsTooltip',
				'fadeSpeed'			: 150,
				'allowHover'		: true,
				'horizontalSnap'	: false,
				'tooltipParent'		: 'body'
			}, options);




			return this.each(function(){
				$(this).bind('mouseenter.tooltip', methods.show);
				$(this).bind('mouseleave.tooltip', methods.hide);

				if( settings.suppressOnClick )
					$(this).bind('click.tooltip', methods.hide);

				var toolDiv = $('<div />');
				toolDiv.hide();
				toolDiv.addClass(settings.tooltipClass)
				toolDiv.css({
					position: 'absolute',
					'z-index': 500
				});
				toolDiv.html( $(this).data("tooltipContent") );
				$(settings.tooltipParent).get(0).appendChild(toolDiv.get(0));
				$(this).data("tooltip.element", toolDiv);
				$(this).data('tooltip.settings', settings);
			});

		},
		destroy : function() {

			return this.each(function(){
				$(window).unbind('.tooltip');
			})

		},
		reposition : function(event) {
			var toolDiv = $(this).data('tooltip.element');
			var newPosition = {};
			var settings = $(this).data('tooltip.settings');

			var parentPosition = $(this).offset();
			if( settings.tooltipParent != 'body' )
				parentPosition = $(this).position();

			if( settings.trackMouse )
			{
				newPosition = {
					left: event.pageX - toolDiv.outerWidth() / 2,
					top: event.pageY - toolDiv.outerHeight() + settings.offsetY
				};

			} else {
				switch( settings.location )
				{
					case 'top':
						newPosition = {
							left: parentPosition.left + settings.offsetX,
							top: parentPosition.top - toolDiv.outerHeight() + settings.offsetY
						};
						break;

					case 'bottom':
						var newLeft = parentPosition.left;
						if( settings.horizontalSnap )
							newLeft = newLeft - newLeft % settings.horizontalSnap + settings.offsetX;
						newPosition = {
							left: newLeft,
							top: parentPosition.top + $(this).outerHeight() + settings.offsetY
						};
						break;
				}
			}

			toolDiv.css(newPosition);
		},
		show : function() {
			var toolDiv = $(this).data('tooltip.element');
			var settings = $(this).data('tooltip.settings');

			if( settings.suppressWhileToggled && $(this).hasClass('toggled') )
				return false;

			if( settings.fadeSpeed > 0 )
			{
				toolDiv.stop(true, true);
				toolDiv.fadeTo( settings.fadeSpeed, 1 );
			}
			else
				toolDiv.show();

			if( settings.allowHover )
			{
				toolDiv.bind('mouseenter.tooltip', jQuery.proxy(methods.show, this));
				toolDiv.bind('mouseleave.tooltip', jQuery.proxy(methods.hide, this));
			}

			if( settings.trackMouse )
				$(this).bind('mousemove.tooltip', methods.reposition);
			else
				jQuery.proxy(methods.reposition, this)();

		},
		hide : function(event) {
			var toolDiv = $(this).data('tooltip.element');
			var settings = $(this).data('tooltip.settings');

			if( event['toElement'] == undefined )
				event['toElement'] = event['relatedTarget'];

			if( event['toElement'] == toolDiv[0] || event['toElement'] == this )
				return;

			if( settings.trackMouse )
				$(this).unbind('mousemove.tooltip');

			toolDiv.unbind('mouseenter.tooltip');
			toolDiv.unbind('mouseleave.tooltip');

			if( settings.fadeSpeed > 0 )
			{
				toolDiv.stop();
				toolDiv.fadeTo( settings.fadeSpeed, 0, function() { $(this).hide(); } );
			}
			else
				toolDiv.hide();
		}
	};

	$.fn.tooltip = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}

	};

})( jQuery );



}

/*
     FILE ARCHIVED ON 16:19:42 Feb 27, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:51:46 May 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 17.92
  load_resource: 315.55
  PetaboxLoader3.resolve: 304.581
  PetaboxLoader3.datanode: 10.123
*/
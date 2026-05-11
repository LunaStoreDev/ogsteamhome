var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");

// Custom error reporting to use whenever prototype is included
function ReportError( uri, identifier, message )
{
		new Ajax.Request('https://web.archive.org/web/20130228134616/http://store.steampowered.com/jserrorreport/',
	{
	    method:'post',
	    parameters: { 
	    	'identifier' : identifier,
			'error' : message, 
			'uri' : uri
		},
	    onSuccess: function(transport){
	    	//alert( 'error ok' );
			return;
	    },
	    onFailure: function(){
	    	//alert( 'error fail' );
			return;
		}
	});
}




}

/*
     FILE ARCHIVED ON 13:46:16 Feb 28, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:51:46 May 11, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.486
  load_resource: 163.069 (2)
  PetaboxLoader3.resolve: 118.784 (2)
  PetaboxLoader3.datanode: 40.268 (2)
*/
var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");

var g_oSuggestParams;

function EnableSearchSuggestions( elemTerm, navcontext, cc, l, strPackageXMLVersion )
{
	elemTerm = $(elemTerm);
	new Form.Element.DelayedObserver( elemTerm, 0.4, SearchTimeout );
	elemTerm.observe( 'keydown', SearchSuggestOnKeyDown.bindAsEventListener( null, elemTerm ) );
	elemTerm.observe( 'click', SearchSuggestClearDefaultSearchText.bind( null, elemTerm ) );
	elemTerm.observe( 'blur', SearchSuggestSetDefaultSearchText.bind( null, elemTerm ) );
   	g_oSuggestParams = {
		cc: cc,
		l:l,
		v: strPackageXMLVersion
	}
}
function SearchTimeout( elem, value )
{
	if ( value )
	{
		var parameters = {term: value, f: 'games' };
		Object.extend( parameters, g_oSuggestParams );
		new Ajax.Updater( 'search_suggestion_contents', 'https://web.archive.org/web/20130227161942/http://store.steampowered.com/search/suggest', 
				{ 
					parameters: parameters,
					method: 'GET',
					onComplete: function() {
						$('search_suggestion_contents').select('a.match').each( function (e) { e.observe( 'mouseover', SearchSuggestOnMouseOver.bindAsEventListener( null, e ) ); } ); 
						ShowSuggestionsAsNecessary(); 
					} 
				} );
	}
	else
	{
		$('search_suggestion_contents').update( '' );
		ShowSuggestionsAsNecessary();
	}
}

function ShowSuggestionsAsNecessary( bForceHide )
{
	var elem = $('searchterm_options');
	if ( $('search_suggestion_contents').childElements().length > 0 && !bForceHide )
	{
		ShowWithFade( elem );
	} 
	else 
	{
		HideWithFade( elem );
	}
}
function SearchSuggestOnKeyDown( event, elem )
{
	if ( event.keyCode == Event.KEY_ESC )
	{
		ShowSuggestionsAsNecessary( true );
	}
	else if ( event.keyCode == Event.KEY_RETURN
			|| event.keyCode == Event.KEY_UP
			|| event.keyCode == Event.KEY_DOWN )
	{
		var elemSuggestionCtn = $('searchterm_options' );
		if ( !elemSuggestionCtn.visible() || elemSuggestionCtn.hiding )
			return;

		var elemSuggestions = $('search_suggestion_contents');
		var elemCurSuggestion = elemSuggestions.down('.focus');
		var elemNewSuggestion = null;
		
		if ( event.keyCode == Event.KEY_RETURN )
		{
			if ( elemCurSuggestion )
			{
				window.location = elemCurSuggestion.href;
				event.stop();
			}
		}
		else
		{
			if ( event.keyCode == Event.KEY_UP )
			{
				if ( elemCurSuggestion )
					elemNewSuggestion = elemCurSuggestion.previous();
				if ( !elemNewSuggestion )
					elemNewSuggestion = elemSuggestions.down('a.match:last-child');
			}
			else if ( event.keyCode == Event.KEY_DOWN )
			{
				if ( elemCurSuggestion )
					elemNewSuggestion = elemCurSuggestion.next();
				if ( !elemNewSuggestion )
					elemNewSuggestion = elemSuggestions.down('a.match');
			}

			if ( elemNewSuggestion  )
			{
				if ( elemCurSuggestion )
					elemCurSuggestion.removeClassName( 'focus' );
				elemNewSuggestion.addClassName( 'focus' );
			}

			//client webkit will move cursor on up/down
			event.stop();
		}

	} 
}
function SearchSuggestOnMouseOver( event, elem )
{
	elem.siblings().invoke( 'removeClassName', 'focus');
	elem.addClassName( 'focus' );
}

function SearchSuggestClearDefaultSearchText( elem )
{
	ShowSuggestionsAsNecessary();
	var text = elem.value;
	if ( text == 'search the store' )
	{
		elem.value = '';
		$(elem).removeClassName( 'default' );
	}
}
function SearchSuggestSetDefaultSearchText( elem )
{
	ShowSuggestionsAsNecessary( true );
	var text = elem.value;
	if ( text == '' )
	{
		elem.value = 'search the store';
		$(elem).addClassName( 'default' );
	}
}
function SearchSuggestCheckTerm( theform )
{
	if ( theform.term.value == 'search the store' )
	{
		theform.term.value = '';
	}
	return true;
}


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
  capture_cache.get: 0.501
  load_resource: 99.879
  PetaboxLoader3.resolve: 88.101
  PetaboxLoader3.datanode: 10.539
*/
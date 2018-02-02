//'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

// Load a dummy json file using the fetch API

jQuery(document).ready(function($){
  var tabtab = {};
  var dates = [];
  var showingBubbles = 1;
  var timelines = $('.cd-horizontal-timeline'),
      eventsMinDistance = 60;
      navigate=document.getElementsByClassName("buttons")[0].children;

  var promise3 = new Promise((resolve, reject) => {
    fetch('data/dummy.json')
      // this promise will be fulfilled when the json fill will be
      .then(function (response){
          // if we could load the resource, parse it
          if( response.ok )
              return response.json();
          else // if not, send some error message as JSON data
              return {data: "JSON file not found"};

      })
      // in case of invalid JSON (parse error) send some error message as JSON data
      .catch( function (error){
          return {data: "Invalid JSON"};
      })
      // this promise will be fulfilled when the json will be parsed
      .then(function (json) {
        for (var i=0; i<json.dates.length; i++){
          var newLi=document.createElement('li');
          var newA=document.createElement('a');
          dates.push(json.dates[i].date)
          newA.innerHTML=json.dates[i].date;
          newA.setAttribute("href","#0");
          newA.setAttribute("data-date",json.dates[i].date);
          if (i==0){newA.setAttribute("class","selected");}
          else{newA.setAttribute("class","timelineEvent");}
          newLi.appendChild(newA);
          document.getElementsByClassName('timeline-dates')[0].appendChild(newLi);

          newLi=document.createElement('li');
          for (var j=0; j<json.dates[i].event.length; j++){
            var newBq=document.createElement('blockquote');
            newBq.innerHTML=json.dates[i].event[j];
            newLi.appendChild(newBq);
          };
          if (i==0){newLi.setAttribute("class","selected");}
          newLi.setAttribute("data-date",json.dates[i].date);
          document.getElementsByClassName('timeline-events')[0].appendChild(newLi);
          tabtab[json.dates[i].date]=json.dates[i].tableau;
        }
        sessionStorage.setItem('tab', tabtab[json.dates[0].date]);
        resolve(tabtab);

          /*document.querySelector('#data')
              .textContent = json.dates;*/
      });
    });
    promise3.then(values => {
      var peloton = document.createElement("object");
      peloton.setAttribute("data","peloton.html");
      peloton.setAttribute("width","80%");
      peloton.setAttribute("height","100%");
      document.getElementsByClassName("peloton")[0].appendChild(peloton);
      (timelines.length > 0) && initTimeline(timelines);

        for (var i=0; i<dates.length;i++) {
          if (document.getElementsByClassName('timeline-events')[0].childNodes[i+1].classList[0]=='selected'){
            var curDisp=document.getElementsByClassName('timeline-events')[0].childNodes[i+1];
          }
        }
        for (var i=1; i<curDisp.childNodes.length; i++) $(curDisp.childNodes[i]).hide();
        var i=0;
        setInterval(
          ()=>{
            $(curDisp.childNodes[i]).fadeOut(1000,()=>{
              if (i==curDisp.childNodes.length-1)  i=0;
              else i+=1;
              $(curDisp.childNodes[i]).fadeIn(1000)
            })
          }, 20000
      );
    });

	function initTimeline(timelines) {
		timelines.each(function(){
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components
			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
      timelineComponents['emptyingLine'] = timelineComponents['eventsWrapper'].children('.emptying-line');
			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['eventsContent'] = timeline.children('.events-content');

			//assign a left postion to the single events along the timeline
			setDatePosition(timelineComponents, eventsMinDistance);
			//assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			//detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'next');
			});
			//detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
				event.preventDefault();
				updateSlide(timelineComponents, timelineTotWidth, 'prev');
			});
			//detect click on the a single event - show new event content
			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
				event.preventDefault();
        try {
          document.getElementsByClassName('origin')[0].setAttribute('class','timelineEvent')
          document.getElementsByClassName('older-event')[0].setAttribute('class','timelineEvent')
        }
        catch(error){}
				timelineComponents['timelineEvents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderEvents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
        if (($(this)[0].dataset.date)==dates[0]) timelineComponents['emptyingLine'][0].setAttribute('class','emptying-line hidden');
        else {
          timelineComponents['emptyingLine'][0].setAttribute('class','emptying-line');
          timelineComponents['timelineEvents'][dates.indexOf(parseInt($(this)[0].dataset.date))-1].setAttribute('class','timelineEvent origin');
          updateFilling($(timelineComponents['timelineEvents'][dates.indexOf(parseInt($(this)[0].dataset.date))-1]), timelineComponents['emptyingLine'], timelineTotWidth);
        }
        updateVisibleContent($(this), timelineComponents['eventsContent']);
        sessionStorage.setItem('tab', tabtab[$(this).data('date')]);
        updateContent();
			});

			//on swipe, show next/prev event content
			timelineComponents['eventsContent'].on('swipeleft', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			timelineComponents['eventsContent'].on('swiperight', function(){
				var mq = checkMQ();
				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});

			//keyboard navigation
			$(document).keyup(function(event){
				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
					showNewContent(timelineComponents, timelineTotWidth, 'prev');
				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'next');
				}
			});
		});
	}

	function updateSlide(timelineComponents, timelineTotWidth, string) {
		//retrieve translateX value of timelineComponents['eventsWrapper']
		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
		//translate the timeline to the left('next')/right('prev')
		(string == 'next')
			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
	}

	function showNewContent(timelineComponents, timelineTotWidth, string) {
		//go from one event to the next/previous one
		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

		if ( newContent.length > 0 ) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderEvents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
		}
	}

	function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
		//translate timeline to the left/right according to the position of the selected event
		var eventStyle = window.getComputedStyle(event.get(0), null),
			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
        }
	}

	function translateTimeline(timelineComponents, value, totWidth) {
		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; //only negative translate value
		value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
		setTransformValue(eventsWrapper, 'translateX', value+'px');
		//update navigation arrows visibility
		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	}

	function updateFilling(selectedEvent, filling, totWidth) {
		//change .filling-line length according to the selected event
    console.log(selectedEvent)
		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventLeft = eventStyle.getPropertyValue("left"),
			eventWidth = eventStyle.getPropertyValue("width");
		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
		var scaleValue = eventLeft/totWidth;
		setTransformValue(filling.get(0), 'scaleX', scaleValue);

	}

	function setDatePosition(timelineComponents, min) {
		for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
		    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
		    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
		    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
		}
	}

	function setTimelineWidth(timelineComponents, width) {
		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
			timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
			timeSpanNorm = Math.round(timeSpanNorm) + 4,
			totalWidth = timeSpanNorm*width;
		timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

		return totalWidth;
	}

	function updateVisibleContent(event, eventsContent) {
		var eventDate = event.data('date'),
			visibleContent = eventsContent.find('.selected'),
			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-left';
		} else {
			var classEnetering = 'selected enter-left',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			visibleContent.removeClass('leave-right leave-left');
			selectedContent.removeClass('enter-left enter-right');
		});
		/*eventsContent.css('height', selectedContentHeight+'px');*/
    if (showingBubbles==0){
      document.getElementsByClassName('selected')[1].setAttribute('class','');
      for (var j=0; j<document.getElementsByClassName('map')[0].childNodes.length; j++){
        if (document.getElementsByClassName('map')[0].childNodes[j].dataset.date==eventDate){
          document.getElementsByClassName('map')[0].childNodes[j].setAttribute('class','selected');
        }
      }
    }
	}

	function updateOlderEvents(event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	}

	function getTranslateValue(timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
         		timelineStyle.getPropertyValue("-moz-transform") ||
         		timelineStyle.getPropertyValue("-ms-transform") ||
         		timelineStyle.getPropertyValue("-o-transform") ||
         		timelineStyle.getPropertyValue("transform");

        if( timelineTranslate.indexOf('(') >=0 ) {
        	var timelineTranslate = timelineTranslate.split('(')[1];
    		timelineTranslate = timelineTranslate.split(')')[0];
    		timelineTranslate = timelineTranslate.split(',');
    		var translateValue = timelineTranslate[4];
        } else {
        	var translateValue = 0;
        }

        return Number(translateValue);
	}

	function setTransformValue(element, property, value) {
		element.style["-webkit-transform"] = property+"("+value+")";
		element.style["-moz-transform"] = property+"("+value+")";
		element.style["-ms-transform"] = property+"("+value+")";
		element.style["-o-transform"] = property+"("+value+")";
		element.style["transform"] = property+"("+value+")";
	}


	function parseDate(events) {
		var dateArrays = [];
		events.each(function(){
			dateArrays.push($(this).data('date'));
		});
	    return dateArrays;
	}

	function parseDate2(events) {
		var dateArrays = [];
		events.each(function(){
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { //only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
	    return dateArrays;
	}

	function daydiff(first, second) {
	    return Math.round((second-first));
	}

	function minLapse(dates) {
		//determine the minimum distance among events
		var dateDistances = [];
		for (i = 1; i < dates.length; i++) {
		    var distance = daydiff(dates[i-1], dates[i]);
		    dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	}


	function elementInViewport(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while(el.offsetParent) {
		    el = el.offsetParent;
		    top += el.offsetTop;
		    left += el.offsetLeft;
		}

		return (
		    top < (window.pageYOffset + window.innerHeight) &&
		    left < (window.pageXOffset + window.innerWidth) &&
		    (top + height) > window.pageYOffset &&
		    (left + width) > window.pageXOffset
		);
	}

	function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}

  navigate[0].addEventListener('click',()=>{
    event.preventDefault();
    if (navigate[0].classList[1]=='active') {
      $(document.getElementsByClassName('degrader-bandeau')[0]).fadeIn(1000)
      $(document.getElementsByClassName('maillots')[0]).fadeIn(1000)
      showingBubbles=1-showingBubbles;
      updateButtons();
      updateContent();
    }
  },false)

  navigate[1].addEventListener('click',()=>{
    event.preventDefault();
    if (navigate[1].classList[1]=='active') {
      $(document.getElementsByClassName('degrader-bandeau')[0]).fadeOut(1000)
      $(document.getElementsByClassName('maillots')[0]).fadeOut(1000)
      for (var i in document.getElementsByClassName('maillots'))
      showingBubbles=1-showingBubbles;
      updateButtons();
      updateContent();
    }
  },false)

  function updateButtons() {
    var title = document.createElement('img');
    if (showingBubbles==1){
      navigate[0].setAttribute("class","to-new inactive");
      navigate[1].setAttribute("class","to-new active");
      title.setAttribute('src','./img/titre-peloton.png');
    }
    else{
      navigate[1].setAttribute("class","to-new inactive");
      navigate[0].setAttribute("class","to-new active");
      title.setAttribute('src','./img/titre-map.png');
      peloton=document.createElement('ol');
      peloton.setAttribute('class','map');
      for (var i=0; i<dates.length; i++){
        newLi=document.createElement('img');
        newLi.setAttribute('src','./img/maps/'+dates[i]+'-FR.png');
        if(dates[i]==document.getElementsByClassName('selected')[0].dataset.date) newLi.setAttribute('class','selected');
        newLi.setAttribute('data-date',dates[i]);
        peloton.appendChild(newLi);
      }
    }
    document.getElementsByClassName('page-title')[0].replaceChild(title,document.getElementsByClassName('page-title')[0].firstChild)
    var replacing1 = document.createElement('img');
    var replacing2 = document.createElement('img');
    if (navigate[0].classList[1]=='active') replacing1.setAttribute('src','./img/icon-peloton-off.png');
    else replacing1.setAttribute('src','./img/icon-peloton-on.png');
    navigate[0].replaceChild(replacing1,navigate[0].firstChild);
    if (navigate[1].classList[1]=='active') replacing2.setAttribute('src','./img/icon-map-off.png');
    else replacing2.setAttribute('src','./img/icon-map-on.png');
    navigate[1].replaceChild(replacing2,navigate[1].firstChild);
  }

  function updateContent(){
    if (showingBubbles==1){
      peloton = document.createElement("object");
      peloton.setAttribute("data","peloton.html");
      peloton.setAttribute("width","80%");
      peloton.setAttribute("height","100%");
      for (var i=0; i<dates.length;i++) {
        if (document.getElementsByClassName('timeline-events')[0].childNodes[i+1].classList[0]=='selected'){
          var curDisp=document.getElementsByClassName('timeline-events')[0].childNodes[i+1];
          console.log(curDisp);
        }
      }
      for (var i=1; i<curDisp.childNodes.length; i++) $(curDisp.childNodes[i]).hide();
      var i=0;
      let wat=setInterval(call,20000);

    function call(){
      $(curDisp.childNodes[i]).fadeOut(100,()=>{
        if (i==curDisp.childNodes.length-1)  i=0;
        else i+=1;
        $(curDisp.childNodes[i]).fadeIn(100)
      });
    }
  }


      /*peloton=document.createElement('img');
      peloton.setAttribute('src','./img/maps/'+document.getElementsByClassName('selected')[0].dataset.date+'-FR.png');
      document.getElementsByClassName("peloton")[0].replaceChild(peloton,document.getElementsByClassName("peloton")[0].firstChild);*/
    document.getElementsByClassName("peloton")[0].replaceChild(peloton,document.getElementsByClassName("peloton")[0].firstChild);
  }



  promise3.catch((error)=>{console.log("upsy")});
});

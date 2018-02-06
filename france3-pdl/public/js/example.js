//'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts

// Load a dummy json file using the fetch API

jQuery(document).ready(function($){
  var tabtab = {};
  var dates = [];
  var showingBubbles = 0;
  var timelines = $('.cd-horizontal-timeline'),
      eventsMinDistance = 60;
      lines=document.getElementsByClassName('line');
  var curDisp;
      cur=0;
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

          newLi=document.createElement('li');
          newLi.setAttribute('data-date',json.dates[i].date)
          if (i==0){newLi.setAttribute("class","selected");}
          newMaillot=document.createElement('div');
          newMaillot.setAttribute('class','jaune');
          var newImg=document.createElement('img');
          newImg.setAttribute('src','./img/maillots-jaune.png');
          newMaillot.appendChild(newImg);
          var newDiv=document.createElement('div');
          newDiv.setAttribute('class','legend');
          var newSpan = document.createElement('span');
          var newP = document.createElement('p');
          newSpan.innerHTML='vainqueur';
          newP.setAttribute('class','vainqueur');
          console.log(json.dates[i].winner.name)
          newP.innerHTML=json.dates[i].winner.name+'<br/>'+json.dates[i].winner.fName+'<br/>'+json.dates[i].winner.nation;
          newDiv.appendChild(newSpan);
          newDiv.appendChild(newP);
          newMaillot.appendChild(newDiv);
          newLi.appendChild(newMaillot);
          var newDivers = document.createElement('div');
          newDivers.setAttribute('class','divers');
          try {
          newMaillot=document.createElement('div');
          newMaillot.setAttribute('class','vert');
          var newImg=document.createElement('img');
          newImg.setAttribute('src','./img/maillots-vert.png');
          newMaillot.appendChild(newImg);
          var newDiv=document.createElement('div');
          newDiv.setAttribute('class','legend');
          var newSpan = document.createElement('span');
          var newP = document.createElement('p');
          newSpan.innerHTML='meilleur<br/>grimpeur';
          newP.setAttribute('class','climb');
          newP.innerHTML=json.dates[i].climber.name+'<br/>'+json.dates[i].climber.fName+'<br/>'+json.dates[i].climber.nation;
          newDiv.appendChild(newSpan);
          newDiv.appendChild(newP);
          newMaillot.appendChild(newDiv);
          newDivers.appendChild(newMaillot);
          }
          catch(error){}
          try{
          newMaillot=document.createElement('div');
          newMaillot.setAttribute('class','pois');
          var newImg=document.createElement('img');
          newImg.setAttribute('src','./img/maillots-pois.png');
          newMaillot.appendChild(newImg);
          var newDiv=document.createElement('div');
          newDiv.setAttribute('class','legend');
          var newSpan = document.createElement('span');
          var newP = document.createElement('p');
          newP.innerHTML=json.dates[i].sprinter.name+'<br/>'+json.dates[i].sprinter.fName+'<br/>'+json.dates[i].sprinter.nation;
          newSpan.innerHTML='meilleur<br/>sprinteur';
          newP.setAttribute('class','sprint');
          newDiv.appendChild(newSpan);
          newDiv.appendChild(newP);
          newMaillot.appendChild(newDiv);
          newDivers.appendChild(newMaillot);
          }
          catch(error){}
          newLi.appendChild(newDivers)
          document.getElementsByClassName('maillots')[0].appendChild(newLi);
          tabtab[json.dates[i].date]=json.dates[i].tableau;
        }
        sessionStorage.setItem('tab', tabtab[json.dates[0].date]);
        resolve(tabtab);

          /*document.querySelector('#data')
              .textContent = json.dates;*/
      });
    });
    promise3.then(values => {
      (timelines.length > 0) && initTimeline(timelines);

        for (var i=0; i<dates.length;i++) {
          if (document.getElementsByClassName('timeline-events')[0].childNodes[i+1].classList[0]=='selected'){
            curDisp=document.getElementsByClassName('timeline-events')[0].childNodes[i+1];
          }
        }
        navigate[1].addEventListener('click',createBubbles());
        for (var i=1; i<curDisp.childNodes.length; i++) $(curDisp.childNodes[i]).hide();
        setInterval(call, 30000);
      createMap();
    });

  function createMap(){
    document.getElementsByClassName('page-title')[0].firstChild.setAttribute('src','./img/titre-map.png')
    showingBubbles=0;
    var place = document.getElementsByClassName('peloton')[0];
    while (place.firstChild) {
        place.removeChild(place.firstChild);
    }
    navigate[0].addEventListener('click',createBubbles);
    navigate[1].removeEventListener('click',createMap);
    navigate[0].setAttribute('class','to-new active');
    navigate[1].setAttribute('class','to-new inactive');
    navigate[1].firstChild.setAttribute('src','./img/icon-map-ON.png');
    navigate[0].firstChild.setAttribute('src','./img/icon-peloton-OFF.png');
    $(document.getElementsByClassName('degrader-bandeau')[0]).fadeOut(1000);
    $(document.getElementsByClassName('maillots')[0]).fadeOut(1000);
    for (var i = 0; i<lines.length; i++) $(lines[i]).hide();
    var peloton=document.createElement('ol');
    peloton.setAttribute('class','map');
    for (var i=0; i<dates.length; i++){
      newLi=document.createElement('li');
      newImg=document.createElement('img');
      newImg.setAttribute('src','./img/maps/'+dates[i]+'-FR.png');
      if(dates[i]==document.getElementsByClassName('selected')[0].dataset.date) newLi.setAttribute('class','selected');
      newImg.setAttribute('data-date',dates[i]);
      newImg.setAttribute('class','map-visual');
      newA=document.createElement('a');
      newImg3=document.createElement('img');
      newImg3.addEventListener('mouseover',()=>{document.getElementsByClassName('map-popup')[0].setAttribute('style','display:flex;');})
      newImg3.addEventListener('mouseout',()=>{document.getElementsByClassName('map-popup')[0] .setAttribute('style','display:none;');})
      newImg3.setAttribute('src','./img/icon-button-i.png');
      newImg3.setAttribute('class','info');
      newA.appendChild(newImg3);
      newImg2=document.createElement('img');
      newImg2.setAttribute('class','legend-mapW')
      newImg2.setAttribute('src','./img/legend-mapW.png');
      newLi.appendChild(newImg2); 
      newA.addEventListener('mouseover',()=>{newA.setAttribute('style','display:hover;')})
      newLi.appendChild(newA);
      newLi.appendChild(newImg);
      newImg2=document.createElement('img');
      newImg2.setAttribute('src','./img/chrono/legende-carteFR'+dates[i]+'.png');
      newImg2.setAttribute('class','chrono');
      newLi.appendChild(newImg2);
      peloton.appendChild(newLi);
    }
    document.getElementsByClassName('peloton')[0].appendChild(peloton);
  }

  function createBubbles(){
    document.getElementsByClassName('page-title')[0].firstChild.setAttribute('src','./img/titre-peloton.png')
    showingBubbles=1;
    var place = document.getElementsByClassName('peloton')[0];
    while (place.firstChild) {
        place.removeChild(place.firstChild);
    }
    navigate[1].addEventListener('click',createMap);
    navigate[0].removeEventListener('click',createBubbles);
    navigate[0].setAttribute('class','to-new inactive');
    navigate[1].setAttribute('class','to-new active');
    navigate[1].firstChild.setAttribute('src','./img/icon-map-OFF.png');
    navigate[0].firstChild.setAttribute('src','./img/icon-peloton-ON.png');
    $(document.getElementsByClassName('degrader-bandeau')[0]).fadeIn(1000);
    $(document.getElementsByClassName('maillots')[0]).fadeIn(1000);
    for (var i = 0; i<lines.length; i++) $(lines[i]).show();
    newA=document.createElement('a');
    newImg3=document.createElement('img');
    newImg3.addEventListener('mouseover',()=>{document.getElementsByClassName('bubbles-popup')[0].setAttribute('style','display:flex;');})
    newImg3.addEventListener('mouseout',()=>{document.getElementsByClassName('bubbles-popup')[0] .setAttribute('style','display:none;');})
    newImg3.setAttribute('src','./img/icon-button-i.png');
    newImg3.setAttribute('class','info');
    newA.appendChild(newImg3);
    place.appendChild(newA);
    peloton = document.createElement("object");
    peloton.setAttribute("data","peloton.html");
    peloton.setAttribute("width","80%");
    peloton.setAttribute("height","100%");
    newImg = document.createElement('img');
    for (var i=0; i<dates.length;i++) {
      if (document.getElementsByClassName('timeline-events')[0].childNodes[i+1].classList[0]=='selected'){
        curDisp=document.getElementsByClassName('timeline-events')[0].childNodes[i+1];
      }
    }
    newImg.setAttribute('class','legend-map');
    newImg.setAttribute('src','./img/legend-map.png');
    place.appendChild(peloton);
    place.appendChild(newImg);

  }


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
        var curDispfat=document.getElementsByClassName('timeline-events')[0].childNodes;
        for (var i=1; i<curDispfat.length; i++){
          if (curDispfat[i].getAttribute('class')=='selected enter-right' || curDispfat[i].getAttribute('class')=='selected enter-left') curDisp=curDispfat[i];
        }
        for (var i=1; i<curDisp.childNodes.length; i++) $(curDisp.childNodes[i]).hide();
        cur=0;
        let wat=setInterval(call,30000);
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

	/*function parseDate2(events) {
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
	}*/

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

    function call(){
      console.log(curDisp)
      $(curDisp.childNodes[cur]).fadeOut(100,()=>{
        $(curDisp.childNodes[cur]).fadeIn(100)
      });
      if (cur==curDisp.childNodes.length-1)  cur=0;
      else cur+=1;
    }

    document.getElementsByClassName('bubbles-popup')[0].addEventListener('mouseover',()=>{document.getElementsByClassName('bubbles-popup')[0].setAttribute('style','display:flex;');})
    document.getElementsByClassName('bubbles-popup')[0].addEventListener('mouseout',()=>{document.getElementsByClassName('bubbles-popup')[0] .setAttribute('style','display:none;');})

    document.getElementsByClassName('map-popup')[0].addEventListener('mouseover',()=>{document.getElementsByClassName('map-popup')[0].setAttribute('style','display:flex;');})
    document.getElementsByClassName('map-popup')[0].addEventListener('mouseout',()=>{document.getElementsByClassName('map-popup')[0] .setAttribute('style','display:none;');})

  promise3.catch((error)=>{console.log("upsy")});
});

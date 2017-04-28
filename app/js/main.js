$(function () {
    var ScreenWidth = $(window).width(),
        ScreenHeight = $(window).height(),
        headerHeight = $('.header').outerHeight(),
        coefficient = 2.2,
        beforeColor = '#eceff1',
        color = '#3495d1',
        numberBeforeColor = '#b7c4ca',
        numberColor = '#fff';

    //обработка тачей
    if (isTouch()) {
        $('html').addClass('touch');
    }
    else{
        $('html').addClass('no-touch');
    }
    function isTouch(){
        try {
            document.createEvent("TouchEvent");
            return true;
        }
        catch (e){
            return false;
        }
    }

    /*$('section').outerHeight(ScreenHeight);*/
    /*$('.js-centring').each(function(){
        var left = -$(this).outerWidth()/2;
        $(this).css({'margin-left': left});
    });*/

    setTimeout(function(){
        $('.js-fade-in').addClass('fade-in');
    },500);

    //header scroll
    $(window).scroll(function (){
        if($(this).scrollTop() > 0){
            $(".header").addClass('active');
        } else {
            $(".header").removeClass('active');
        }
    });

    if($(window).scrollTop() > 0){
        $(".header").addClass('active');
    } else {
        $(".header").removeClass('active');
    }


    function trackShow(){
        var companyWrap = $('.company-wrap').outerHeight(),
            companImg = $('.company-img');
        if((companyWrap + headerHeight + companImg.outerHeight()) - companImg.outerHeight()/2.8 > ScreenHeight){
            companImg.hide();
        }
        else{
            companImg.show();
        }
    }


    /*=================SCROLL-MAGIC===============*/

    /*-sections-vars-*/
    var section1 = '#section1';


    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 0,
            tweenChanges: true,
            duration: ScreenHeight
        }
    });

    // Create scene
    $("section").each(function(index){

        if(index < $("section").length-1){
            new ScrollMagic.Scene({
                triggerElement: this
            })
                .setPin(this)
                .addTo(ctrl);
        }

    });

    /*===Section1===*/
    var title1 = '.title1';

    var s1Tween = new TimelineMax();
    /*s1Tween.from(title1, 0.5, { y: -50, opacity: 0, ease:Linear.easeNone});*/

    // Create scene1
    var scene1 = new ScrollMagic.Scene({
        triggerElement: section1
    })
        .addTo(ctrl);


    /*===Section2===*/
    var clouds = '#clouds',
        ship = '#ship',
        sea = '#sea';
    var title2 = '.title2';

    var s2Tween = new TimelineMax();
    s2Tween.from(title2, 0.5, { y: -50, opacity: 0, ease:Linear.easeNone})
        .from(ship, 2, { x: 100+'%', ease:Linear.easeNone})
        .to(ship, 2, {opacity: 1, ease:Linear.easeNone},'-=2')
        .to(sea, 2, {x: -100, ease:Linear.easeNone},'-=2')
        .from(clouds, 2, {x: -200+'%', y: 100+'%', ease:Linear.easeNone},'-=2');

    // Create scene
    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#section2"
    })
    /*.setClassToggle(fadeShow,'fade-in')*/
        .setTween(s2Tween)
        .addTo(ctrl);

    scene2.triggerHook(0.2);


    /*===Section3===*/

    //function for add svg css properties
    function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    // Create scene
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#team"
    }).addTo(ctrl);



    var cprocessLine = '#cprocess-line',
        cprocessTitle = '.cprocess-title',
        cprocessSlogan = '.cprocess-slogan',
        cprocessInfo = '.cprocess-info';

    // prepare SVG
    pathPrepare($(cprocessLine));

    //real filling
    var cprocessStrokeArr = parseInt($(cprocessLine).css('stroke-dasharray'))/coefficient;

    //timeline
    var s4Tween = new TimelineMax();
    s4Tween.to($(cprocessLine), 1, {strokeDashoffset: cprocessStrokeArr, ease:Linear.easeNone})
        .add(TweenMax.to(cprocessLine, 0, {stroke: color, ease:Linear.easeNone}), 0);


    // Create scene
    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#section3"
    })
        .setTween(s4Tween)
        .addTo(ctrl);

    scene4.triggerHook(0.6);

    //section3 line scroll
    $(window).scroll(function () {
        var cprocessStroke = parseInt($(cprocessLine).css('stroke-dashoffset'));

        /*cprocessStroke -= (cprocessStroke/scene4.duration())*8;
         $(cprocessLine).css({'stroke-dashoffset':cprocessStroke,'stroke':'color'});*/

        //team
        if(cprocessStroke < 4400){
            $("#team").addClass('seen');
        }else {
            $("#team").removeClass('seen');
        }

        //title Current Process
        /*if(cprocessStroke < 4600){
            $(cprocessTitle).addClass('fade-rin');
        }else {
            $(cprocessTitle).removeClass('fade-rin');
        }*/

        //slogan Current Process
        if(cprocessStroke < 3800){
            $(cprocessSlogan).addClass('fade-lin');
            $(cprocessInfo).addClass('fade-rin');
        }else {
            $(cprocessSlogan).removeClass('fade-lin');
            $(cprocessInfo).removeClass('fade-rin');
        }

    });




    /*===Section4===*/
    var companyLine = '#company-line',
        companyTitle = '.company-title',
        companyNote = '.company-note',
        companyNoteImg = '.note-img',
        companyLogoImg = '.logo-mini',
        companySlogan = '.company-slogan',
        companyImg = '.company-img';
    // prepare SVG
    pathPrepare($(companyLine));

    //real filling
    var companyStrokeArr = parseInt($(companyLine).css('stroke-dasharray'))/coefficient;

    //timeline
    var s5Tween = new TimelineMax();
    s5Tween.to($(companyLine), 1, {strokeDashoffset: companyStrokeArr, ease:Linear.easeNone}) // draw word for 0.9
        .add(TweenMax.to(companyLine, 0, {stroke: color, ease:Linear.easeNone}), 0);		// change color during the whole thing


    // Create scene5
    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#section4"
    })
        .setTween(s5Tween)
        .addTo(ctrl);

    scene5.triggerHook(0.8);

    //section4 line scroll
    $(window).scroll(function (){
        var companyStroke = parseInt($(companyLine).css('stroke-dashoffset'));

        //title Current Process
        if(companyStroke < 4000){
            $(companyTitle).addClass('seen');
        }else {
            $(companyTitle).removeClass('seen');
        }

        //note Current Process
        if(companyStroke < 4000){
            $(companyNote).addClass('seen');
        }else {
            $(companyNote).removeClass('seen');
        }

        //note img Current Process
        if(companyStroke < 4000){
            $(companyNoteImg).addClass('fade-in');
            $(companyLogoImg).addClass('fade-lin');
        }else {
            $(companyNoteImg).removeClass('fade-in');
            $(companyLogoImg).removeClass('fade-lin');
        }

        //company slogan Current Process
        if(companyStroke < 4000){
            $(companySlogan).addClass('fade-in');
        }else {
            $(companySlogan).removeClass('fade-in');
        }

        //company img Current Process
        if(companyStroke < 4000){
            $(companyImg).addClass('fade-in');
        }else {
            $(companyImg).removeClass('fade-in');
        }

    });

    /*===Section5===*/
    var processLine = '#process-line',
        processTitle = '.process-title',
        processSlogan = '.process-slogan',
        processImg = '.process-img',
        wordQuote = '#quote',
        forwarder = '#forwarder',
        negotiate = '#negotiate',
        analyze = '#analyze';

    // prepare SVG
    pathPrepare($(processLine));

    //real filling
    var processStrokeArr = parseInt($(processLine).css('stroke-dasharray'))/3.2;

    //timeline
    var s6Tween = new TimelineMax();
    s6Tween.to($(processLine), 1, {strokeDashoffset: processStrokeArr, ease:Linear.easeNone}) // draw word for 0.9
        .add(TweenMax.to(processLine, 0, {stroke: color, ease:Linear.easeNone}), 0);		// change color during the whole thing

    // Create scene5
    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#section5"
    })
        .setTween(s6Tween)
        .addTo(ctrl);


    //process list
    var processList = [];
    $('.process-list li').each(function(index){
        processList[index] = $(this);
    });

    //section5 line scroll
    $(window).scroll(function (){
            var processStroke = parseInt($(processLine).css('stroke-dashoffset'));

            //title Our Process
            /*if(processStroke < 5900){
                $(processTitle).addClass('seen');
            }else {
                $(processTitle).removeClass('seen');
            }*/
            //word quot Our Process
            if(processStroke < 4400){
                $(wordQuote).addClass('seen');
                processList[0].addClass('fade-in');
                $(processImg).addClass('seen');
            }else {
                $(wordQuote).removeClass('seen');
                processList[0].removeClass('fade-in');
                $(processImg).removeClass('seen');
            }
            //word forwarder Our Process
            if(processStroke < 3900){
                $(forwarder).addClass('seen');
                processList[1].addClass('fade-in');
            }else {
                $(forwarder).removeClass('seen');
                processList[1].removeClass('fade-in');
            }
            //word negotiate Our Process
            if(processStroke < 3300){
                $(negotiate).addClass('seen');
                processList[2].addClass('fade-in');
            }else {
                $(negotiate).removeClass('seen');
                processList[2].removeClass('fade-in');
            }
            //word analize Our Process
            if(processStroke < 2850){
                $(analyze).addClass('seen');
                processList[3].addClass('fade-in');
            }else {
                $(analyze).removeClass('seen');
                processList[3].removeClass('fade-in');
            }
            if(processStroke < 2500){
                $(processSlogan).addClass('fade-rin');
            }else {
                $(processSlogan).removeClass('fade-rin');
            }

    });


    /*===Section6===*/
    var featuresLine = '#features-line',
        featuresTitle = '.features-title',
        circle1 = '#circle-color1',
        circle2 = '#circle-color2',
        circle3 = '#circle-color3',
        circleNumber1 = '#cirle-one path',
        circleNumber2 = '#cirle-second path',
        circleNumber3 = '#cirle-three path';

    var featuresFL = '.features-fl',
        featuresFR = '.features-fr',
        featuresFB = '.features-fb';

    // prepare SVG
    pathPrepare($(featuresLine));

    //real filling
    var featuresStrokeArr = parseInt($(featuresLine).css('stroke-dasharray'))/coefficient;
    var s7Tween = new TimelineMax();
    s7Tween.to($(featuresLine), 1, {strokeDashoffset: featuresStrokeArr, ease:Linear.easeNone}) // draw word for 0.9
        .add(TweenMax.to(featuresLine, 0, {stroke: color, ease:Linear.easeNone}), 0);		// change color during the whole thing

    // Create scene6
    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#section6"
    })
        .setTween(s7Tween)
        .addTo(ctrl);


    //future list
    var futuresList = [],
        futuresItem = $('.js-features-item');
    $('.features-item').each(function(index){
        futuresList[index] = $(this);
    });


    //section6 line scroll
    $(window).scroll(function (){
        var featuresStroke = parseInt($(featuresLine).css('stroke-dashoffset'));

        //features-title
        /*if(featuresStroke < 3600){
            $(featuresTitle).addClass('seen');
        }else{
            $(featuresTitle).removeClass('seen');
        }*/

        //first-item
        if(featuresStroke < 3100){
            futuresItem.removeClass('fade-lin');
            futuresItem.removeClass('fade-rin');
            futuresList[0].addClass('active');
            futuresList[0].find('.fade-lshow').addClass('fade-lin');
            futuresList[0].find('.fade-rshow').addClass('fade-rin');
            $(circle1).css({'fill':color});
            $(circleNumber1).css({'fill':numberColor});
        }else {
            futuresList[0].removeClass('active');
            futuresList[0].find('.fade-lshow').removeClass('fade-lin');
            futuresList[0].find('.fade-rshow').removeClass('fade-rin');
            $(circle1).css({'fill':beforeColor});
            $(circleNumber1).css({'fill':numberBeforeColor});
        }

        //second-item
        if(featuresStroke < 2800){
            futuresItem.removeClass('fade-lin');
            futuresItem.removeClass('fade-rin');
            futuresList[1].find('.fade-lshow').addClass('fade-lin');
            futuresList[1].find('.fade-rshow').addClass('fade-rin');
            $(circle2).css({'fill':color});
            $(circleNumber2).css({'fill':numberColor});
        }else {
            futuresList[1].find('.fade-lshow').removeClass('fade-lin');
            futuresList[1].find('.fade-rshow').removeClass('fade-rin');
            $(circle2).css({'fill':beforeColor});
            $(circleNumber2).css({'fill':numberBeforeColor});
        }

        //third-item
        if(featuresStroke < 2550){
            futuresItem.removeClass('fade-lin');
            futuresItem.removeClass('fade-rin');
            futuresList[2].find('.fade-lshow').addClass('fade-lin');
            futuresList[2].find('.fade-rshow').addClass('fade-rin');
            $(circle3).css({'fill':color});
            $(circleNumber3).css({'fill':numberColor});
        }else {
            futuresList[2].find('.fade-lshow').removeClass('fade-lin');
            futuresList[2].find('.fade-rshow').removeClass('fade-rin');
            $(circle3).css({'fill':beforeColor});
            $(circleNumber3).css({'fill':numberBeforeColor});
        }
    });


    /*===Section7===*/
    var riskLine = '#risk-line',
        riskTitle = '.risk-title',
        riskItem = '.risk-item',
        riskInfo = '.risk-info-text',
        riskText = '.risk-text',
        riskSvg = '.risk-svg',
        /*mindGirl = '#mind-girl',*/
        feedbackBlock = '.feedback-block',
        feedbackForm = '.feedback-form';

    // prepare SVG
    pathPrepare($(riskLine));

    //real filling
    var riskStrokeArr = parseInt($(riskLine).css('stroke-dasharray'))/coefficient;

    //timeline
    var s8Tween = new TimelineMax();
    s8Tween.to($(riskLine), 1, {strokeDashoffset: riskStrokeArr, ease:Linear.easeNone}) // draw word for 0.9
        .add(TweenMax.to(riskLine, 0, {stroke: color, ease:Linear.easeNone}), 0);		// change color during the whole thing

    // Create scene8
    var scene8 = new ScrollMagic.Scene({
        triggerElement: "#section7"
    })
        .setTween(s8Tween)
        .addTo(ctrl);
    scene8.triggerHook(0.2);

    if(ScreenWidth <= 1024){
        scene8.triggerHook(1);
        console.log(scene8.triggerHook());
    }
    if(ScreenWidth <= 480){
        scene8.triggerHook(0.8);
    }

    //section7 line scroll
    $(window).scroll(function (){
        var riskStroke = parseInt($(riskLine).css('stroke-dashoffset'));

        //risk-title
        if(riskStroke < 9400){
            $(riskTitle).addClass('seen');
        }else{
            $(riskTitle).removeClass('seen');
        }

        //risk text
        if(riskStroke < 8200){
            $(riskText).addClass('fade-in');
        }else{
            $(riskText).removeClass('fade-in');
        }

        //risk info
        if(riskStroke < 6600){
            $(riskInfo).addClass('fade-in');
        }else{
            $(riskInfo).removeClass('fade-in');
        }

        //risc screen
        if(riskStroke < 4900){
            $(riskSvg).addClass('seen');
        }else{
            $(riskSvg).removeClass('seen');
        }

        //feedback
        /*if(riskStroke < 4600){
            $(feedbackBlock).addClass('fade-lin');
            $(feedbackForm).addClass('fade-rin');
        }else{
            $(feedbackBlock).removeClass('fade-lin');
            $(feedbackForm).removeClass('fade-rin');
        }*/


    });










    //slow scrolling
    $(window).scroll(function(){
        var state4 = scene4.state(),
            state5 = scene5.state(),
            state6 = scene6.state(),
            state7 = scene7.state();
        //slow down
        if(state4 == 'DURING' || state5 == 'DURING' || state6 == 'DURING' || state7 == 'DURING'){
            $(window).on("mousewheel DOMMouseScroll" , slowScroll() );
        }
        else{
            $(window).off("mousewheel DOMMouseScroll" , slowScroll() );
        }
    });


    /*=================Plagins===============*/


    /*=================Plagins===============*/

    function slowScroll() {
        var latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
        $(window).on("scroll", function () {
            latestKnownScrollY = $('html').scrollTop() || $('body').scrollTop();
        });
        $(window).on("mousewheel DOMMouseScroll", function(event) {
            var scrollTo,
                scrollDistance  = 80,
                delta;
            if (event.type == 'mousewheel') {
                delta    = event.originalEvent.wheelDelta / 140;
            } else if (event.type == 'DOMMouseScroll') {
                delta    = - event.originalEvent.detail / 3;
            }
            scrollTo = latestKnownScrollY - delta * scrollDistance;
            if (scrollTo) {
                event.preventDefault();
                event.stopPropagation();
                $('body,html').stop().animate( {
                    scrollTop : scrollTo
                } , 500);
            }
        } );
    }

    /*=================Validation===============*/



    /*=================Validation===============*/




    if(ScreenWidth > 1680){

    }
    if(ScreenWidth < 1680){

    }
    if(ScreenWidth < 992){

    }
    if(ScreenWidth > 768){

    }
    if(ScreenWidth > 768){

    }
    if(ScreenWidth < 580){

    }
    if(ScreenWidth < 480){

    }

    $(window).resize(function(){
        ScreenWidth = $(window).width();
        ScreenHeight = $(window).height();
        $('section').outerHeight(ScreenHeight);
        /*trackShow();*/
    });

});



// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo WORKERS BUTTON 

$('.workers-btn').click(function(){


    let workerTab = $('.workers-tab');
    let dayTab = $('.dayOff-tab').hasClass('dayOff-tab-active');

    

    if(dayTab == true){
        $('.dayOff-tab').toggleClass("dayOff-tab-active");
        workerTab.toggleClass("workers-tab-active");
    }else{
        workerTab.toggleClass("workers-tab-active");
    }
});


$('.workers-tab-close').click(function(){
    $('.workers-tab').toggleClass("workers-tab-active");
});


// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo DAY OFF BUTTON 

$('.dayOff-btn').click(function(){

    let workerTab = $('.workers-tab').hasClass('workers-tab-active');
    let dayTab = $('.dayOff-tab');

    if(workerTab == true){
        $('.workers-tab').toggleClass("workers-tab-active");
        dayTab.toggleClass("dayOff-tab-active");
    }else{
        dayTab.toggleClass("dayOff-tab-active");
    }

});

$('.dayOff-tab-close').click(function(){
    $('.dayOff-tab').toggleClass("dayOff-tab-active");
});


// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ADD WORKER 

 $('#add-worker-btn').click(function(){

    let name = $('#name').val();
    let surname = $('#surname').val();
    let role = $('#role').val();
    let addInfo = $('#add-info').val();

    

    

 })

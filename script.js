


// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo WORKERS BUTTON 

$('.workers-btn').click(() => {


        let workerTab = $('.workers-tab');
        let dayTab = $('.dayOff-tab').hasClass('dayOff-tab-active');
        



        if (dayTab == true) {
            $('.dayOff-tab').toggleClass("dayOff-tab-active");
            workerTab.toggleClass("workers-tab-active");

        } else {
            workerTab.toggleClass("workers-tab-active");
            $('.blackOut').toggleClass('blackout-active');
        }
    });


$('.workers-tab-close').click(function(){
    $('.workers-tab').toggleClass("workers-tab-active");
    $('.blackOut').toggleClass('blackout-active');
});


// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo DAY OFF BUTTON 

// $('.dayOff-btn').click(() => {

//         let workerTab = $('.workers-tab').hasClass('workers-tab-active');
//         let dayTab = $('.dayOff-tab');

//         if (workerTab == true) {
//             $('.workers-tab').toggleClass("workers-tab-active");
//             dayTab.toggleClass("dayOff-tab-active");
//         } else {
//             dayTab.toggleClass("dayOff-tab-active");
//         }

//     });

// $('.dayOff-tab-close').click(function(){
//     $('.dayOff-tab').toggleClass("dayOff-tab-active");
// });


// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo ADD WORKER 


let workersArray = [];

function displayWorker() {

    $('.workers-shedule').empty();

    for( let i = 0 ; i < workersArray.length; i++){ 


        let workerName = workersArray[i][0];
        let workerSurname = workersArray[i][1];

        $('.workers-shedule').append("<div class='workers-shedule-worker'>"+workerName+' '+workerSurname+"</div>");


    }
};


function addWorker(worker){
    workersArray.push(worker);
    console.log(workersArray);
}

 $('#add-worker-btn').click(function(){

    let name = $('#name').val();
    let surname = $('#surname').val();
    let role = $('#role').val();
    let addInfo = $('#add-info').val();
    let worker = [name, surname, role, addInfo];



    $('.worker-list').append("<div class='worker-position'><div>"+name+"</div><div>"+surname+"</div><div>"+role+"</div><div>"+addInfo+"</div><button>Usuń</button></div>");



    $('#name').val("");
    $('#surname').val("");
    $('#role').val("");
    $('#add-info').val("");

    addWorker(worker);
    displayWorker();
 });


  



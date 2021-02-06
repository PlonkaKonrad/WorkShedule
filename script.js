
// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo DATE DISPLAY


 $('#date-btn').click(() =>{


    let input =$('#month').val();
    let inputDate = new Date(input);
    let month = inputDate.getMonth() +1;
    let year = input.charAt(2) + input.charAt(3);
    let day = inputDate.getDay();
    let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];


    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    let monthLength = daysInMonth(month,year);
   

    $('.date').empty();
    $('.day').empty();
     

    for(let i = 1 ; i  < monthLength +1 ; i++){
        $('.date').append("<div class='date-disp'>"+ i +'-'+month+'-'+ year +"</div>");



        $('.day').append("<div class='day-disp'>" +days[day] +"</div>");
        
         day++;

        if(day > 6){
            day =0;
         };


    };
    
 })





// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo WORKERS TAB

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


$('.workers-tab-close').click(() => {
        $('.workers-tab').toggleClass("workers-tab-active");
        $('.blackOut').toggleClass('blackout-active');
    });

$('.blackOut').click(() => {
    $('.blackOut').toggleClass('blackout-active');
    $('.workers-tab').toggleClass("workers-tab-active");
    }
);


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

// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo EXPORT TO PDF 


function CreatePDFfromHTML() {
    var HTML_Width = $(".shedule").width();
    var HTML_Height = $(".shedule").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($(".shedule")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("shedule.pdf");
    });
}l
  



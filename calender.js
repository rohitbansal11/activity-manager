$(function(){
  $("#container").simpleCalendar();
});

let Events = JSON.parse(localStorage.getItem("user"));
let myEvents = []

myEvents = Events.map((item, index) => {
    console.log(item)
    return {
        id: index,
        summary: item.task,
        // badge: "08/03 - 08/05",
        startDate: item.date,
        endDate: item.date,
        priorty:item.prior,
        color: changeColor(item),
        
        
        
    }
})

console.log(myEvents[0])
function changeColor(item) {

    if (item.prior == "High") {
        return "red"


    }
    else if (item.prior == "Medium") {
        return "orange"
    } else {
        return "green"
    }

}


$("#container").simpleCalendar({

  // displays events
  displayEvent: true,

  // event dates
  events: myEvents,

  // disable showing event details
  disableEventDetails: false,

  // disable showing empty date details
  disableEmptyDetails: false 

});

$("#container").simpleCalendar({

  displayYear: true

});
$("#container").simpleCalendar({

  fixedStartDay: true

});
$("#container").simpleCalendar({

  // called after init
  onInit: function (calendar) {}, 

  // called on month change
  onMonthChange: function (month, year) {},

  // called on date selection
  onDateSelect: function (date, events) {}

});
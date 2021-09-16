var states =[]
var confirmeds =[]
var recovereds =[]
var deathss =[]
var actives =[]
$(document).ready(function(){
    var url = "https://data.covid19india.org/state_district_wise.json"
    $.getJSON(url,function(data){
        
        // console.table(data['Andhra Pradesh'].districtData)
     
        $.each(data['Andhra Pradesh'].districtData,function(id,obj){
            if (id != 'Other State'){
                
                states.push(id)
                confirmeds.push(obj.confirmed)
                recovereds.push(obj.recovered)
                deathss.push(obj.deceased)
                actives.push(obj.active)
            }
           
           
        })
        // console.log(state)
        // console.log(confirmed)
        // console.log(deaths)
        // console.log(state)
        states.shift();
        confirmeds.shift();
        recovereds.shift();
        deathss.shift();
        actives.shift();
        // console.log(state)
    
    })
    
})





var verticalChart1 = document.getElementById('vertical-chart-1').getContext('2d')
var verticalChart2 = document.getElementById('vertical-chart-2').getContext('2d')
var verticalChart3 = document.getElementById('vertical-chart-3').getContext('2d')
var verticalChart4 = document.getElementById('vertical-chart-4').getContext('2d')
var horizontalChart = document.getElementById('horizontal-chart')
var lineChart = document.getElementById('line-chart')

// console.log(states)


var verticalDemoChart1 = new Chart(verticalChart1, {
    // type: 'line',
    type: 'bar',
    data: {
        labels: states,
        datasets: [
            {
                label: "Confirmed",
                backgroundColor: "#2d7630",
                data: confirmeds
    }
  ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false
                    }
                }
            ]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 13,
                padding: 15,
                boxWidth: 12
            },
        },
        title: {
            display: false
        }
    }
});

var verticalDemoChart2 = new Chart(verticalChart2, {
    // type: 'line',
    type: 'bar',
    data: {
        labels: states,
        datasets: [
            {
                label: "Recovered",
                backgroundColor: "#4A89DC",
                data: recovereds
    }
  ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false
                    }
                }
            ]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 13,
                padding: 15,
                boxWidth: 12
            },
        },
        title: {
            display: false
        }
    }
});




var verticalDemoChart3 = new Chart(verticalChart3, {
    // type: 'line',
    type: 'bar',
    data: {
        labels: states,
        datasets: [
            {
                label: "Active",
                backgroundColor: "#A0D468",
                data: actives
    }
  ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false
                    }
                }
            ]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 13,
                padding: 15,
                boxWidth: 12
            },
        },
        title: {
            display: false
        }
    }
});





var verticalDemoChart4 = new Chart(verticalChart4, {
    // type: 'line',
    type: 'bar',
    data: {
        labels: states,
        datasets: [
            {
                label: "Deaths",
                backgroundColor: "#D8334A",
                data: deathss
    }
  ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false
                    }
                }
            ]
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontSize: 13,
                padding: 15,
                boxWidth: 12
            },
        },
        title: {
            display: false
        }
    }
});










// var horizontalDemoChart = new Chart(horizontalChart, {
//     type: 'horizontalBar',
//     data: {
//         labels: ["2010", "2013", "2016", "2020"],
//         datasets: [
//             {
//                 label: "Mobile",
//                 backgroundColor: "#BF263C",
//                 data: [330, 400, 580, 590]
//     }, {
//                 label: "Responsive",
//                 backgroundColor: "#EC87C0",
//                 data: [390, 450, 550, 570]
//     }
//   ]
//     },
//     options: {
//         legend: {
//             display: true,
//             position: 'bottom',
//             labels: {
//                 fontSize: 13,
//                 padding: 15,
//                 boxWidth: 12
//             },
//         },
//         title: {
//             display: false
//         }
//     }
// });


// var lineDemoChart = new Chart(lineChart, {
//     type: 'line',
//     data: {
//         labels: [2000, 2005, 2010, 2015, 2010],
//         datasets: [{
//                 data: [500, 400, 300, 200, 300],
//                 label: "Desktop Web",
//                 borderColor: "#D8334A"
//   }, {
//                 data: [0, 100, 300, 400, 500],
//                 label: "Mobile Web",
//                 borderColor: "#4A89DC"
//   }
// ]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         legend: {
//             display: true,
//             position: 'bottom',
//             labels: {
//                 fontSize: 13,
//                 padding: 15,
//                 boxWidth: 12
//             },
//         },
//         title: {
//             display: false
//         }
//     }
// });

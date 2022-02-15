var chartD = document.getElementById('chartDomain');
var chartH = document.getElementById('chartHardware');
var chartS = document.getElementById('chartSignal');
var myChartD = echarts.init(chartD);
var myChartH = echarts.init(chartH);
var myChartS = echarts.init(chartS);
var option;
var optionD, optionH, optionS;


option = {
tooltip: {
    trigger: 'item'
},
legend: {
    top: '5%',
    left: 'center'
},
series: [
    {
    name: 'Access From',
    type: 'pie',
    radius: ['40%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
    },
    label: {
        show: false,
        position: 'center'
    },
    emphasis: {
        label: {
        show: true,
        fontSize: '40',
        fontWeight: 'bold'
        }
    },
    labelLine: {
        show: false
    },
    data: []
    }
]
};

console.log(option['series'][0]['data'])

var optionD =  JSON.parse(JSON.stringify(option))
var optionH =  JSON.parse(JSON.stringify(option))
var optionS =  JSON.parse(JSON.stringify(option))


optionD['series'][0]['data'] = [
    { value: 4, name: 'Other' },
    { value: 3, name: 'Facial Expressions' },
    { value: 2, name: 'Handwriting' },
    { value: 4, name: 'Gesture Recognition' },
    { value: 9, name: 'Authentication' },
]
optionH['series'][0]['data'] = [
    { value: 7, name: 'Mobile' },
    { value: 4, name: 'Earphone' },
    { value: 6, name: 'Antenna' },
    { value: 5, name: 'Other' }
]
optionS['series'][0]['data'] = [
    { value: 4, name: 'Wi-fi' },
    { value: 2, name: 'Radar' },
    { value: 3, name: 'sound' },
    { value: 6, name: 'Ultrasonic' },
    { value: 4, name: 'IMU' },
    { value: 3, name: 'Other' }
]

optionD && myChartD.setOption(optionD);
optionH && myChartH.setOption(optionH);
optionS && myChartS.setOption(optionS);
// console.log(option1['series'][0]['data'])
// console.log(option2['series'][0]['data'])

chartD.querySelector("canvas").style.width = "400px"
chartD.querySelector("canvas").style.height = "400px"
chartH.querySelector("canvas").style.width = "400px"
chartH.querySelector("canvas").style.height = "400px"
chartS.querySelector("canvas").style.width = "400px"
chartS.querySelector("canvas").style.height = "400px"



// 應用比較表的 Table
var exampleModal = document.getElementById('exampleModal')
console.log(exampleModal);
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  var titleText = recipient.split("/")[0]
  var srcID = recipient.split("/")[1]

  var modalsrc = exampleModal.querySelector('.modal-body img')
  var modalTitle = exampleModal.querySelector('.modal-title')
  modalsrc.src = "https://i.imgur.com/"+srcID+".png"
  modalTitle.textContent = titleText
//   console.log(titleText,srcID)

})
let id = id => document.getElementById(id);

let patient_appointment = id('patient_appointment'),
    total_patients = id('total_patients'),
    activity = id('activity'),
    appointme = id('appointme'),
    waiting_rm = id('waiting_rm');


// Patient Appointment   
let patientsAppointDisplay;
const url = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients'

fetch(url)
    .then(response => response.json())
    .then(display => {
        let lists = display.appointments
        console.log(lists)
        for (items of lists) {
            patient_appointment.innerHTML +=   `
            <div class="patient-sch">
                <p>09:00am</p>
                <div class="person">
                    <img src="/images/pat-img1.svg" alt="" />
                    <p class="gr">${items.name}</p>
                    <img src="/images/toogle-img.svg" alt="">
                </div>
            </div
            `
        }      
        total_patients.innerHTML = display.totalPatients
        appointme.innerHTML = display.scheduledAppointments
        waiting_rm.innerHTML = display.waitinfRoom
        
    })


//  // Activity
let activityDisplay;
const url2 = 'https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites'

fetch(url2)
    .then(response => response.json())
    .then(display => {
        let list = display.activities
        console.log(display)
        for (items of list) {
            if (items.type==='report') {
                activity.innerHTML +=`
                <div>
                  <img src="/images/activi-img1.svg" alt="">
                  <p>${items.title}</p>
                </div>
                `
            }
            else if (items.type === 'interview') {
                activity.innerHTML +=
                    `
                <div>
                  <img src="/images/activi-img2.svg" alt="">
                  <p>${items.title}</p>
                `

            }

        }
    })

// Toggle
let button = document.querySelector('#toggle-menu');
button.addEventListener('click', e =>{
    document.querySelector('#show_toog').classList.toggle('togg')
})

// let abim = document.querySelector('.abimtog')
// let tm = document.querySelector('.toggle-menu')

// abim.addEventListener('click', () => {
//     tm.classList.toggle('display')
//     console.log("Abi,")
// })

 // SessionStorage
 document.getElementById('messageForm').addEventListener('submit', () => {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let message = document.getElementById('userMessage').value;

    const userInput = {name, email, message};
    sessionStorage.setItem(`${name}'s Message`, JSON.stringify(userInput));
    alert(`Hello ${name}, Your message has been submitted, we will get back to you shortly. Thank you`)
});

    


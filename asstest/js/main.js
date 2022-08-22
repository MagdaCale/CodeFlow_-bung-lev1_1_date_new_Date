console.log('CodeFlow Übung lev1_1: date new Date()')

const date1 = new Date ("September 2, 2019 09:00:00")
console.log(date1)
date1HTML = document.createElement('p')
date1HTML.innerHTML = `${date1} `
document.body.appendChild(date1HTML)

const date2 = new Date(0)
console.log(date2)
date2HTML = document.createElement('p')
date2HTML.innerHTML = `${date2} `
document.body.appendChild(date2HTML)


const date3 = new Date(31556908800)
console.log(date3)
date3HTML = document.createElement('p')
date3HTML.innerHTML = `${date3} `
document.body.appendChild(date3HTML)

const date4 = new Date(86400000)
console.log(date4)
date4HTML = document.createElement('p')
date4HTML.innerHTML = `${date4} `
document.body.appendChild(date4HTML) 

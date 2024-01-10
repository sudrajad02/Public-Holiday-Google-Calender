console.log(process.env.CALENDER_ID);
const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDER_ID}/events?key=${process.env.API_KEY}`)
const body = await response.json()

console.log(body)
(async () => {})
// const people = {
//   'jordan': {
//     name: 'Jordan Arnesen',
//     title: ' Curriculum Engineer'
//   },
//   ''
// }
const schedule = [
	{
    day: {
      short: 'Sat',
      long: 'Saturday',
      number: 13,
      date: 'October 29'
    },
    events: [
      { name: '✅ Check-in', start: '12:00 pm', end: '12:30 pm' },
      { name: '👋 Opening Ceremony', start: '12:30 pm', end: '1:00 pm' },
      { name: '🍕 Lunch', start: '1:00 pm', end: '2:30 pm', flavor: 'food', summary: `Pizza!`},
      { name: '⚒️ Workshop Wave 1', start: '3:00 pm', end: '5:00 pm'/*, summary: `
**The Deck:** Creative Marketing for CS Clubs _Ran by Matthew_

**Room 1337:** Diversity and Inclusion in Hackathons _Ran by Emily, Charissa, Lavi._

**4th Corner:** Koding 4 Kids _Run by Ava and Jack._
	 ` */},
      { name: '🍪 Snacks', start: '5:00 pm', end: '5:30 pm', flavor: 'food' },
      { name: '✨ Workshop Wave 2', start: '7:00 pm', end: '8:00 pm'/*, summary: `
**The Deck:** Running Club Meetings Beyond the Workshops _Ran by Dina._

**San Francisco:** Community @ Hackathons _Ran by Dave._

**Hong Kong:** "Green" Hackathons _Run by Sean._
	 ` */},
      { name: '🍜 Dinner', start: '8:00 pm', end: '9:30 pm', flavor: 'food', summary: `Dinnertime!` },
      { name: '❓ ???', start: '10:00 pm', end: '11:00 pm' },
      { name: '🧋 Midnight Snack', start: '11:00 pm', end: '12:00 am', flavor: 'food', summary: 'Brown sugar milk boba tea or Thai boba tea.' },
    ]
  },
  {
    day: {
      short: 'Sun',
      long: 'Sunday',
      number: 14,
      date: 'October 30'
    },
    events: [
      { name: '🥞 Breakfast', start: '7:00 am', end: '8:00 am', flavor: 'food' },
      { name: '📝 Presentation Sign-Ups', start: '8:00 am', end: '9:00 am', summary: `Sign up to present your hack!` },
      { name: '💖 Demos and Project', start: '9:00 am', end: '11:00 am', summary: `Present your hack and win prizes!` },
      { name: '👏 Closing ceremony', start: '11:30 am', end: '12:00 pm' },
      { name: '😢 Goodbyes', start: '12:00 pm', end: '12:30 pm', flavor: 'closing' },
    ]
  }
]
export default schedule
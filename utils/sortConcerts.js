export default function sortConcerts(concerts) {
  const currentDate = new Date()

  const upcoming = concerts
    .filter((concert) => new Date(concert.fields.dateTime) >= currentDate)
    .sort((a, b) => new Date(a.fields.dateTime) - new Date(b.fields.dateTime))

  const previous = concerts
    .filter((concert) => new Date(concert.fields.dateTime) < currentDate)
    .sort((a, b) => new Date(b.fields.dateTime) - new Date(a.fields.dateTime))

  return { upcoming, previous }
}
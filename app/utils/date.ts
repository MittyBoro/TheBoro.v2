export function calculateYears(birthday: string, suffix: string = 'y.') {
  let birthdayDate = new Date(birthday)
  let ageDifMs = Date.now() - birthdayDate.getTime()
  let ageDate = new Date(ageDifMs)

  let age = Math.abs(ageDate.getUTCFullYear() - 1970).toString()

  return `${age} ${suffix}`.trim()
}

export function dayOfYear(dateString: string) {
  const date = new Date(dateString)
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24,
  )
}

export function yearsWithEmoji(dateString: string, suffix: string = 'y.') {
  const today = dayOfYear(new Date().toISOString())
  const date = dayOfYear(dateString)

  const diff = date - today

  let emoji = ''
  if (diff > 0 && diff < 7) {
    emoji = '🎉'
  }

  const fullYears = calculateYears(dateString, suffix)
  return `${fullYears} ${emoji}`.trim()
}

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

// advisors
export async function fetchAdvisors() {
  const entries = await client.getEntries({
    content_type : "advisors"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// mampuProgramme
export async function fetchMampuprogramme() {
  const entries = await client.getEntries({
    content_type : "mampuProgramme"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// legalDivision
export async function fetchLegaldivision() {
  const entries = await client.getEntries({
    content_type : "legalDivision"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// donorEngagement
export async function fetchDonorengagement() {
  const entries = await client.getEntries({
    content_type : "donorEngagement"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// digitalFundraising
export async function fetchDigitalfundraising() {
  const entries = await client.getEntries({
    content_type : "digitalFundraising"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// onGroundFundraising
export async function fetchOngroundfundraising() {
  const entries = await client.getEntries({
    content_type : "onGroundFundraising"
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchAdvisors, fetchMampuprogramme, fetchLegaldivision, fetchDonorengagement, fetchDigitalfundraising, fetchOngroundfundraising }

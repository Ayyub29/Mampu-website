const space = process.env.uj5mxc4qxjxr
const accessToken = process.env.rxnWpn5PrI8n-B_ZFUIaHSVU_Mh2t3fRKFVnMPZ0968

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
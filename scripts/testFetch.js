// quick test script to verify OMDB fetch works from environment (uses global fetch in Node 18+)
const API_KEY = '7a4b4120'
const query = 'Avengers'
const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=1`

async function run(){
  console.log('Fetching from OMDB:', url)
  if (typeof fetch === 'undefined'){
    console.error('Global fetch is not available in this Node runtime. Run with Node 18+ or install node-fetch.')
    process.exit(1)
  }
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log('OMDB response keys:', Object.keys(data))
    console.log('First results count:', (data.Search || []).length)
    if (data.Search && data.Search[0]){
      console.log('Sample:', data.Search[0])
    }
  } catch(err) {
    console.error('Fetch failed', err.message)
    process.exit(1)
  }
}

run()

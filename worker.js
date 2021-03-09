const categories = ["integration", "plugin", "appdaemon", "netdaemon", "python_script", "theme"]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
addEventListener("scheduled", event => {
  event.waitUntil(handleScheduled())
})


async function handleRequest(request) {
  const data = {"last_updated": await KV.get("last_updated")}
  for (const category of categories) {
    data[category] = JSON.parse(await KV.get(category))
  }
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  })
}



async function handleScheduled() {
  let updated = false
  for (const category of categories) {
    const ghresponse = await fetch(`https://raw.githubusercontent.com/hacs/default/master/${category}`)
    const content = JSON.stringify(await ghresponse.json())
    const old = await KV.get(category)
    if (old !== content) {
      updated = true
      await KV.put(category, content)
    }
  }

  if (updated) {
    await KV.put("last_updated", new Date().getTime())
  }
}
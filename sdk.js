
const SDK = adApi => {
  const res = fetch(adApi).then(res => JSON.parse(res)).catch(e => console.log(e))
  console.log('SDK get response', res)
}

window.SDK = SDK


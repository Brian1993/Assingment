
const SDK = adApi => {
  
  function getAd (api) {
    try {
      var xhttp = new XMLHttpRequest()
  
      xhttp.onreadystatechange = () => {
        if (this.readyState === 4 && this.status === 200) {
          this.responseText
        }
      }

      xhttp.open('GET', api, true)
      xhttp.send()
    } catch (e) {

    }
  }


  function checkResponse (response) {
    
  }
  function generateDomNode (adData) {
    document.createElement('iframe')
  }
  
}

window.SDK = SDK


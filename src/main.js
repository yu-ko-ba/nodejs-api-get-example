const main = () => {
  const axios = require('axios').default
  axios.get('https://api.sampleapis.com/coffee/hot')
    .then((response) => {
      console.log(response.data)
    })
}

main()

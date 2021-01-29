const getDataPromise = (num) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      typeof num === 'number' ? res(num * 2) : rej('A number must be provided')
    }, 2000)
  })

const processData = async () => {
  let data = await getDataPromise(2)
  data = await getDataPromise(data)
  data = await getDataPromise(data)
  return data
}

processData()
  .then((data) => {
    console.log('Data:', data)
  })
  .catch((err) => {
    console.log('Error:', err)
  })

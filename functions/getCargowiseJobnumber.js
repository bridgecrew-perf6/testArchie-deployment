exports = async function getCargowiseJobNumber (entityKey)  {
  
  try {
  setTimeout(() =>{ console.log('timeout cargo')}, 1000);
  const cargowiseJobNumber = await context.http.get({ url: `https://ws.pacificgroup.net/restapi/index.cfm/cargowise/url?type=declaration&key=${entityKey}`})
  // const cargowiseJobNumber = await context.http.get({ url: `https://ws.pacificgroup.net/restapi/index.cfm/cargowise/url?type=declaration&key=aeofjeofjeofjeojfeio`})
                    .then(res => {
                      const dataParsed  = EJSON.parse(res.body.text());
                      console.log('cargoDataResponse: ', dataParsed)
                      
                      return dataParsed["PK"];
                    })
                     .catch(e => {
                      console.log('cargowise job number error: ', e)
                      return null;
                    })
  } catch(e) {
    console.error('timeout error: ', e)
    return null;
  }
  return cargowiseJobNumber;
};
      
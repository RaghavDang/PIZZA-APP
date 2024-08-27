//Network call code
import URL from "../utils/constant.js";
async function doNetworkCall(){
    
    try{
        const response=await fetch(URL);  //Code gets blocked
        const object =await response.json();    //Code gets blocked
        return object;  //Wrap Promise
    }
    catch(err){
        console.log('Some problem in API call', err);
        throw err;
    }
    
    //const URL='https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json'
    // const promise=fetch(URL);  //Assign a thread
    // console.log('Promise is ',promise);
    // promise.then(response=>{
    //   console.log('response is',response);
    //   const promise2=response.json();  //Deserialization (json to object but without using parse...modern way)
    //   promise2.then(data=> console.log('Data is',data))
    //   .catch(e=>console.log('JSON parse error', e))
    // }).catch(err=>{
    //     console.log('Error is', err);
    // });
    // console.log('Good Bye');
}
export  default doNetworkCall;
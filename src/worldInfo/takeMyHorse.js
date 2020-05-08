import {Platform,Alert} from 'react-native';



export const Login = async () => {
  var form = new FormData()
  var pathFinal = ""
  try {
      let response = await fetch(pathFinal, {
          method: 'POST',
          body:form
        });
      let responseJson = await response.json();
      console.log(await responseJson)
      return {error:null,response: await responseJson}
  } catch (error) {
      console.log(error);
        return {error:error}
    }
}

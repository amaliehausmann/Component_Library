import { useEffect } from "react"
import { useAPI } from "../hooks/useAPI"
import { Form } from "../components/Form/Form";
import { loginForm } from "../utils/Login";

export const Home = () => {

  const {apiRequest: getRequest, data: getData} = useAPI();
  const {apiRequest: postRequest, data: postData} = useAPI();
  
  const fetchUrl = 'https://api.mediehuset.net/homelands/homes'

  useEffect(() => {
    getRequest(fetchUrl);
  }, [fetchUrl])

  function postLogin(data){

    const body = new URLSearchParams();
    body.append('username', data.email);
    body.append('password', data.password);

    postRequest('https://api.mediehuset.net/token', {
      method: 'POST',
      body: body,
    }, 'Du er nu logget ind', 'Noget gik galt', 'Forkert brugernavn eller adgangskode')
  }

  console.log(getData)
  console.log(postData)

  return (
    <div>
      <Form callback={postLogin} formArray={loginForm}/>

      <div>
        {getData?.items.map((item) => (
          <h1>{item.address}</h1>
        ))}
      </div>
    </div>
  )
}
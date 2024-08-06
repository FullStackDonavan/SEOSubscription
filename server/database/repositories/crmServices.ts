import prisma from "~/server/database/client";
import { IUser } from '~/types/IUser';


export async function createGHLContact(data: IUser) {
  console.log(data)
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6ImZVeTdYRFY4SE45ejhxNWQ5Z0pSIiwidmVyc2lvbiI6MSwiaWF0IjoxNzIyOTg0OTI0ODQxLCJzdWIiOiJLaW9JT0J4c1JBdEpQazU5RHJPcCJ9._MThcHaSS702t3kOS5bgo18pyyr54DKq_eWnq4dQ-9c`);

  var raw = JSON.stringify({
    "firstName": data.firstName,
    "lastName": data.lastName,
    "email": data.email,
    "phone": data.phone,
    "tags": [
      "newClient"
  ]
  });


  fetch("https://rest.gohighlevel.com/v1/contacts/", {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  })
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export async function getGHLPipelines() {
  const config = useRuntimeConfig()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    
    return fetch("https://rest.gohighlevel.com/v1/pipelines/", requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        console.log(result);
        return result; // Assuming you want to return the result
      })
      .catch(error => {
        console.log('Error:', error);
        throw error; // Rethrow the error to be caught elsewhere if needed
      });
  }

  
export async function getGHLOpportunities(pipelineId: String, stageId: String) {
    const config = useRuntimeConfig()
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `${config.public.GHL_API_KEY}`);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
      
      return fetch(`https://rest.gohighlevel.com/v1/pipelines/${pipelineId}/opportunities/?stageId=${stageId}`, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(result => {
          console.log(result);
          return result; // Assuming you want to return the result
        })
        .catch(error => {
          console.log('Error:', error);
          throw error; // Rethrow the error to be caught elsewhere if needed
        });
}
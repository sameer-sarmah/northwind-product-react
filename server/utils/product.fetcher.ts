import { HttpService } from '../http-client/http.service';

 export async function fetchData(options){
    const originalUrl=options.originalUrl;
    const headers=options.headers;
    const cookies=options.cookies;
    const northwindSvc="https://services.odata.org/Experimental/Northwind/Northwind.svc";
    const httpClient:HttpService=new HttpService();
    const requestURL=northwindSvc+originalUrl;
    const response=options.response;
    try{
         const data= await httpClient.initiateRequest("get",requestURL,{},{},null,true);
         response.json(data);
    }
    catch(error){
        console.log(error);
    }
}


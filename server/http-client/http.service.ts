import axios from 'axios';
import Deferred from './deferred';
import {Agent,AgentOptions} from 'https'
import {CoreException} from './core-exception';

export class HttpService {

  initiateRequest(method, url, params= {}, headers= {}, payload= null,https=false){
    method=method.toLowerCase();
    let config = {};
    config['url']=url;
    config['method'] = method;
    if (typeof params === 'object') {
      config['params'] = params;
    }
    config['headers'] = headers;

    if (method === 'post' || method === 'put' || method === 'patch') {
      config['data'] = payload;
    }
    if(https ===true){
    const agentOptions:AgentOptions ={rejectUnauthorized: false};
    const httpsAgent:Agent = new Agent(agentOptions);
    config['httpsAgent']=httpsAgent;
    }
    const requestPromise =axios.request(config) ;
    const deferred=new Deferred();
    requestPromise.then((data)=>{
      deferred.resolve(data.data);
    })
      .catch(
        (error) => {
          const status = error.status;
          const statusText = error.statusText;
          const errorText = error.data;
          const exp = new CoreException(status, statusText, errorText);
          deferred.reject(exp);
        }
      );
    return deferred;

  }



}

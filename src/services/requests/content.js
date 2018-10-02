'use strict';
import axios from 'axios'

export default class StaticContentService {
  constructor () {
    this.APP_CLIENT_ID = process.env.APP_CLIENT_ID;
  }

  /**
   * getSiteData
   * Request Information
   * @description:
   * This method should be used to retrieve client app configuration
   *
   * @urlParameters
   * clientId : string,Required
   **/
  getSiteData() {
    let promise = axios.get('clients/' + this.APP_CLIENT_ID)
    .then(response =>{
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
    });

    return promise
  }

  /**
   * getComponentContent
   * Request Information
   * @description:
   * This method will retrieve content of a specific site page identified by the slug used for loading it.
   *
   * @urlParameters
   * slug : string,Required
   **/
  getComponentContent(slug = null) {
    if(slug) {
      let promise = axios.get('content/' + slug)
        .then(response =>{
          return Promise.resolve(response.data);
        })
        .catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request getComponentContent: no slug');
      return null
    }
  }

  // getStaticCompanyPage(slug){
  //   let deferred = this.q.defer();
  //   let url = null;
  //
  //   switch(slug){
  //     case 'terms-of-use':
  //       url = 'terms-of-use';
  //       break;
  //     case 'service-agreement':
  //       url = 'subscription-agreement';
  //       break;
  //     case 'privacy-policy':
  //       url = 'privacy-policy';
  //       break;
  //   }
  //
  //   if (url){
  //     this.http.get(
  //       this.url + 'company/' + url)
  //       .then(results => {
  //         deferred.resolve(results.data);
  //       }).catch((error) => {
  //       deferred.reject(error.data.message ? error.data.message : error.data ? error.data : error);
  //     });
  //   } else {
  //     deferred.reject();
  //   }
  //
  //   return deferred.promise;
  // }
  //
  //
  // getCompany(){
  //   let deferred = this.q.defer();
  //   this.http.get(
  //     this.url + 'company/')
  //     .then(results => {
  //       deferred.resolve(results.data);
  //     }).catch((error) => {
  //     deferred.reject(error.data.message ? error.data.message : error.data ? error.data : error);
  //   });
  //
  //   return deferred.promise;
  // }
}

export {StaticContentService}



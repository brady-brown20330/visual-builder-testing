import * as contentstack from 'contentstack';
import ContentstackLivePreview from "@contentstack/live-preview-utils";


export const Stack = contentstack.Stack({ 
  // update your configs here

    api_key: 'blt6392abc0c9e0b609',
    preview_token: 'cs83bf61c3284d6b712faf3666',
    delivery_token: 'csa001e09629907c88256966c8',
    environment: 'local',
    enable: true,
    // host: 'rest-preview.contentstack.com' //optional

})

ContentstackLivePreview.init({
  // enable: true,
  // stackSdk: Stack,
  // ssr: true,
});

// app.use((req, response, next) => {
//   // this will get live_preview hash and ContentType to the request
//   Stack.livePreviewQuery(req.query);
//   next();
// });
export default {

getEntry(ctUid, locale){
  return new Promise((resolve, reject) => {
    Stack.ContentType(ctUid)
      .Query()
      .language(locale)
      .includeOwner()
      .toJSON()
      .find()
      .then(
        (result) => {
          resolve(result)
        },
        (error) => {
          reject(error)
        }
      )
  })
}
}
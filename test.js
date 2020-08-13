var DeepAffects = require('deep-affects');

var defaultClient = DeepAffects.ApiClient.instance;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = "mDoOik9rXBIJxV6o3iQLueqQSBMvTPod";

var api = new DeepAffects.EmotionApi();

var body = DeepAffects.Audio.fromFile("./audios/goodthings.mp3"); // {Audio} Audio object that needs to be denoised.

// webhook = "https://webhook.site/a88f5936-9174-427e-b02c-40adce58de20"
webhook = 'http://localhost:3000/api/hook'
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);

  }
};

api.asyncRecogniseEmotion(body, webhook, callback);
//
    // var request = require("request");

    // var options = { method: 'POST',
    //   url: 'https://proxy.api.deepaffects.com/audio/generic/api/v1/async/analytics/interaction',
    //   qs: 
    //    { apikey: 'mDoOik9rXBIJxV6o3iQLueqQSBMvTPod',
    //      webhook: '<WEBHOOK_URL>' },
    //   headers: 
    //    { 'cache-control': 'no-cache',
    //      'Content-Type': 'application/json' },
    //   body: 
    //    { url: 'https://publicly-facing-url.flac',
    //      encoding: 'FLAC',
    //      languageCode: 'en-US',
    //      sampleRate: 8000,
    //      metrics: ['all'] },
    //   json: true };

    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);

    //   console.log(body);
    // });
//
// POST https://proxy.api.deepaffects.com/audio/generic/api/v2/sync/recognise_emotion

// POST https://proxy.api.deepaffects.com/audio/generic/api/v2/async/recognise_emotion
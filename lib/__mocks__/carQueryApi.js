const trims = {
    model_id: '57506',
    model_make_id: 'ford',
    model_name: 'Mustang',
    model_trim: 'Boss 302',
    model_year: '2013',
    model_body: 'Coupe',
    model_engine_valves_per_cyl: '4',
    model_drive: 'Rear',
    model_transmission_type: '6-speed manual',
    model_seats: '4',
    model_doors: '2',
    model_make_display: 'Ford'
  };
  
  export default function request(url) {
    return new Promise((resolve, reject) => {
      const make = url.substr('keyword=Ford'.length, 11);
      process.nextTick(
        () => trims.model_make_display ? resolve(trims.model_make_display) : reject({
          error: 'Could not find make with name ' + make + ' not found.',
        })
      );
    });
  }

  // return new Promise(resolve => {
  //   // This is an example of an http request, for example to fetch
  //   // user data from an API.
  //   // This module is being mocked in __mocks__/request.js
  //   http.get({path: url}, response => {
  //     let data = '';
  //     response.on('data', _data => data += _data);
  //     response.on('end', () => resolve(data));
  //   });
  // });
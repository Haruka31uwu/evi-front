if (process.browser) {
  window.culqi = function () {
    window.__culqi_token = window.Culqi
  };
}
export default class Culqi {

  constructor(codigoComercio) {
    if (process.browser) {
      this.appendCulqiScript().then(() => {
        window.Culqi.publicKey = codigoComercio;
        window.Culqi.init();
      });
    }
  }

  appendCulqiScript() {
    return new Promise((resolve) => {
      let c = 0;
      if (!document.getElementById('culqui-lib')) {
        let culqiScript = document.createElement('script');
        culqiScript.setAttribute('src', 'https://checkout.culqi.com/v4');
        culqiScript.setAttribute('id', 'culqui-lib');
        document.body.appendChild(culqiScript);
      } else { console.error('tag alredy append') }
      let checkCulqi = setInterval(() => {
        c++;
        if (c > 10) clearInterval(checkCulqi); // si hace más de 10 intentos termina la verificación de Culqi
        if (window.Culqi) {
          window.__culqi_token = undefined;
          clearInterval(checkCulqi)
          resolve()
        }
      }, 1000);
    });
  }

  createToken() {
    return new Promise(
      resolve => {       
        /* REVISA QUE ESTÁ DISPONIBLE EL TOKEN Y RESUELVE LA PROMESA */
        let c = 0;
        let checkToken = setInterval(() => {
          c++;
          if (c > 20) clearInterval(checkToken);
          if (window.__culqi_token) {
            clearInterval(checkToken);
            resolve(window.__culqi_token);
          } else { }
        }, 1000)
      }
    )
  }
}
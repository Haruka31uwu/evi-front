<template>
  <div class="modal-customized">
    <div
      class="modal-customized-body d-flex flex-column pb-5"
      style="border-radius: 2em"
    >
      <div
        class="modal-customized-header w-100 d-flex justify-content-between px-3 pt-4"
      >
        <svg
          class="d-none"
          width="36"
          height="20"
          viewBox="0 0 36 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4.37102e-07 9.99972C-4.47741e-07 10.2431 0.167831 10.5666 0.338169 10.7237L9.93811 19.6715C10.3864 20.078 11.1125 20.1249 11.6348 19.7127C12.1019 19.3437 12.1137 18.6245 11.6817 18.2239L3.97567 11.0526L34.8001 11.0526C35.463 11.0526 36 10.5812 36 10.0001C36 9.41851 35.4626 8.9475 34.8001 8.9475L3.97567 8.9475L11.6817 1.7762C12.1136 1.37566 12.0831 0.67402 11.6348 0.287828C11.1619 -0.120057 10.3792 -0.0837119 9.93811 0.328947L0.338169 9.2764C0.0560794 9.51908 0.00459628 9.75294 -4.37115e-07 10L-4.37102e-07 9.99972Z"
            fill="#F0F0F0"
          />
        </svg>
        <svg
          @click="closeModal"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3474 9.99739L0.347368 1.99527C-0.115791 1.53199 -0.115791 0.794876 0.347368 0.352728C0.789551 -0.110552 1.52628 -0.110552 1.98948 0.331723L9.98951 8.33384L17.9895 0.331723C18.4527 -0.110574 19.1895 -0.110574 19.6526 0.331723C20.0948 0.795004 20.0948 1.53197 19.6526 1.99525L11.6526 9.99737L19.6526 17.9995C20.1158 18.4628 20.1158 19.1999 19.6526 19.642C19.421 19.8947 19.1263 20 18.8316 20C18.5368 20 18.2421 19.8947 18.0105 19.663L10.0105 11.6609L2.01046 19.663C1.77887 19.8947 1.48414 20 1.1894 20C0.894672 20 0.599926 19.8947 0.368345 19.663C-0.0948143 19.1998 -0.0948143 18.4626 0.368345 18.0205L8.3474 9.99739Z"
            fill="#F0F0F0"
          />
        </svg>
      </div>
      <div class="row mx-auto d-flex flex-column gap-5" style="width: 80%">
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <span style="color: white">Estimado (a) usuario (a)</span>
          <p style="color: white; text-align: center">
            Autorización para el Tratamiento de Datos Personales En EviSalud –
            Evidencias en Salud somos respetuosos de su privacidad y del cuidado
            de sus datos personales. Por ello queremos que conozcas nuestra
            Política de Protección de Datos del Usuario, que se detalla a
            continuación: De conformidad con la Ley Nº 29733, Ley de Protección
            de Datos Personales (en adelante “la Ley”), y su reglamento,
            aprobado por el Decreto Supremo Nº 003-2013-JUS (en adelante, “el
            reglamento”), el usuario o interesado da su consentimiento,
            autorizando a EviSalud el tratamiento de sus datos personales que
            son recolectados a través de nuestra web o por cualquier otra forma
            de aceptación expresa. Asimismo, el usuario o interesado es
            consciente que EviSalud Consultorías utilizará sus datos para fines
            expuestos a continuación. Estos datos serán incorporados en el banco
            de datos de usuarios y de interesados que administra EviSalud, para:
            • Remitir información pertinente al titular de los datos de
            contacto, vía correo electrónico, WhatsApp o telefónica • Realizar
            el seguimiento de un eventual proceso de inscripción, lo cual
            incluye el envío de invitaciones a actividades convocadas por
            EviSalud, y de publicidad • Fines estadísticos o de investigación
            (de forma anónima) • En general para el cumplimiento de cualquier
            finalidad relacionada con los servicios que EviSalud ofrece (de
            forma anónima) Asimismo, los datos se mantendrán mientras sean
            útiles para que EviSalud pueda prestar y ofrecer sus servicios.
            EviSalud Consultorías no vende o distribuye sus datos personales o
            terceros a fin de permitirles promocionar sus productos o servicios.
            El usuario o interesado, en cualquier circunstancia, podrá ejercer
            los derechos de acceso, rectificación, oposición o cancelación de la
            autorización de tratamiento de sus datos personales escribiendo a:
            datosevisalud@gmail.co
          </p>
          <!-- <div class="btn-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M15.3649 6.45468C14.6685 3.78518 12.5213 1.63796 9.82273 0.970588C7.12421 0.303212 4.19356 1.1737 2.33651 3.26288C0.0442156 5.81632 -0.245948 9.64648 1.6111 12.5481C1.46602 13.5927 1.34995 14.6373 1.20487 15.6819C1.14684 16.0591 1.6111 16.3202 1.93028 16.2332C2.94585 15.943 3.99044 15.6819 5.00601 15.3917C7.76257 16.5234 10.9544 16.0011 13.1596 13.9699C15.2198 12.0839 16.0612 9.12419 15.3649 6.45468ZM13.3337 12.0548C11.5927 14.6083 8.1688 15.5658 5.35421 14.2891C5.35421 14.2891 5.35421 14.2891 5.32519 14.2891C5.20913 14.2311 5.06405 14.2021 4.88995 14.2311C4.07749 14.4632 3.26503 14.6663 2.45257 14.8984C2.53962 14.2021 2.62667 13.5347 2.71372 12.8383C2.74274 12.6062 2.80077 12.345 2.6847 12.1129C2.59766 11.9678 2.48159 11.8227 2.39454 11.6486C2.19143 11.3004 2.01733 10.9232 1.87225 10.546C1.40798 9.21124 1.37897 7.7314 1.81421 6.39665C2.56864 4.04632 4.71585 2.27632 7.15322 1.98616C9.67765 1.63796 12.2021 2.85665 13.5078 4.97485C14.8426 7.15107 14.7555 9.93664 13.3337 12.0548Z"
                fill="#F0F0F0"
              />
              <path
                d="M12.0284 9.32594L10.7227 8.31037C10.3164 7.99119 9.76512 8.04922 9.41693 8.39742L9.03971 8.77463C8.74955 8.60053 8.4884 8.39742 8.22725 8.16529C7.99512 7.93316 7.79201 7.64299 7.61791 7.35283L7.99512 6.97562C8.34332 6.62742 8.37234 6.07611 8.08217 5.66988L7.0666 4.33513C6.86349 4.04496 6.54431 3.87087 6.19611 3.87087C5.84791 3.84185 5.49972 3.98693 5.26759 4.21906L4.13595 5.3507C3.49759 5.98906 3.35251 6.97562 3.75873 7.78808C4.31005 8.83266 5.00644 9.76119 5.8189 10.5736C6.63135 11.3861 7.58889 12.0825 8.60447 12.6338C8.92365 12.8079 9.24283 12.8659 9.56201 12.8659C10.0843 12.8659 10.6356 12.6628 11.0128 12.2566L12.1445 11.125C12.3766 10.8928 12.5217 10.5446 12.4927 10.1964C12.4927 9.84824 12.3186 9.52906 12.0284 9.32594ZM11.332 10.3125L10.2004 11.4441C9.9102 11.7343 9.47496 11.7923 9.12676 11.6182C8.19824 11.125 7.35676 10.5156 6.60234 9.76119C5.84791 9.00676 5.23857 8.16529 4.74529 7.23676C4.57119 6.88857 4.62923 6.45332 4.91939 6.16316L6.05103 5.03152C6.05103 5.03152 6.05103 5.03152 6.08004 5.03152C6.10906 5.03152 6.10906 5.03152 6.10906 5.06054L7.03758 6.27922L6.66037 6.62742C6.37021 6.91758 6.28316 7.38185 6.48627 7.75906C6.7184 8.22332 7.03758 8.62955 7.38578 8.97775C7.73398 9.32594 8.14021 9.64512 8.60447 9.87725C8.98168 10.0804 9.41693 9.99332 9.70709 9.70316L10.1133 9.29693L11.303 10.2255C11.303 10.2255 11.332 10.2255 11.332 10.2545C11.332 10.2835 11.332 10.3125 11.332 10.3125Z"
                fill="#F0F0F0"
              />
            </svg>
            <span
              ><a
                target="_blank"
                href="https://wa.me/+51950876703"
                style="color: inherit"
                >Ir a Whatsapp (+51 950 876 703)</a
              ></span
            >
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
    <script>
export default {
  emits: ["closeModal", "openComplaintsBookForm"],
  setup(props, ctx) {
    const closeModal = () => {
      ctx.emit("closeModal");
    };

    return {
      closeModal,
    };
  },
};
</script>
    <style lang="scss" scoped>
.modal-customized {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-customized-body {
  width: 50%;
  background-color: #1c1c24;
}
@media (max-width: 768px) {
  .modal-customized-body {
    width: 80%;
  }
}
.input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 95%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
}
</style>
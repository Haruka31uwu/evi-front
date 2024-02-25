<template>
  <section class="d-flex justify-content-center flex-column align-items-center" id="frequent-questions">
    <div class="section-title d-flex my-5" style="column-gap: 2em">
      <h2 class="">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.9767 0C9.39535 0 0 9.39535 0 20.9767C0 32.5581 9.39535 42 20.9767 42C32.5581 42 42 32.5581 42 20.9767C42 9.39535 32.5581 0 20.9767 0ZM20.9767 38.6512C11.2558 38.6512 3.34884 30.7442 3.34884 20.9302C3.34884 11.2093 11.2558 3.30233 20.9767 3.30233C30.7442 3.30233 38.6977 11.2093 38.6977 20.9302C38.6512 30.7442 30.7442 38.6512 20.9767 38.6512Z"
            fill="#F0F0F0"
          />
          <path
            d="M20.7443 10.2324C18.8838 10.2324 17.3954 10.6975 16.2326 11.6743C15.0233 12.6045 14.5117 13.9534 14.5117 15.5347L14.5582 15.6743H17.442C17.442 14.6975 17.7675 13.9534 18.3722 13.4882C19.0233 12.9766 19.814 12.6975 20.7908 12.6975C21.7675 12.6975 22.6513 13.0231 23.2094 13.5813C23.814 14.1859 24.0931 14.9766 24.0931 16.0464C24.0931 16.9766 23.9071 17.7208 23.442 18.372C23.0233 18.9766 22.3257 19.9068 21.3024 21.1161C20.3257 22.0464 19.628 22.7906 19.442 23.3022C19.1629 23.9068 19.0233 24.8836 19.0233 26.372H22.0001C22.0001 25.4417 22.0466 24.7906 22.1861 24.372C22.2326 23.9068 22.6047 23.4417 23.1164 22.9301C24.3257 21.8138 25.2559 20.651 26.0001 19.5813C26.6513 18.5115 27.0699 17.3022 27.0699 15.9999C27.0699 14.1859 26.5582 12.7906 25.3954 11.7208C24.2326 10.6975 22.6978 10.2324 20.7443 10.2324Z"
            fill="#F0F0F0"
          />
          <path
            d="M22.0463 29.3945H18.9766V32.5108H22.0463V29.3945Z"
            fill="#F0F0F0"
          />
        </svg>
        Preguntas Frecuentes
      </h2>
      <div
        class="section-decorator"
        style="margin-top: 0.2em; width: 85%"
      ></div>
    </div>
    <div class="section-container">
      <img
        src="/assets/img/benefits/evi-questions.png"
        style="width: 40%; height: 50%"
        alt="evi-questions"
      />
      <ul class="frequent-question-container">
        <li
          v-for="(frequentQuestion, index) in frequentQuestions.filter(
            (frequentQuestion, index) => (viewMoreQuestions ? index : index < 5)
          )"
          :key="`frequent-question-${index}`"
          :class="frequentQuestion.open ? 'frequent-question-open' : ''"
        >
          <h4>
            {{ frequentQuestion.question }}
            <svg
              @click="frequentQuestion.open = !frequentQuestion.open"
              v-if="!frequentQuestion.open"
              class="arrow"

              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5521 9.99905C9.86387 9.99186 10.1618 9.86997 10.3882 9.65715L18.257 2.15489C18.5804 1.84395 18.7128 1.38562 18.6044 0.951675C18.4957 0.517761 18.1629 0.174097 17.7303 0.0496167C17.298 -0.0748903 16.8317 0.0387152 16.5063 0.347911L9.51257 7.01957L2.51883 0.347909C2.19344 0.0387149 1.7271 -0.0748859 1.29482 0.0496153C0.862298 0.174123 0.529462 0.517765 0.420758 0.951674C0.312297 1.38559 0.44469 1.84391 0.768096 2.15488L8.63697 9.65715C8.88309 9.88894 9.21286 10.0121 9.55162 9.99905L9.5521 9.99905Z"
                fill="#F0F0F0"
              />
            </svg>
            <svg
              v-else
              @click="frequentQuestion.open = !frequentQuestion.open"
              class="arrow"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.47329 0.000945222C9.16152 0.00814104 8.86357 0.13003 8.63722 0.342845L0.768348 7.84511C0.444943 8.15605 0.312549 8.61438 0.42101 9.04832C0.529691 9.48224 0.862538 9.8259 1.29507 9.95038C1.72738 10.0749 2.1937 9.96128 2.51908 9.65209L9.51282 2.98043L16.5066 9.65209C16.8319 9.96128 17.2983 10.0749 17.7306 9.95038C18.1631 9.82588 18.4959 9.48223 18.6046 9.04832C18.7131 8.61441 18.5807 8.15609 18.2573 7.84511L10.3884 0.342845C10.1423 0.111062 9.81253 -0.0121391 9.47377 0.000945222H9.47329Z"
                fill="#F0F0F0"
              />
            </svg>
          </h4>
          <p
            class="frequent-question-answer"
            v-show="frequentQuestion.open"
            v-html="frequentQuestion.answer"
          ></p>
        </li>
        <li
          :class="viewMoreQuestions ? 'frequent-question-open' : ''"
          @click="viewMoreQuestions = !viewMoreQuestions"
          style="
            cursor: pointer;
            font-weight: 600;
            text-align: center;
            margin-top: 1em;
          "
        >
          {{ viewMoreQuestions ? "Ver menos" : "Ver más" }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const viewMoreQuestions = ref(false);
    const frequentQuestions = reactive([
      {
        question: "¿Algún curso que me recomienden para iniciar?",
        answer: `<span>Si estás interesad@ en desarrollar tus competencias en investigación en salud, te recomendamos iniciar el curso de <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/course-detail/1"> elaboración de protocolos de investigación</a>. 

        Por otro lado, si estás interesad@ en desarrollar tus competencias en medicina basada en evidencias, te recomendamos iniciar el <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/course-detail/7">curso de introducción a la medicina basada en evidencia </a>, luego del cual podrás buscar, leer críticamente ensayos clínicos aleatorizados y revisiones sistemáticas con las cuales tomar decisiones en salud.

        Si quieres completar tu formación en investigación o medicina basada en evidencias, te recomendamos llevar sus respectivos <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/courses">programas</a>, los cuales incluyen de 5 a 6 cursos ordenados estratégicamente para aprender paso a paso y de manera práctica. ¡El camino de la investigación y uso de evidencia está más claro que nunca!
        </span>`,
        open: false,
      },
      {
        question: "¿Cómo me inscribo? ¿Pasarela?",
        answer: "¿Pasarela?",
        open: false,
      },
      {
        question:
          "¿Debo esperar necesariamente al inicio de los talleres sincrónicos para inscribirme en el curso?",
        answer:
          `<span>No es necesario esperar al inicio de la cohorte sincrónica para inscribirte en los cursos. Es más, te alentamos a que puedas inscribirte en cualquier momento al curso o programa de tu interés para que tengas acceso inmediato a todo el contenido teórico y puedas revisarlo a tu ritmo e incluso más de una vez. Luego de ello, solo te quedaría esperar al inicio de los talleres sincrónicos en donde podrás realizar todas las preguntas que consideres necesarias y resolver todas tus dudas.  De esta forma, obtener el certificado y completar la experiencia de aprendizaje. Puedes consultar la fecha de inicio de los talleres sincrónicos haciendo  <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/courses">click aquí.</a></span>`,
        open: false,
      },
      {
        question: "¿Emiten certificado?",
        answer:
          "Sí. Emitimos dos tipos de certificados. Si apruebas el curso o programa tendrás un certificado de aprobación. En caso contrario, obtendrás un certificado de asistencia. Ambos certificados se emiten a nombre de EviSalud. Esperamos de todo corazón que logres el certificado de aprobación, ¡confiamos en tí y en todo tu potencial!",
        open: false,
      },
      {
        question: "¿Cuántas horas académicas?",
        answer: "Falta calcular",
        open: false,
      },
      {
        question: "¿Los certificados cuentan con creditaje?",
        answer:
          "Por el momento los certificados no cuentan con creditaje. Sin embargo, estamos trabajando en ello",
        open: false,
      },
      {
        question:
          "Si llevo alguno de los programas de formación, ¿cuántos certificados tendré?",
        answer:
          `<span>Tendrás un certificado por cada curso que incluya el programa y un certificado adicional correspondiente al programa de formación que hayas elegido. Por ejemplo, si llevas el programa de formación en medicina basada en evidencias, tendrás 5 certificados (uno por cada curso) y 1 certificado correspondiente al programa, en total 6 certificados. Puedes revisar más información sobre cómo obtener el certificado de los programas de formación haciendo  <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/program-detail/1">click aquí.</a></span>`,
        open: false,
      },
      {
        question: "¿Hasta cuándo tendré acceso al curso?",
        answer:
          "De momento, los videos teóricos estarán disponibles durante al menos 12 meses. Sin embargo, estamos trabajando en una plataforma propia para que puedas contar con todo el contenido de forma ilimitada y seguir aprendiendo con las actualizaciones que hagamos al curso.",
        open: false,
      },
      {
        question: "¿Las reuniones de los talleres sincrónicos quedan grabadas?",
        answer:
          "Sí. La resolución quedará grabada y estará disponible para que puedas visualizarla en caso no hayas podido asistir o por si deseas repasar lo aprendido en el taller. Solo recuerda que si no logras asistir, debes realizar la justificación debida para que no se te considere como ausencia.",
        open: false,
      },
      {
        question: "¿Qué beneficios tendré?",
        answer:
          `<span>Todas las personas que hayan llevado al menos un curso en EviSalud, se vuelven parte de la comunidad de Evialumnos, los cuales tienen un descuento especial en los siguientes cursos o programas en los que se matriculen.Además, los miembros de la comunidad de Evialumnos pueden formar parte del sistema de referidos. El sistema de referidos es un programa de recompensas que permite acumular descuentos por cada persona nueva que se matricule a uno de nuestros cursos con el código del Evialumno que refiere; es decir, a más personas que recomienden, más descuentos se obtiene en nuestros cursos. Para conocer más sobre los beneficios que tendrás, te invitamos a revisar esta sección haciendo  <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/benefits">click aquí.</a></span>`,
        open: false,
      },
      {
        question: "¿Quiénes serán los docentes?",
        answer:
          `<span>experiencia en investigación y uso de evidencia para la toma de decisiones, los cuales han participado en más de 200 artículos científicos, más de 30 guías de práctica clínica y evaluación de tecnologías sanitarias. Puedes revisar su perfil profesional y publicaciones científicas haciendo <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/about">click aquí</a></span>`,
        open: false,
      },
      {
        question: "¿Cuánto dura el curso?",
        answer:
          `<span>Nuestros cursos tienen una duración de 3 a 5 semanas. En la sección de cursos tendrás toda la información sobre la duración de cada curso o programa de formación, por favor ¡ve a darle un vistazo haciendo <a style="text-decoration:underline;color:#00A9C3;" class="link" href="/courses">click aquí!</a></span>`,
        open: false,
      },
      {
        question: "¿Se puede fraccionar el pago en cuotas?",
        answer:
          "Lamentablemente, por el momento no contamos con dicha modalidad de pago.",
        open: false,
      },
      {
        question:
          "¿Puedo reservar mi vacante para una siguiente edición, sin costo adicional?",
        answer:
          "Claro que sí, entendemos que puedes tener recargada tu agenda así que coordinaremos para que puedas reservar la vacante según tu disponibilidad de tiempo y acorde a nuestra programación de los talleres sincrónicos. De esta forma podrás aprovechar completamente nuestra experiencia de aprendizaje.",
        open: false,
      },
    ]);
    return {
      frequentQuestions,
      viewMoreQuestions,
    };
  },
});
</script>
<style scoped lang="scss">
@use "scss/_colors.scss" as colors;
@use "scss/_mixins.scss" as mixins;
.section-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  ul {
    list-style: none;
    width: 50%;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    li {
      background: colors.$EVIDARK005;
      margin: 0;
      padding: 1em 0.8em;
      border-radius: 2em;
      box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.3);
      border: 1px solid colors.$EVIDARK004;
      h4 {
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.5em;
        @include mixins.font(400, 1em, 1.5, colors.$EVI400);
      }
      p {
        @include mixins.font(400, 0.8em, 1.5, colors.$EVI400);
        margin: 0;
      }
    }
  }
}
@media (max-width: 768px) {
  .section-container {
    flex-direction: column-reverse;
    width: 100%;
    img {
      align-self: end;
      transform: scaleX(-1);
    }
    ul {
      width: 100%;
    }
  }
}
.frequent-question-open {
  border: 1px solid colors.$EVIDARK002 !important;
  
}
.arrow{
    &:hover{
      cursor: pointer;
      path{
        fill: colors.$EVIDARK002;
      }
    }
  }
.link{

  &:hover{
    color: colors.$EVIDARK001!important;
  }
}
</style>
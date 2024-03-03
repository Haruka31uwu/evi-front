<template>
  <section class="experiencies-section">
    <div class="section-title">
      <h2>Experiencias</h2>
      <div class="section-decorator" style="left: 1em"></div>
    </div>
    <div class="" style="width: 90%;">
      <Carousel
        :value="experiencies"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        class="carousel-without-pages"
        @touchstart="touchStartEvent"
        @touchmove="touchMoveEvent"
      >
        <template #item="slotProps">
          <div class="border-1 surface-border border-round m-4 p-carousel-container">
            <div class="mb-3 h-100">
              <div class="relative mx-auto p-carousel-content">
                <div class="p-carousel-body">
                  <span>{{ slotProps.data.content }}</span>
                </div>
                <div class="p-carousel-footer">
                  <span>{{ slotProps.data.owner }}</span>
                  <span>{{ slotProps.data.course }}</span>

                </div>
                <!-- <Tag
                  :value="slotProps.data.inventoryStatus"
                  :severity="getSeverity(slotProps.data.inventoryStatus)"
                  class="absolute"
                  style="left: 5px; top: 5px"
                /> -->
              </div>
            </div>
            <!-- <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
            <div class="flex justify-content-between align-items-center">
              <div class="mt-0 font-semibold text-xl">
                ${{ slotProps.data.price }}
              </div>
              <span>
                <Button icon="pi pi-heart" severity="secondary" outlined />
                <Button icon="pi pi-shopping-cart" class="ml-2" />
              </span>
            </div> -->
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>
<script setup>
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "850px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
const experiencies = ref([
  {
    content:
      "Muy buen curso, los docentes son muy amables y realmente tienen ganas de enseñar.",
    owner: "María Torres",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Estoy muy feliz con el curso, no sólo he aprendido a usar Stata sino también a interpretar las tablas de los artículos científicos.",
    owner: "Yessica Velasquez",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Fue un curso grandioso. Explicaron de manera sencilla y detallada conceptos complicados. Quedé encantada con lo que aprendí.",
    owner: "Alessandra Valdivieso",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Estoy muy contenta con el curso de STATA. Los conceptos me quedaron claros, bien explicados y de manera divertida, siempre sacando una sonrisa y sintiéndome satisfecha con lo aprendido.",
    owner: "Nathaly Chinchihualpa",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Hicieron que por fin entienda el análisis estadístico de un trabajo de investigación.",
    owner: "Jorge Fernández",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Curso didáctico, que nos abre paso a la interpretación de resultados y elaboración de tablas. El llevar el curso me permitió abrir una nueva puerta llena de conocimiento que desconocía.",
    owner: "Milagros Tellez",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Siempre me llamó la atención la bioestadística y pensé que sería imposible aprenderlo, me alegra equivocarme en esta ocasión. Considero que Evisalud ha podido estructurar de manera óptima y creativa las clases para que todos podamos entenderlas.",
    owner: "Mayra Chipana",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "¡Excelente curso! ¡Es un curso imprescindible que debió ser enseñado en pregrado! Pero nunca es tarde",
    owner: "Katherine Jara",
    course: "Análisis estadístico con STATA",
  },
  {
    content: "Muy buen curso, didáctico y claro. 100% recomendado",
    owner: "Raisa Martínez",
    course: "Análisis estadístico con STATA",
  },
  {
    content:
      "Un gran curso, con maestros que aman enseñar. Me encantó desde la primera clase hasta la última. Muchas gracias por todo EviSalud.",
    owner: "Eddy Mesías",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "¡Muy buen curso! No me imaginaba que iban a explicar de forma tan detallada y, sobre todo, dar tips de redacción puntuales que sirven un montón.",
    owner: "Luis Merzthal",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "Amé la didáctica. Somos jóvenes y a diferencia de las clases monótonas de la universidad, este curso usa memes y tiempos cortos que captan tu atención. Por otro lado los docentes están muy capacitados y sobre todo hablan a partir de la experiencia. ¡Recomendado!",
    owner: "Karla Quijano",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "Un curso muy didáctico. Nos brindaron de una forma divertida y muy esquemática los puntos claves de la redacción.",
    owner: "Willy Muñoz",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "Evisalud tiene los mejores docentes para el aprendizaje en investigación. La metodología de las teorías y el complemento con los talleres son lo mejor. Estoy muy agradecida por todo lo aprendido en el curso.",
    owner: "Melissa Becerra",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "El curso resulta realmente útil para aquellos que se inician en la redacción y publicación científica. La metodología de flexibilidad de horarios para ver las clases me permitió adaptarlo a mis actividades laborales y personales. No me queda más que felicitarlos.",
    owner: "Stefany Salvador",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "El curso te permite comprender de forma sencilla lo que antes me parecía muy complicado, y llegas a agarrarle el gusto. Los docentes siempre prestos a responder las consultas y el cómo te guían pasito a pasito es lo que más me ha gustado de este curso. ¡Gracias EviSalud!",
    owner: "Elsie Valiente",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "Todo el material brindado y las clases dadas fueron de mucho aprovechamiento para mi. En la universidad no nos explican de esta manera tan detallada. ¡Muchas gracias!",
    owner: "Melanie Ponce",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "Me gusto mucho la paciencia y la pasión como enseñan cada clase, muy contenta con el curso",
    owner: "Liseth Pinedo",
    course: "Redacción y publicación de artículos científicos biomédicos",
  },
  {
    content:
      "Un curso bien equilibrado. La dosis perfecta de teoría y práctica, excelentes docentes y material muy cuidado que te permite recordar con facilidad todo lo aprendido.",
    owner: "Sergio Bravo",
    course: " Redacción y publicación de casos clínicos",
  },
  {
    content:
      "100% recomendado y totalmente acorde con la metodología de aprendizaje ¡A por otro curso más!",
    owner: "Sommer Porras",
    course: " Redacción y publicación de casos clínicos",
  },
  {
    content:
      "Después de llevar este curso estoy con mucho entusiasmo de poder hacer mi primera publicación.",
    owner: "Amilcar Gonzales",
    course: " Redacción y publicación de casos clínicos",
  },
]);
const lastTouchY=ref(0);
    const lastTouchX=ref(0);
    const initialScrollY=ref(0);
    const initialScrollX=ref(0);
    const lastTouchMoveTime=ref(0);
    const touchStartEvent = (e) => {
      lastTouchY.value = e.touches[0].clientY;
      lastTouchX.value = e.touches[0].clientX;
      initialScrollY.value = window.scrollY;
      initialScrollX.value = window.scrollX;
      lastTouchMoveTime.value = new Date().getTime();
    };
    const touchMoveEvent = (event) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTouchMoveTime.value;

      if (timeDiff < 100) { // Solo ajusta si ha pasado menos de 100 ms desde el último evento de touchmove
        const deltaY = event.touches[0].clientY - lastTouchY.value;
        const deltaX = event.touches[0].clientX - lastTouchX.value;
        const velocityY = Math.abs(deltaY / timeDiff);
        const velocityX = Math.abs(deltaX / timeDiff);

        // Si la velocidad vertical es mayor que la horizontal, y el movimiento vertical es más significativo, ajusta la precisión
        if (velocityY > velocityX && Math.abs(deltaY) > Math.abs(deltaX)) {
          // Si la velocidad es baja, ajusta la precisión
          if (velocityY < 0.5) {
            event.preventDefault();
            const scrollDelta = deltaY * 100;
            window.scrollTo(0, initialScrollY.value - scrollDelta);
          }
        }
      }

      lastTouchMoveTime.value = currentTime;
      lastTouchY.value = event.touches[0].clientY;
      lastTouchX.value = event.touches[0].clientX;
    };
</script>

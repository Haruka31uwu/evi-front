<template>
  <div class="w-100 d-flex flex-column align-items-center">
    <div
      class="dragdrop-container"
      @dragover.prevent="isOnDrag = true"
      @dragleave.prevent="isOnDrag = false"
      @drop.prevent="dropFiles"
      style="position: relative"
      :style="
        !isOnDrag
          ? { border: '0.2em dashed var(--EVI-DARK-004, #515166)' }
          : { border: '0.2em solid var(--EVI-DARK-004, #515166)' }
      "
    >
      <svg
        v-if="files.length > 0"
        @click="clearFiles"
        style="position: absolute; top: 0.3em; right: 0.5em"
        data-v-ea000884=""
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          data-v-ea000884=""
          d="M8.3474 9.99739L0.347368 1.99527C-0.115791 1.53199 -0.115791 0.794876 0.347368 0.352728C0.789551 -0.110552 1.52628 -0.110552 1.98948 0.331723L9.98951 8.33384L17.9895 0.331723C18.4527 -0.110574 19.1895 -0.110574 19.6526 0.331723C20.0948 0.795004 20.0948 1.53197 19.6526 1.99525L11.6526 9.99737L19.6526 17.9995C20.1158 18.4628 20.1158 19.1999 19.6526 19.642C19.421 19.8947 19.1263 20 18.8316 20C18.5368 20 18.2421 19.8947 18.0105 19.663L10.0105 11.6609L2.01046 19.663C1.77887 19.8947 1.48414 20 1.1894 20C0.894672 20 0.599926 19.8947 0.368345 19.663C-0.0948143 19.1998 -0.0948143 18.4626 0.368345 18.0205L8.3474 9.99739Z"
          fill="#F0F0F0"
        ></path>
      </svg>
      <div v-if="files.length > 0">
        <ul style="list-style: none">
          <li v-for="(file, index) in files" :key="index">
            <img :src="getFileUrl(file)" alt="drag-drop-files" style="width: 200px" />
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-3 w-100"
        v-else
      >
        <svg
          width="57"
          height="36"
          viewBox="0 0 57 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M28.5021 34.8055H28.4881C27.8731 34.7982 27.3874 34.3053 27.3915 33.699H27.3915V33.6945V22.1323V20.5228L26.2534 21.6609L21.1495 26.7648C20.7122 27.2021 20.0079 27.202 19.5707 26.7649C19.1336 26.3276 19.1336 25.6234 19.5705 25.1863C19.5706 25.1862 19.5706 25.1861 19.5707 25.186L27.7028 17.0614C27.7736 16.9967 27.8292 16.9512 27.886 16.9135L27.9063 16.9L27.9211 16.8926C27.9362 16.885 27.9607 16.8725 27.9877 16.8571L27.9979 16.8513L28.0078 16.8452C28.0466 16.8213 28.0644 16.8115 28.0819 16.8034C28.0847 16.8025 28.09 16.8009 28.0983 16.7985L28.1179 16.7929L28.1442 16.7854C28.1581 16.7814 28.1758 16.7762 28.1953 16.77C28.2164 16.7642 28.2344 16.7586 28.2482 16.7541L28.2716 16.7465L28.2716 16.7464C28.3583 16.7312 28.4379 16.7233 28.502 16.7233H28.5086C28.566 16.7233 28.6321 16.7296 28.7136 16.7432C28.717 16.7442 28.7219 16.7458 28.7291 16.7481C28.7309 16.7487 28.733 16.7494 28.7356 16.7502C28.7522 16.7556 28.7854 16.7664 28.8226 16.7767C28.8563 16.7874 28.888 16.7965 28.9083 16.8022C28.9117 16.8032 28.9147 16.8041 28.9174 16.8048C28.9243 16.8068 28.9299 16.8084 28.9344 16.8098C28.9407 16.8132 28.948 16.8174 28.9584 16.8234C28.9744 16.8325 28.9976 16.8459 29.0356 16.8671L29.0488 16.8745L29.0623 16.8812C29.077 16.8885 29.0914 16.8955 29.101 16.9001L29.1028 16.901L29.126 16.9122C29.1268 16.9126 29.1275 16.913 29.1282 16.9133L29.1319 16.9158L29.1448 16.9235C29.1829 16.9464 29.234 16.9871 29.2914 17.0445L29.2916 17.0447L37.4399 25.1864C37.8771 25.6237 37.8771 26.3281 37.4399 26.7652L37.4399 26.7653C37.221 26.9841 36.9365 27.093 36.6506 27.093C36.3647 27.093 36.0802 26.9841 35.8612 26.7652L30.7573 21.6613L29.6193 20.5232V22.1327V33.6883C29.6193 34.3059 29.1196 34.8055 28.5021 34.8055Z"
              fill="#0393AA"
              stroke="#0393AA"
              stroke-width="1.33333"
            />
            <path
              id="Vector_2"
              d="M35.9735 11.6264C33.9836 6.39917 28.9004 2.89494 23.3254 2.89494C15.8619 2.89494 9.78912 8.96763 9.78912 16.4312C9.78912 16.9383 9.82493 17.4743 9.89411 18.0573C9.9278 18.3596 9.8425 18.6572 9.6544 18.8914L9.65437 18.8914L9.64999 18.897C9.47156 19.124 9.19787 19.2728 8.89571 19.3026C5.47523 19.6311 2.89482 22.474 2.89482 25.915C2.89482 29.5763 5.87586 32.5572 9.53699 32.5572L20.3146 32.5577C20.9322 32.5577 21.4319 33.0573 21.4319 33.6749C21.4319 34.2924 20.9322 34.7921 20.3147 34.7921H9.53702C4.64696 34.7921 0.666667 30.8113 0.666667 25.9217C0.666667 21.8765 3.32964 18.4546 7.08302 17.3881L7.60107 17.2409L7.56608 16.7035C7.56118 16.6284 7.56094 16.5434 7.56094 16.4386C7.56094 7.7389 14.6401 0.666667 23.3328 0.666667C29.1904 0.666667 34.5924 4.00044 37.2892 9.12337L37.5724 9.66127L38.1341 9.42882C39.6947 8.78293 41.372 8.43915 43.0623 8.42676H43.1567C50.4277 8.42676 56.3396 14.3456 56.3333 21.6148V21.6154C56.3333 28.8862 50.4215 34.798 43.1507 34.798H36.6855C36.0679 34.798 35.5683 34.2984 35.5683 33.6808C35.5683 33.0633 36.0679 32.5636 36.6855 32.5636H43.1507C49.1926 32.5636 54.1052 27.6511 54.1052 21.6092C54.1052 15.5672 49.1926 10.6547 43.1507 10.6547C41.1975 10.6547 39.2768 11.1911 37.587 12.1891L37.5846 12.1906C37.3065 12.3564 36.963 12.3911 36.6516 12.2816L36.6511 12.2814C36.3379 12.1716 36.0903 11.9312 35.9735 11.6264ZM35.9735 11.6264C35.9736 11.6267 35.9737 11.627 35.9738 11.6273L35.3507 11.8645M35.9735 11.6264C35.9734 11.6263 35.9734 11.6262 35.9733 11.626L35.3507 11.8645M35.3507 11.8645C35.5383 12.3543 35.9341 12.7365 36.4305 12.9105L10.1742 19.3089C10.4759 18.9332 10.6102 18.457 10.5564 17.9807C10.4895 17.4175 10.4558 16.9076 10.4558 16.4312C10.4558 9.33582 16.2301 3.56161 23.3254 3.56161C28.6235 3.56161 33.4593 6.89483 35.3507 11.8645Z"
              fill="#0393AA"
              stroke="#0393AA"
              stroke-width="1.33333"
            />
          </g>
        </svg>
        <span class="w-100 text-center">Arrastra o selecciona el archivo desde el navegador</span>
        <div class="btn-gray w-100" @click="openFileInput()">Seleccionar Archivo</div>
        <input type="file" class="d-none"  />
      </div>
    </div>
    <div class="btn-blue mt-4" v-if="isProfile" @click="selectPhotoHandler"><span>Seleccionar foto</span></div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import { useSwall } from "/composables/main-composables.js";
export default defineComponent({
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    isProfile: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["selectedAvatarHandler"],
  setup(props,ctx) {
    const {showErrorSwall} = useSwall();
    const files = ref([]);
    let fileSelector ;
    const isProfile = ref(props.isProfile);
    const multiple = ref(props.multiple);
    const openFileInput = () => {
      const input = document.querySelector('input[type="file"]');
      input.click();
    };
    const isOnDrag = ref(false);
    const clearFiles = () => {
      files.value = [];
      fileSelector.value = "";
    };
    const handleFileInputChange = (e) => {
      try{
        if(isProfile.value){
          const file = e.target.files[0];
          const type = file.type.split("/")[0];
          if(type !== "image"){
            showErrorSwall("","El archivo seleccionado no es una imagen");
            return;
          }
          files.value = [];
          files.value.push(e.target.files[0]);
          return;
        }
        files.value=e.target.files;
      }catch(e){
        console.error(e)
      }
    };
    const getFileUrl = (file) => {
      return URL.createObjectURL(file);
    };
    onMounted(() => {
      fileSelector= document.querySelector('input[type="file"]');

      fileSelector.addEventListener("change", handleFileInputChange);
    });
    const dropFiles = (e) => {
      
      e.preventDefault();
      isOnDrag.value = false;
      if(props.isProfile){
        // if not is an image return
        if(e.dataTransfer.files[0].type.split("/")[0] !== "image"){
          showErrorSwall("","El archivo seleccionado no es una imagen");
          return;
        }
      }
      if (!multiple.value) {
        files.value = [];
        files.value.push(e.dataTransfer.files[0]);
        return;
      }
      files.value.push(...e.dataTransfer.files);
    };
    const selectPhotoHandler = () => {
      if(files.value.length === 0){
        showErrorSwall("","Selecciona una imagen");
        return;
      }
      const file = files.value[0];
      const type = file.type.split("/")[0];
      if(type !== "image"){
        showErrorSwall("","El archivo seleccionado no es una imagen");
        return;
      }

      ctx.emit("selectedAvatarHandler", files.value[0]);
    };
    return {
      openFileInput,
      isOnDrag,
      dropFiles,
      files,
      handleFileInputChange,
      getFileUrl,
      isProfile,
      clearFiles,
      selectPhotoHandler,
    };
  },
});
</script>

<style scoped lang="scss">
.dragdrop-container {
  border-radius: 10px;
  border: 0.2em dashed var(--EVI-DARK-004, #515166);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  width: 90%;
  margin: 0 auto;
  row-gap: 1em;
  height: 400px;
  span {
    font-size: 1.2em;
    color: #0393aa;
    font-family: Axiforma;
  }
}
</style>
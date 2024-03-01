<template>
    <div style="position: relative;" class="d-flex flex-column">
      <input :type="type" v-on="handlers" :value="vValue" :disabled="disabled" :name="name" class="input-customized" :placeholder="!errorMessage?placeholder:''" :v-model="vmodel"/>
      <span class="sign-container-error-message" v-if="errorMessage">{{ errorMessage.substring(0,1).toUpperCase()+errorMessage.substring(1)}}</span>
      <Icon v-if="type=='password'" name="mdi:eye" color="#00A9C3" @click="changeType" style="position:absolute;right:10px;top:15px;font-size: 25px;"/>
          <Icon v-else-if="props.type=='password'&&type=='text'" name="mdi:eye-outline" color="white" @click="changeType" style="position:absolute;right:10px;top:15px;font-size: 25px"/>

    </div>
  </template>
  <script setup>
  import { computed, toRef } from 'vue';
  import { useField } from 'vee-validate';
  import { modes } from '../interactionModes.js';
  
  const props = defineProps({
    name: {
      type: String,
    },
    mode: {
      type: String,
      default: 'aggressive',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
    },
    vValue:{
      type:String,
    },
    disabled:{
      type:Boolean,
      default:false
    },
    vmodel:{
      type:String,
    }
   
  });
  console.log(props)
  const type=ref(props.type);
  const changeType=()=>{
    type.value=type.value=='password'?'text':'password';
  }
  const { meta, value, errorMessage, handleChange, handleBlur } = useField(
    toRef(props, 'name'),
    null,
    {
      validateOnValueUpdate: false,
    }
  );
  
  const handlers = computed(() => {
    const on = {
      blur: handleBlur,
      input: (e) => handleChange(e, false),
    };
    
    const triggers = modes[props.mode]({ errorMessage, meta });
  
    triggers.forEach((t) => {
      if (Array.isArray(on[t])) {
        on[t].push((e) => handleChange(e, false));
      } else {
        on[t] = (e) => handleChange(e, false);
      }
    });
  
    return on;
  });
  </script>
  <style lang="scss" scoped>
  .input-customized {
  border: 1px solid #515166;
  background: transparent;
  width: 100%;
  border-radius: 2em;
  padding: 0.8em 1em;
  resize: none;
  color: white;
}
.sign-container-error-message{
  color: #CB4335;
  font-size: 0.8em;
  margin: 1em 0;

}
</style>
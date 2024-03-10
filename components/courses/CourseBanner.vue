<template>
    <section class="banner" style="position: relative;z-index:3; ">
        <div class="decoration" style="position: absolute;bottom:-10em;left: 0;"></div>
        <div class="banner-content">
            <h2>ACCEDE AL MATERIAL DEL CURSO NI BIEN TE MATRICULES</h2>
            <p style="font-style: italic;">PODRÁS ACCEDER A LOS TALLERES Y OBTENER TU CERTIFICADO</p>
        </div>
        <div class="decoration" style="position: absolute;bottom:-10em;right: 0em;"></div>
    </section>
</template>
<style scoped>
.decoration{
    width:320px;
    height: 320px;
    border-radius: 50%;
    opacity: 0.2;
    background: linear-gradient(180deg, #00A9C3 0%, rgba(0, 169, 195, 0.60) 100%);
    filter: blur(140px);
    z-index: 1 
}
@media (max-width: 768px) {
    .decoration{
        width: 250px;
        height: 250px;
    }
}
</style>
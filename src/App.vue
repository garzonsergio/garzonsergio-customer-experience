<template>
  <ce-header titlePage="Cartera" />
  <div id="nav">
    <nav>
      <router-link to="/">
        <ce-button textLabel="Inicio" />
      </router-link>
      <router-link to="/profile">
        <ce-button textLabel="Perfil" />
      </router-link>
      <router-link to="procedures">
        <ce-button textLabel="Tramites" />
      </router-link>
      <router-link
        to="/cartera/57827505/c329dbfa-7bb0-45ed-a9dd-3c92b282b9e9/59c0bba4-a2f0-4c6e-abb2-78882c2b332d"
        ><ce-button textLabel="Comercial"
      /></router-link>
    </nav>
  </div>
  <router-view />
  <figure>
    <img
      src="https://static.wixstatic.com/media/fb1c95_3a6550e179f8480b8769f42862934061~mv2.png/v1/fill/w_140,h_32,al_c,usm_0.66_1.00_0.01,enc_auto/LOGO-ECOLLECT-POSITIVO.png"
      alt="LOGO-ECOLLECT-POSITIVO.png"
      style="
        width: 140px;
        height: 32px;
        object-fit: cover;
        object-position: 50% 50%;
      "
    />
  </figure>
</template>
<script>
import CeHeader from "@/components/CeHeader";
import CeButton from "@/components/CeButton";

export default {
  name: "App",
  components: {
    CeHeader,
    CeButton,
  },
};
</script>

<style scoped>
@import "./styles/styles.css";
html {
  font-family: Roboto;
}
nav {
  display: flex;
  background-color: var(--background-boxes);
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100vw;
}
figure {
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
img {
  background-color: #041f3e;
}
</style>

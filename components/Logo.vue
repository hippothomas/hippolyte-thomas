<template>
  <div class="logo">
    <p>Hippolyte<span style="font-weight: bold">Thomas</span></p>
  </div>
</template>

<style>
.logo {
  height: 100%;
  max-height: calc(100% - 20px);
  padding: 10px;
  display: flex;
  align-items: center;

  animation: 1s appear;
}

.logo p {
  font-size: 27px;
  margin: 0;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

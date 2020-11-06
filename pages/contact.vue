<template>
  <div class="wrapper">
    <form id="contact" name="contact" method="POST" netlify>
      <input type="text" name="nom" placeholder="Votre nom*" required />
      <input
        type="email"
        name="email"
        placeholder="Votre adresse email*"
        required
      />
      <input type="text" name="sujet" placeholder="Sujet" />
      <textarea
        name="message"
        cols="30"
        rows="10"
        placeholder="Message*"
        required
      >
      </textarea>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Contact - Hippolyte Thomas',
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: calc(100vh - 125px - 34px);
}

#contact {
  width: 80vw;
  max-width: 600px;
  margin: auto;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
#contact input,
#contact textarea,
#contact button {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  border: none;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid;
}
#contact ::placeholder {
  color: #000;
}
#contact textarea {
  resize: none;
  overflow: hidden;
}
#contact textarea:focus,
#contact input:focus {
  outline: none;
}
#contact button {
  background-color: var(--purple);
  width: fit-content;
  padding: 10px 21px;
  border: 1px solid var(--purple);
  border-radius: 30px;
  color: #fff;
  cursor: pointer;

  transition: color 0.5s, background 0.5s;
}
#contact button:hover {
  color: var(--purple);
  background: #fff;
}
</style>

<template>
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <div class="links">
          <nuxt-link to="/"><li>Projets</li></nuxt-link>
          <nuxt-link to="/"><li>À propos</li></nuxt-link>
          <nuxt-link to="/"><li>Contact</li></nuxt-link>
        </div>
        <div class="res">
          <a
            href="https://www.linkedin.com/in/hippolyte-thomas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~/static/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/hippothomas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="~/static/assets/github.png" alt="GitHub" />
          </a>
        </div>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
#menuToggle {
  display: block;
  position: absolute;
  top: calc(50% - (27px / 2));
  right: 100px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #000;

  transition: color 0.3s ease;
}
#menuToggle a:hover {
  color: #3a64db;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0;
  z-index: 2;

  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #000;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #000;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: -100px 0 0 0;
  padding: 0;
  padding-left: 25vw;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #fff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 15px 0;
  font-size: 40px;
}

#menu .links,
#menu .res {
  width: fit-content;
}
#menu .res {
  margin-top: 60px;
}
#menu .res a {
  margin-right: 15px;
}
#menu .res img {
  height: 40px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
</style>

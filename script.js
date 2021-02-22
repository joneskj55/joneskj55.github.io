const subHead = document.getElementById("sub-header");

const typewriter = new Typewriter(subHead, {
  delay: 75,
});

typewriter
  .pauseFor(1500)
  .typeString(
    '<span style="color: #bb0101">O</span><span style="color: #c2d5f5">h</span><span style="color: #bb0101">i</span><span style="color: #c2d5f5">o</span> <span style="color: ivory">Kid</span>'
  )
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<span style="color: ivory">Soldier</span>')
  .pauseFor(300)
  .deleteChars(7)
  .typeString('<span style="color: ivory">Veteran</span>')
  .pauseFor(300)
  .deleteChars(7)
  .typeString(
    '<span style="color: #00cfff;">Software</span> <span style="color: ivory">Engineer</span'
  )
  .pauseFor(1000)
  .start();

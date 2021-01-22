const subHead = document.getElementById('sub-header');

const typewriter = new Typewriter(subHead, {
    delay: 75,
});

typewriter
    .pauseFor(1500)
    .typeString('<span style="color: ivory">Open</span> Source <span style="color: ivory">Contributor</span>')
    .pauseFor(300)
    .deleteChars(25)
    .typeString('<span style="color: #00cfff;">Software</span> <span style="color: ivory">Engineer</span')
    .pauseFor(1000)
    .start();

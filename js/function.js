// menu close toggle button
$(".fa-solid").click(function () {
  $(".fa-solid").toggleClass("fa-bars fa-xmark fa-lg");
});



const counters = document.querySelectorAll('.count');
const speed = 31;

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Call your function here
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'));
          const count = parseInt(counter.innerText);
          const increment = Math.trunc(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = target;
            //   counter.innerText = count + 1;
          }
        };
        updateCount();
      });
    }
  });
}

const sectionToObserve = document.querySelector('#counter-section');
const options = {
  rootMargin: '0px',
  threshold: 0.6 // 0.5 means when 50% of the section is visible
};

const observer = new IntersectionObserver(callback, options);
observer.observe(sectionToObserve);
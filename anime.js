document.addEventListener('DOMContentLoaded', function () {

  const preloader = document.querySelector('.preloader');
  const overlay = document.querySelector('.overlay');
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('.logo');

  const timeline = gsap.timeline({ onComplete: hidePreloader });

  timeline.to(overlay, { duration: 4, opacity: 0, ease: 'power2.inOut' });
  timeline.to(preloader, { duration: 3, opacity: 0, ease: 'power4.inOut' }, '-=1.5');

  timeline.from(nav, { opacity: 0, duration: 1, delay: 0.2 });
  timeline.from(logo, { opacity: 0, x: -150, duration: 0.5, delay: 0.5 });

  function hidePreloader() {
      preloader.style.display = 'none';
  }

});

document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero .first h1');
    const heroSubtitle = document.querySelector('.hero .first p');
    const heroButtons = document.querySelector('.hero .first .buttons');
    const heroImage = document.querySelector('.hero .second img');
    const autumnTitle = document.querySelector('.hero .third h1');
    const autumnSubtitle = document.querySelector('.hero .third p');
    const autumnImage = document.querySelector('.hero .third img');
    const autumnDiscount = document.querySelector('.hero .third .img1 p');
    const scrollSection = document.querySelector('.scroll');

 
    const heroTimeline = gsap.timeline();
    heroTimeline.from(heroTitle, { opacity: 0, y: -50, duration: 2,delay: 3 });
    heroTimeline.from(heroSubtitle, { opacity: 0, y: -20, duration: 1 });
    heroTimeline.from(heroButtons, { opacity: 0, y: 20, duration: 1 });
    heroTimeline.from(heroImage, { opacity: 0, x: -50, duration: 1 });
    heroTimeline.from(autumnTitle, { opacity: 0, y: -50, duration: 1 });
    heroTimeline.from(autumnSubtitle, { opacity: 0, y: -20, duration: 1 });
    heroTimeline.from(autumnImage, { opacity: 0, x: 50, duration: 1 });
    heroTimeline.from(autumnDiscount, { opacity: 0, y: -10, duration: 1 });

    gsap.from(scrollSection, { opacity: 0, y: 20, duration: 1, delay: 1 });

 
});



document.addEventListener('DOMContentLoaded', function () {

 
  function playCasualAnimation() {
      timelineCasual.play();
  }

 
  const casualSection = document.querySelector('.casual');
  const observerCasual = new IntersectionObserver(
      (entries) => {
          if (entries[0].isIntersecting) {
              playCasualAnimation();
              observerCasual.disconnect();
          }
      },
      { threshold: 0.5 }
  );

 
  observerCasual.observe(casualSection);

 
  const timelineCasual = gsap.timeline({ paused: true });

 
  const casualItems = document.querySelectorAll('.cas1');
  casualItems.forEach((item, index) => {
      timelineCasual.from(item, { opacity: 0, y: 50, duration: 0.8, stagger: 0.2 }, index * 0.5);
  });
});


document.addEventListener('DOMContentLoaded', function () {

 
  function playSweaterAnimation() {
      timelineSweater.play();
  }

  // Select the sweater section
  const sweaterSection = document.querySelector('.sw');
  const observerSweater = new IntersectionObserver(
      (entries) => {
          if (entries[0].isIntersecting) {
              playSweaterAnimation();
              observerSweater.disconnect();
          }
      },
      { threshold: 0.5 }
  );

  
  observerSweater.observe(sweaterSection);

  
  const timelineSweater = gsap.timeline({ paused: true });

 
  timelineSweater.from('.txt2', { opacity: 0, y: 50, duration: 1 });
  timelineSweater.from('.images img', { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
});


  document.addEventListener('DOMContentLoaded', function () {
 
    const shoeImage = document.querySelector('.step img');
    const shoeText = document.querySelector('.step .txt3 i');

  
    const timeline = gsap.timeline({ paused: true });

 
    timeline.from(shoeImage, { opacity: 0, x: -50, duration: 1 });
    timeline.from('.step .txt3', { opacity: 0, x: 50, duration: 1 }, '-=0.5');
    timeline.from(shoeText, { opacity: 0, duration: 0.5 });

 
    function playAnimation() {
      timeline.play();
    }
 
    const shoeSection = document.querySelector('.step');
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playAnimation();
          observer.disconnect();  
        }
      },
      { threshold: 0.5 }  
    );

  
    observer.observe(shoeSection);
  });

  document.addEventListener('DOMContentLoaded', function () {
  
    const userReviewsTitle = document.querySelector('.all-users');

  
    const timeline = gsap.timeline({ paused: true });

 
    timeline.from('.first-user', { opacity: 0, y: 50, stagger: 0.3, duration: 1 });

 
    ScrollTrigger.create({
      trigger: userReviewsTitle,
      start: 'top 70%',   
      
      onEnter: () => timeline.play(),
      once: true,  
    });
  });
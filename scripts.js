'use strict';

const body = document.querySelector('body');
const iconsCont = document.querySelector('.icons');
const iconDiv = document.querySelectorAll('.icon');
const moreIcon = document.querySelector('.icon--more');
const moreCont = document.querySelector('.more-content');
const downCont = document.querySelector('.down-echelon');
const downConts = document.querySelector('.down-echelons');
const downDiv = document.querySelectorAll('.gen-down-div');
const overflowY = document.querySelector('.overflow-y');
const hint = document.querySelector('.hint');
const overlay = document.querySelector('.overlay');
const forUSpan = document.querySelector('.for-span');
const followingSpan = document.querySelector('.folow-span');
const forFollow = document.querySelector('.for-follow-btn');
const forULink = document.querySelectorAll('.for-u');
const followLink = document.querySelector('.following');
const themeBtn = document.querySelector('.theme-select-btn');
const themeBtns = document.querySelector('.theme-select-btns');
const themeSection = document.querySelector('.change-theme-section');
const theme = document.querySelectorAll('.theme');
const defaultTheme = document.querySelector('.default');
const darkTheme = document.querySelector('.dark');
const themeBtnOff = document.querySelector('btn-off');
const checkedBtn = document.querySelector('checked-btn');
const doneBtn = document.querySelector('.done-btn');
const doneBttn = document.querySelector('.btn-done-');
const reactions = document.querySelectorAll('.reaction');
const reactionDiv = document.querySelectorAll('.tweet-likes-comments-share');
const likee = document.querySelectorAll('.likee');
const postInput = document.querySelector('.post-input');
const postBtn = document.querySelector('.post-btn');
const tweetsContainer = document.querySelector('.tweets');
const openSetting = document.querySelector('.side-open');
const moreLeftNav = document.querySelector('.more-content-left-nav');
const inputSection = document.querySelector('#input-section');

// inpAreaBtn.addEventListener('click', function () {

// });

const likke = function () {
  likee.forEach(likeBtn => {
    likeBtn.addEventListener('click', function (e) {
      const like = likeBtn.querySelector('.likes');
      const likeArr = Array.from(like.children);

      if (likeArr[1].classList.contains('hidden')) {
        likeArr[1].classList.remove('hidden');
        likeArr[0].classList.add('hidden');
        likeBtn.classList.add('active-like-count');
      } else if (!likeArr[1].classList.contains('hidden')) {
        likeArr[1].classList.add('hidden');
        likeArr[0].classList.remove('hidden');
        likeBtn.classList.remove('active-like-count');
      }
    });
  });
};

likke();

const now = new Date();
const locale = navigator.language;
const timePost = new Intl.DateTimeFormat(locale, {
  hour: '2-digit',
  minute: '2-digit',
}).format(now);

let tweetStorage = localStorage.getItem('tweet');

tweetStorage === 'active';

const tweeting = function () {
  postBtn.addEventListener('click', function (e) {
    if (postInput.value === '') return;
    let html = `
      
      <div class="tweet-profile">
      <div class="tweet-name-grid">
        <div class="flex">
          <div class="profile-pics">
          <img src="img/Screenshot 2023-08-18 145906.png" alt class="pro-pic">
          </div>

          <p class="name">theMystic</p>
          <p class="user-name">@ugochukwu</p>
          <p class="time-tweet"> ${timePost}</p>
        </div>

        <span class="more-icon">
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </span>
      </div>

      <div class="tweet">
        <div class="tweet-content">
          <p class="tweet-text">
          ${postInput.value}
          </p>
          <div class="tweet-img">
            
          </div>
          
          <div class="tweet-likes-comments-share">
          <div class="reaction coment">       <span class="comment">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </span>
            <p class="comment-count count"></p>
            <p class="hint-reaction ">Reply</p>
          </div>


          <div class="reaction retwet"> <span class="retweet">
            <ion-icon name="repeat-outline" class="retweet-icn"></ion-icon>
          </span>
            <p class="retweet-count count">
              
            </p>
            <p class="hint-reaction ">retweet</p>
          </div>


          <div class="reaction likee"> <span class="likes">
            <ion-icon name="heart-outline" class="like"></ion-icon>

            <ion-icon name="heart" class="hidden liked"></ion-icon>
          </span>
            <p class="like-count count">
              
            </p>
            <p class="hint-reaction "> likes</p>
          </div>


          <div class="reaction stats"> <span class="stat">
            <ion-icon name="stats-chart-outline"></ion-icon>
          </span>
            <p class="stat-count count"></p>

            <p class="hint-reaction ">stat</p>
          </div>


          <div class="reaction shres"> 
            <span class="share">
              <ion-icon name="share-outline"></ion-icon>
            </span>
            <p class="hint-reaction ">share</p>
        </div>
      </div>
        </div>


        <!--  -->
    </div>
      
      `;
    tweetsContainer.insertAdjacentHTML('afterbegin', html);
    postInput.value = '';
    likke();
    localStorage.getItem('tweet');
  });
};

setTimeout(tweeting, 3000);

let darkMode = localStorage.getItem('darkMode');

const openThemeSection = function () {
  themeSection.classList.remove('hidden');
  moreCont.classList.add('hidden');
  overlay.classList.remove('hidden');
};

const closeThemeSection = function () {
  themeSection.classList.add('hidden');
  overlay.classList.add('hidden');
};

themeBtn.addEventListener('click', openThemeSection);

// themeBtns.addEventListener('click', openThemeSection);

overlay.addEventListener('click', closeThemeSection);

doneBttn.addEventListener('click', closeThemeSection);

const enableDarkMode = function () {
  defaultTheme.classList.remove('active-btn-checked');
  body.classList.add('dark-theme');
  localStorage.setItem('darkMode', 'enable');
};
const disableDarkMode = function () {
  darkTheme.classList.remove('active-btn-checked');
  body.classList.remove('dark-theme');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enable') enableDarkMode();
theme.forEach(theme => {
  theme.addEventListener('click', function (e) {
    const clicked = e.target.closest('.theme');

    const btn = e.target;
    // console.log(darkTheme.children);
    //remove all theme first
    theme.classList.remove('active-btn-checked');

    clicked.classList.add('active-btn-checked');

    if (clicked.classList.contains('default')) {
      disableDarkMode();
    } else if (clicked.classList.contains('dark')) {
      enableDarkMode();
      darkMode = 'enable';
    }
  });
});

////////////////////////////////////////////////
forFollow.addEventListener('click', function (e) {
  // console.log(e.target);

  // if (!e.target.classList.contains('active-link'))
  //   e.target.classList.add('active-link');

  if (!e.target.classList.contains('for-u')) return;

  forULink.forEach((link, i) => {
    link.classList.remove('active-link');
  });
  e.target.classList.add('active-link');
});

// iconsCont.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('hint'))
//     e.target.classList.add('hint-active');
// });

// iconsCont.addEventListener('mouseout', function (e) {
//   // console.log(e.target.closest('.icon'));

//   if (e.target.classList.contains('hint'))
//     e.target.classList.remove('hint-active');
// });

moreIcon.addEventListener('click', function (e) {
  overlay.classList.remove('hidden');
  moreCont.classList.remove('hidden');
});

overlay.addEventListener('click', function (e) {
  overlay.classList.add('hidden');
  moreCont.classList.add('hidden');
});

// more--content

downCont.addEventListener('click', function (e) {
  const item = e.target.closest('.gen-down-div');

  const btn = e.target.closest('.down--span');
  console.log(btn);

  // console.log(item);
  const arrayItem = Array?.from(item.children);

  // .forEach(icon => {
  //   if (icon.classList.contains('hidden')) console.log(icon);
  // });
  // console.log(arrayItem[2]);
  // console.log(arrayItem);
  // console.log(arrayItem[2]);
  arrayItem[2].classList.toggle('hidden');
  if (arrayItem[2].classList.contains('settings--support')) {
    moreCont.classList.toggle('overflow-y');
  } else {
    // moreCont.classList.remove('overflow-y');
  }
});

openSetting.addEventListener('click', function (e) {
  const item = e.target.closest('.gen-down-div');

  const btn = e.target.closest('.down--span');
  // console.log(btn);
  // console.log(item);
  const arrayItem = Array?.from(item.children);
  console.log(arrayItem);
  // .forEach(icon => {
  //   if (icon.classList.contains('hidden')) console.log(icon);
  // });
  // console.log(arrayItem[2]);
  // console.log(arrayItem);
  // console.log(arrayItem[2]);
  arrayItem[2].classList.toggle('hidden');
  if (arrayItem[2].classList.contains('settings--support')) {
    moreCont.classList.toggle('overflow-y');
  } else {
    // moreCont.classList.remove('overflow-y');
  }
});

// downDiv.forEach((div, i) => {
//   div.addEventListener('click', function (e) {
//     const icon = e.target.closest('ion-icon');
//     if (icon.classList.contains('hidden')) {
//       icon.classList.remove('hidden');
//     } else if (!icon.classList.contains('hidden')) {
//       icon.classList.add('hidden');
//     } else {
//       icon.classList.remove('hidden');
//     }
//   });
// });
const lefTNavBtn = document.querySelector('.nav-pro-pic');
const leftNavCont = document.querySelector('.more-content-left-nav');

lefTNavBtn.addEventListener('click', function (e) {
  leftNavCont.classList.add('active-nav-left');
  leftNavCont.classList.remove('hide-nav');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', function (e) {
  leftNavCont.classList.remove('active-nav-left');
  leftNavCont.classList.add('hide-nav');
  overlay.classList.add('hidden');
});

const btnDrkMde = document.querySelector('.darkmode-btn');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

btnDrkMde.addEventListener('click', function (e) {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enable') {
    enableDarkMode();
    moon.classList.add('hidden');
    sun.classList.remove('hidden');
  } else {
    disableDarkMode();

    moon.classList.remove('hidden');
    sun.classList.add('hidden');
  }
});

const tweetBtn = document.querySelector('.iccccc');
const tweetInput = document.querySelector('.inputs');
const followSpan = document.querySelector('.folow-span');

const logosBtn = document.querySelector('.logos-btn');
tweetBtn.addEventListener('click', function (e) {
  tweetInput.style.display = 'block';
  logosBtn.style.display = 'flex';

  inputSection.scrollIntoView({
    behavior: 'smooth',
  });
});

// followSpan.addEventListener('click', function (e) {
//   tweetInput.style.display = 'none';
//   logosBtn.style.display = 'none';
// });

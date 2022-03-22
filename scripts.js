const questions = [
  {
    question:
      "Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком. А вот если бы они устали, то могли бы спокойно воспользоваться любым другим способом передвижения, кроме одного. Какого?",
    options: [
      "/imgs/var1.jpg",
      "/imgs/var2.jpg",
      "/imgs/var3.jpg",
      "/imgs/var4.jpg",
    ],
    rightAnswer: 0,
  },
  {
    question: "Как выглядит Матильда из мультфильма Чебурашка?",
    options: [
      "/imgs/var11.jpeg",
      "/imgs/var12.jpeg",
      "/imgs/var13.jpeg",
      "/imgs/var14.jpeg",
    ],
    rightAnswer: 1,
  },
  {
    question: "На чём играл крокодил Гена?",
    options: [
      "/imgs/var21.jpeg",
      "/imgs/var22.jpeg",
      "/imgs/var23.jpeg",
      "/imgs/var24.jpeg",
    ],
    rightAnswer: 1,
  },
  {
    question: "Как выглядит Дмитрий Песков?",
    options: [
      "/imgs/var31.jpeg",
      "/imgs/var32.jpeg",
      "/imgs/var33.jpeg",
      "/imgs/var34.jpeg",
    ],
    rightAnswer: 2,
  },
  {
    question: "Флаг РФ выглядит слкедующим образом:",
    options: [
      "/imgs/var41.png",
      "/imgs/var42.jpeg",
      "/imgs/var43.png",
      "/imgs/var44.jpeg",
    ],
    rightAnswer: 3,
  },
]

let score = 0,
  indexOfQuestion = 0

const answerTracker = document.getElementById('answer_tracker')

window.onload = () => {
  html = ``
  for (let i = 0; i < questions.length; i++) {
    html += `<a id="link_${i}" href="#" class="link"></a>`
  }
  answerTracker.innerHTML = html
}

const quizOver = () => {
  document.querySelector('.modal-window').style.display = 'block'
  document.getElementById('score').innerHTML = score
  document.getElementById('question_count').innerHTML = questions.length
};

document.querySelector(selectors = '.text div').innerHTML = questions[indexOfQuestion].question
document.querySelectorAll(selectors = '.image img').forEach(callbackfn = (el = Element, index = number) => {
  el.src = questions[indexOfQuestion].options[index]
})

document.getElementById('try_again').addEventListener(type = 'click', listener = () => {
  document.querySelector('.modal-window').style.display = 'none'
  score = 0
  indexOfQuestion = 0
  document.querySelectorAll('.link').forEach(callbackfn = (el = Element) => {
    console.log(el)
    el.classList.remove('link__active')
  })
  document.querySelectorAll('.image__success').forEach(callbackfn = (el = Element) => {
    console.log(el)
    el.classList.remove('image__success')
  })
  document.querySelectorAll('.image__failure').forEach(callbackfn = (el = Element) => {
    console.log(el)
    el.classList.remove('image__failure')
  })
})

document.querySelectorAll(selectors = '.image img').forEach(callbackfn = (el = Element, index = number) => {
  el.addEventListener(type = 'click', listener = () => {
    if (index === questions[indexOfQuestion].rightAnswer) {
      el.parentNode.classList.add('image__success')
      score++
    } else {
      el.parentNode.classList.add('image__failure')
      document.querySelectorAll(selectors = '.image')[(questions[indexOfQuestion].rightAnswer)].classList.add('image__success')
    }
    const element = document.getElementById('link_' + indexOfQuestion)
    element.classList.add('link__active')
    indexOfQuestion++
    if (indexOfQuestion >= questions.length) {
      quizOver()
      return
    }
    document.querySelectorAll(selectors = '.image').forEach(callbackfn = (el = Element) => {
      el.style.pointerEvents = 'none'
    })
    document.querySelector(selectors = '.button').classList.add('button__active')
  })
})

document.querySelector(selectors = '.button').addEventListener(type = 'click', listener = () => {
  document.querySelector(selectors = '.text div').textContent = questions[indexOfQuestion].question
  document.querySelector(selectors = '.button').classList.remove('button__active')
  document.querySelectorAll(selectors = '.image').forEach(callbackfn = (el = Element, index = number) => {
    el.style.pointerEvents = ''
    el.classList.remove('image__success', 'image__failure')
  })
  document.querySelector(selectors = '.text div').innerHTML = questions[indexOfQuestion].question
  document.querySelectorAll(selectors = '.image img').forEach(callbackfn = (el = Element, index = number) => {
    el.src = questions[indexOfQuestion].options[index]
  })
})
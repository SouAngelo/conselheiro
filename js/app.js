const dado = document.getElementById('dado')


const api = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

   console.log(data.slip)
   const adviceId = document.querySelector(".advice-id")
   const adviceText = document.querySelector(".advice-text")
   
   adviceId.innerHTML = `Advice ${data.slip.id}`
   adviceText.innerHTML = data.slip.advice
}
api()


dado.addEventListener('click', api)

let score = document.querySelectorAll('.bn_rating');
let container1 = document.querySelector('.container_1'); // conteiner 1
let container2 = document.querySelector('.container_2'); // conteiner 2 



let rating = document.getElementById('rating'); // span to change  the number
let bnbSubmit = document.getElementById('bnb_submit'); // buttom to send the score



for (let i = 0; i < score.length; i++) {
    score[i].addEventListener('click', getNumber)
    function getNumber() {
       
        rating.innerHTML = score[i].innerHTML
        for (let i = 0; i < score.length; i++) {
            score[i].classList.contains('selected')
            score[i].classList.remove('selected')
        }
        score[i].classList.add('selected')

    }


}




bnbSubmit.addEventListener('click', () => {
    container1.style.display = 'none';
    container2.style.display = 'flex';
})

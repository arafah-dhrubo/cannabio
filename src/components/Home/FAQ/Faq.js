import React from 'react'
const myStyle = {
  backgroundImage:
    "url('https://i.ibb.co/fpQhC6K/1-1.jpg')",
  height: '100vh',

  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const Faq = () => {
  return (

    <div className='flex grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
      <div className='w-full p-5 md:ml-16 ml-0'>
        <div className='text-center'>
          <div className="w-1/12 mx-auto">
            <img className="w-3/6 mx-auto" alt="logo" src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" />
          </div>
          <p className='text-green-600 text-sm font-bold'>FAQ</p>
          <h1 className='text-4xl font-bold  underline underline-offset-8 decoration-wavy  decoration-green-600'>Popular Questions</h1>

        </div>
        <div class="accordion accordion-flush w-full mt-5" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed text-xl" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />How can I pay for order?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">You can use your debit card in most stores to pay for something. You just swipe the card and enter your PIN number on a key pad. Debit cards take money out of your checking account immediately.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed text-xl" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />How to choose the right CBD?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">You should always check the source of hemp, extraction methods, third-party testing, the company's transparency, and reputation among CBD users.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed text-xl" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />Can I pay by credit card?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">You can pay a friend with a credit card, though it may cost you in fees.</div>
            </div>
          </div>
        </div>
      </div>
      <div style={myStyle} >
      </div>
    </div>

  )
}

export default Faq
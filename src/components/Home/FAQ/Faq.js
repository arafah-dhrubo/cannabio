import React from 'react'

const Faq = () => {
  return (
    <div className='w-5/6 mx-auto my-28'>
      <div className='flex grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
        <div className='w-full'>
          <p className='text-green-600 text-sm font-bold'>FAQ</p>
          <h1 className='text-4xl font-bold'>Popular Questions About CBD Oil</h1>
          <div class="accordion accordion-flush w-full mt-5" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />How can I pay for order?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />How to choose the right CBD?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <img src="https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/Marijuana.png" className='w-1/12 mr-2' alt="" />Can I pay by credit card?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <img className='md:w-5/6 w-4/6 mx-auto' src='https://d3p3h3s8.stackpathcdn.com/wp-content/uploads/2021/05/research-res@1920x.png' alt="faq" />
        </div>
      </div>
    </div>
  )
}

export default Faq
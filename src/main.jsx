import React from 'react'
import ReactDom from 'react-dom/client'

const element1 = document.getElementById('root')

ReactDom.createRoot(element1).render(< div>
  <h1>Hello World</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit officia quaerat ullam? Nemo natus non sit at esse ut doloribus, illum dolorem tenetur? Velit harum maiores unde tempora tenetur!</p>
  <img  width={200}  src="public/vite.svg" alt="" />


</div>)
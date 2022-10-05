import React from 'react'
import Data from '../quotes.json'

import image from '../assets/images/social-media-iphone-organization-logo-twitter-c38c2a5aebc51370b834ef8403340c91.png'

let dataset = JSON.stringify(Data)
let parse = JSON.parse(dataset)
let values = Object.values(parse).flat()
let myArr = [];
let quotes =[];
let authors = [];

for(let i =0; i < values.length; i++){
  myArr.push(Object.values(values[i]))
}
for(let i=0; i < myArr.length; i++){
  quotes.push(myArr[i][0]);
  authors.push(myArr[i][1])
}

class Quotes extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    index: ""
  }
  this.random = this.random.bind(this)
}

componentDidMount(){
  this.setState({
    index: Math.ceil(Math.random()* myArr.length)
  })
}
random(){
  this.setState({
    index:  Math.ceil(Math.random()* myArr.length)
  })
}
render(){
  const q = quotes[this.state.index]
  const a = authors[this.state.index]
  return (
    <div id='quote-box'>
<h1>Quote Generator</h1>
<div>
  <h2 id='text'>{q}</h2>
  <h2 id='author'>{a}</h2>
</div>
<button onClick={this.random} id='new-quote'>Click Me!</button>
<br />
<a href="twitter.com/intent/tweet" id='tweet-quote' ><img src={image} id='twitter-img'alt='twitter'></img></a>
    </div>
  )
}
}
export default Quotes;
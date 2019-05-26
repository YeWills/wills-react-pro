import _ from 'lodash';
import $ from 'jquery';
import axios from 'axios';

function createDomElement() {
  let dom = document.createElement('div');
  dom.innerHTML = _.join(['aicoder.com', ' 好！', '线下实习'], '');
  dom.classList.add('box');
  return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);
console.log(1)
axios
  .get('/j/suggest_v2?q=nice')
  .then(res => console.log('res :', res));

  axios
  .get('/ajax/search?kw=捉妖记&cityId=10')
  .then(res => console.log('reszuoyaoji---- :', res));


class Demo {
  show() {
    console.log('this.Age :', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}

let d1 = new Demo();
d1.Age = 19;
d1.show();


const abc = _.includes([1, 2, 3], 1);
console.log('是否包含1：：'+abc);

$(function() {
  console.log('jquery');

  $('.box').click(function() {
    alert(1);
  });
})
;

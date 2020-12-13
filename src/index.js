const linkInfo = document.getElementById('link-info');
linkInfo.addEventListener('click', e => {
e.preventDefault();
const datas = document.getElementById('links').value.split('\n').map(s => s.trim());
const contents = {
render: () => {
  return `
    <ul>
    ${
        datas.map((data, index) => 
        `<li class='lists'>
        <a href='${data}'>
        <div>
        <div><img src='${data}' /><div>
        <div><span class='idex'>${index+1}</span><span class='site'>
        ${(data.indexOf('yoox') !== -1) && 'Yoox' || (data.indexOf('farfetch') !== -1) && 'Farfetch' || (data.indexOf('mytheresa') !== -1) && 'Mytheresa' }
        </span></div></div>
        </a></li>`).join('\n')
    }    
    </ul>
    `
  }
}

const results = document.getElementById('results');
results.innerHTML = contents.render();
Array.from(document.getElementsByClassName('site')).map( el => {
  const site = el.textContent;
  if (site.indexOf('Farfetch') !== -1) {
    el.classList.add('farfetch');
  } else if (site.indexOf('Mytheresa') !== -1) {
    el.classList.add('mytheresa');
  }
}); 
})

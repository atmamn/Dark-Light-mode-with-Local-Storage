/*Light/Dark mode toggle*/
class CssPropControl {
    constructor(element) {
      this.element = element
    }
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val) {
      return this.element.style.setProperty(varName, val)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body)
  

  
  
  let toggle = document.querySelector('#dark-mode-toggle')
  toggle.addEventListener('click', updateMode);
  
  function updateMode() {
    let mode = toggle.checked ? 'dark' : 'light'
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
   	bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))
  }
  
/*Save dark mode in local storage*/
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  darkModeToggle.checked ? document.body.classList.add("bodyCssProps"):document.body.classList.remove("bodyCssProps");
  localStorage.setItem('darkModeStatus', darkModeToggle.checked);
});

window.addEventListener('load', (event) => {
  if (localStorage.getItem('darkModeStatus')=="true"){
    document.body.classList.add("bodyCssProps"); 
    document.getElementById('dark-mode-toggle').checked = true;
    
    document.body.classList.add("bodyCssProps");
    console.log('dark mode', document.body.className);
  }
  else {
    
    
		console.log('light mode', document.body.className);
  }
  
  updateMode();
  
});

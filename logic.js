document.getElementById('no-1').addEventListener('click',function(){
    this.style.backgroundColor="rgb(213, 102, 32)"
    document.getElementById('no-2').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-3').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-4').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-5').style.backgroundColor="hsl(213, 19%, 18%)"

    var value=this.textContent;
    localStorage.setItem('value',value);
    
})

document.getElementById('no-2').addEventListener('click',function(){
    this.style.backgroundColor="rgb(213, 102, 32)"
    document.getElementById('no-1').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-3').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-4').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-5').style.backgroundColor="hsl(213, 19%, 18%)"

    var value=this.textContent;
    localStorage.setItem('value',value);
})

document.getElementById('no-3').addEventListener('click',function(){
    this.style.backgroundColor="rgb(213, 102, 32)"
    document.getElementById('no-2').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-1').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-4').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-5').style.backgroundColor="hsl(213, 19%, 18%)"

    var value=this.textContent;
    localStorage.setItem('value',value);
})

document.getElementById('no-4').addEventListener('click',function(){
    this.style.backgroundColor="rgb(213, 102, 32)"
    document.getElementById('no-2').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-3').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-1').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-5').style.backgroundColor="hsl(213, 19%, 18%)"

    var value=this.textContent;
    localStorage.setItem('value',value);
})

document.getElementById('no-5').addEventListener('click',function(){
    this.style.backgroundColor="rgb(213, 102, 32)"
    document.getElementById('no-2').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-3').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-4').style.backgroundColor="hsl(213, 19%, 18%)"
    document.getElementById('no-1').style.backgroundColor="hsl(213, 19%, 18%)"

    var value=this.textContent;
    localStorage.setItem('value',value);
})
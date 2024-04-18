var value=localStorage.getItem('value');
if(value===null){
    value=0;
}
document.getElementById('ratingValue').textContent='You selected '+value+' out of 5.'

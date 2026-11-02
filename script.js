document.addEventListener("DOMContentLoaded",function(){
const search=document.getElementById("search"),category=document.getElementById("category"),cards=document.querySelectorAll(".product-card"),noResults=document.getElementById("noResults");
function filter(){if(!cards.length)return;let text=search.value.toLowerCase(),cat=category.value,count=0;cards.forEach(c=>{let show=c.dataset.name.includes(text)&&(cat==="all"||c.dataset.category===cat);c.style.display=show?"block":"none";if(show)count++});noResults.hidden=count!==0}
if(search)search.addEventListener("input",filter);if(category)category.addEventListener("change",filter);
let params=new URLSearchParams(location.search),product=document.getElementById("product");if(product&&params.get("product"))product.value=params.get("product");
let form=document.getElementById("enquiryForm");if(form)form.addEventListener("submit",function(e){e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}document.getElementById("formMessage").textContent="Thank you! Your enquiry has been submitted successfully for this demonstration.";form.reset()});
});
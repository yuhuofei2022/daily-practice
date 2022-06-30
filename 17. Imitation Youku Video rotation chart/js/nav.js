const titles=document.querySelectorAll('.titles a');
const imgs=document.querySelectorAll('.imgs a');
let curIndex=0,timer=null;

function removeActive(){
	titles.forEach(item=>{
		item.classList.remove('active');
	})
	imgs.forEach(item=>{
		item.classList.remove('active');
	})
}

function changeBanner(index){
	removeActive();
	titles[index].classList.add('active');
	imgs[index].classList.add('active');
}

function autoBanner(){
	timer=setInterval(function(){
		curIndex++;
		if(curIndex>titles.length-1){
			curIndex=0;
		}
		changeBanner(curIndex);
	},3000);
}

titles.forEach((item,index)=>{
	item.addEventListener('mouseenter',function(){
		curIndex=index;
		changeBanner(index);
		clearInterval(timer);
	})
	item.addEventListener('mouseleave',function(){
		autoBanner();
	})
})

autoBanner();
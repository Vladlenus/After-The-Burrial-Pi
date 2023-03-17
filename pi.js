var start = new Date().getTime(),
    time = 0,
    elapsed = '0.0';
	
function gbl(){
a=[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9,6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6,
]
console.log(a.length)
a1=[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9,6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6,
]
a2=[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9,6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6,
]
j1=[3,8,11,20,22,26,29,38,45,48,49,50,50,55,62,64,65,65,72,74,80,88,90,93,94,95,102,103,107,113,115,116,116,122,125,129,134,136,139,141,144,148,150,154,155,162,163,164,164,166,167,167,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,168,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,177,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182,182]
j2=[3,5,3,9,2,4,3,9,7,3,1,1,1,5,7,2,1,1,7,2,6,8,2,3,1,1,7,1,4,6,2,1,1,6,3,4,5,2,3,2,3,4,2,4,1,7,1,1,1,2,1,1,1,9,5]

    


function play(){
	var audio1 = new Audio()
	audio1.src = 'src/snare.wav';
	rand1=Math.floor(Math.random() *15)/100;
	audio1.currentTime = 0;
	audio1.volume=0.8;
	audio1.play();   
}
function play1(){
	
	  
	var audio1 = new Audio()
	audio1.src = 'src/crash.mp3';
	rand1=Math.floor(Math.random() *15)/100;
	audio1.currentTime = 0.08+rand1;
	audio1.volume=0.5;
	audio1.pause();
	audio1.play();   
}

function play2(){
	
	var audio1 = new Audio()
	audio1.src = 'src/gutar2.wav';
	rand=Math.floor(Math.random() *10)/150;
	audio1.volume=0.45-rand*2;
	audio1.currentTime = 0;
	audio1.pause();
	audio1.play();  
	 
}
function play3(){
	var audio1 = new Audio()
	audio1.src = 'src/kick1.wav';
	rand=Math.floor(Math.random() *10)/100;
	audio1.currentTime = 0.001;
	audio1.volume=0.7;
	audio1.pause();
	audio1.play();  
	
}
j=0
i=0  //play
i2=0 //pause play
g=0
k=0
k1=0
i2=0

function timeout() {
	
	time += 100;
    elapsed = Math.floor(time / 200) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
    document.title = elapsed;
    var diff = (new Date().getTime() - start) - time;
    
    b=[]
			
	function clock2(){
		if(j==a.length){
			
			return('dada ya')}	
		h2=document.getElementById("h2")
		h1=document.getElementById("h1")
		g=g+1
		//restart
		if(j2[i]==NaN){i=0}
		//sravni arr
		h2.innerHTML=`${a[i]}<p></p> decimal points: ${i}`
		if(a[i]==0){
			h1.innerHTML+=`<td> </td>`;
		}
		//snare
        g1=g-8
		if(g1%16==0){
			
			play()
		}	
		///cymbal
		if(g%3==0||g==0){
			play1()
		}
		
		//pause play
			if(i==j1[j]){
				if(j2[i2]!=0){
					j2[i2]=j2[i2]-1
					console.log(j2[i2],'wait')
					h1.innerHTML+=`<tr>
							<td>p-</td></tr>`
					return
					
				}
				else{
					j=j+1
		
				}
				i2=i2+1
				k1=j2[i]-1
				console.log(i2,'8888')
				//h1.innerHTML+=`<tr>
				//			<td>${a[i-1]}--</td></tr>`
				b=-1	
				
			}
			
			
			
        /// play
					if(a[i]>0){
							a[i]=a[i]-1  ; 
							b=-1
						}   
			
				
                                    
                    if(a[i]==0 &&b!=-1){
                        i=i+1    
                        console.log('-000')
						h1.innerHTML+=`<tr>
							<td>--</td></tr>`
                    }   

                        else{
							h1.innerHTML+=`<tr>
							<td>${a[i]+1}</td></tr>`
							play2();
							play3();
                        
                        console.log(a2[i],'play',j)}
                    
                
				  
			
			}
	clock2()
	window.setTimeout(timeout, 120)
	}
window.setTimeout(timeout, 120);

}
document.getElementById('btn2').onclick= 
function f1(){
	alert('Reload?')
	window.location.reload();
return};

document.getElementById('btn').onclick=  gbl

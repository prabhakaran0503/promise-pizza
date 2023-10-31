let promise= new Promise((resolve,reject)=>{
    let ans=true;
    if(ans==true){
        resolve()
    }
    else{
        reject()
    }
});
promise.then(()=>{
    setTimeout(()=>{
        console.log('cheese barbeque pizza ordered');
    },1000)
}).then(()=>{
    setTimeout(()=>{
        console.log('cheese barbeque pizza for preparation');
    },2000)
}).then(()=>{
    setTimeout(()=>{
        console.log(`On the Way Pizzahub server`);
    },3000)
}).then(()=>{
    setTimeout(()=>{
        console.log(`Succesfully Deliverd Thanks for your order`);
    },5000)
}).catch(()=>{
    console.log("Not Order");
})

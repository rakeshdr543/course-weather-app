
const add =(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },5000)
}

add(1,4,(sum)=>{
    console.log(sum)
})

module.exports=add
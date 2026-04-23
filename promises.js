const getdata = (data1,data2) =>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(data1);
            resolve("sucess")
            if (data2){
                data2();
            }
        },2000)
    })
}
getdata(123,()=>{
    getdata(234);
});




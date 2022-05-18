function resolveAfter20secs(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{res("Hi Neeraj")},20000);
    });
}

async function myasyncfn() {
    console.log("I am waiting for 20 secs");
    const res = await resolveAfter20secs();
    console.log(res);
}

myasyncfn();
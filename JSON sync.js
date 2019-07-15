JSON.sync = function sync(v) {
    Object.keys(v.from).forEach(i => {
        if(typeof v.to[i]=='undefined'){
            v.to[i]=v.from[i];
        }else{
            v.to[i]=v.from[i];
        }
    });
    return v;
}
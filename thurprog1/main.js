let arr = ['+',2,31,42,5,6,17,8,39,10];
function addmul(arg) {
    let l = arg.length;
    if (l<3)
    return (-1);
    if (arg[0] == '+')
    add(arg);
    else
    mul(arg);
}
function mul(item) {
    let res = 1;
    for (let i = 1; i < item.length; i++ ) {
        res = res * item[i];
    }
    console.log(res);
}
function add(item) {
    let res = 0;
    for (let i = 1; i < item.length; i++ ) {
        res = res + item[i];
    }
    console.log(res);
}
addmul(arr);
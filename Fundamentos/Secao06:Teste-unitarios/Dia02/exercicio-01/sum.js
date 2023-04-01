const sum = (num, num2) => {
    if(typeof num === 'number' && typeof num2 === 'number') {
        return num + num2;
    }else if(num.length === 0 || num2.length === 0){
            return 'Digite os valores';
    } else {
        return 'Digite apenas valores numéricos';
    }
    
};
/* 
module.exports = sum; */
export {sum};
let calcularQuadradoFor = (array : number[]) =>{
    for (let i : number = 0; i < array.length; i++){
        array[i] = array[i] * array[i];
    }
    return array;
}

let calcularQuadradoForEach = (array : number[]) =>{
    array.forEach((elemento, i) => {
        array[i] = elemento * elemento;
    });
    return array;
}

export {calcularQuadradoFor, calcularQuadradoForEach};
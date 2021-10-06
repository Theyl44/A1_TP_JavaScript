function moy(a){
    let color = 0;
    for(let b = 0 ; b<3; b++){
        color += a[b];
    }
    return color/3;
}
function pass2D (oldArray, width, height){
    let newArray = [];
    for(let i = 0; i<4*width*height; i=i+4){
        let TempArr = [];
        for(let a = 0; a<4; a++) {
            TempArr[a] = oldArray[i + a];
        }
        newArray.push(TempArr);
    }
    return newArray;
}
function editionContrast(pixel, contrast){
    let f = (259*(contrast+255))/(255*(259-contrast));
    f = f*(pixel - 128) + 128;
    return f;
}
function clone(width, height, oldPixels, newPixels){
    for (let loop = 0; loop<height*width*4 ; loop++){
        newPixels[loop] = oldPixels[loop];
    }
    return newPixels;
}
function negative(width, height, oldPixels, newPixels){
    for (let loop = 0; loop<height*width*4 ; loop++){
        if(loop % 4 === 3){
            newPixels[loop] = oldPixels[loop];
        }
        else {
            newPixels[loop] = 255 - oldPixels[loop];
        }
    }
    return newPixels;
}
function mirror(width, height, oldPixels, newPixels){
    let j = 0;
    let position = -3;
    let loop = 0;
    for(let k = 0; k<height; k++) {
        let line = k*width*4;
        for (let i = line; i < width * 4 + line; i++) {
            if (i % line !== 0) {
                if (loop === 3) {
                    loop = 0;
                    position = position - 4;
                } else
                    loop++;
            }
            j = line + width * 4 - 1 + position + loop;
            newPixels[i] = oldPixels[j];
        }
        position = -3;
        loop = 0;
    }
    return newPixels;
}
function grayscale(width, height, oldPixels, newPixels){
    let lum;
    for(let i =0;i<4*width*height;i=i+4){
        lum=(oldPixels[i]+oldPixels[i+1]+oldPixels[i+2])/3;//luminosite
        newPixels[i]=lum;
        newPixels[i+1]=lum;
        newPixels[i+2]=lum;
        newPixels[i+3]=oldPixels[i+3];
    }
    return newPixels;
}
function constrast(width, height, oldPixels, newPixels, c) {
    for (let loop = 0; loop < height * width * 4; loop++) {
        if (loop % 4 === 3) {
            newPixels[loop] = oldPixels[loop];
        } else {
            newPixels[loop] = editionContrast(oldPixels[loop],c);
        }
    }
    return newPixels;
}
function edgeDetection(width, height, oldPixels, newPixels, threshold) {
    let oldPixels2D = pass2D(oldPixels, width, height);
    for(let loop = 0; loop<height*width; loop++){
        let d;
        if (loop === 0 || loop === width-1 || loop === height*width-width || loop === height*width-1){ // Edge 222984
            d = 0;
        }
        else if (loop < width || loop > height*width-width){ // First && last line
            d = Math.abs(moy(oldPixels2D[loop-1])-moy(oldPixels2D[loop+1]));
        }
        else if (loop%width === 0 || loop%width === width-1){ // First && last column
            d =Math.abs(moy(oldPixels2D[loop - width]) - moy(oldPixels2D[loop + width]) );
        }
        else{
            d = Math.abs(moy(oldPixels2D[loop-1])-moy(oldPixels2D[loop+1]) ) + Math.abs(moy(oldPixels2D[loop - width]) - moy(oldPixels2D[loop + width]) );
        }
        let decal = loop*4;
        if(d>threshold){
            newPixels[decal+3] = 255;
        }
        else{
            for(let z = 0; z<4; z++){
                newPixels[decal+z] = 255;
            }
        }
    }
    return newPixels;
}
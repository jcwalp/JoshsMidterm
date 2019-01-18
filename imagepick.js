var imagesArray = ["1.jpg", "2.jpg", "3.jpg"];


//create a function named displayImage
//it should not have any values passed into it

function dispImage(imgAr){
    var path = './images/';
    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * 3); // 0...6
    var img = imgAr[num];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.write(imgStr);
    console.log("Image Picked" + imagesArray[num]);
}

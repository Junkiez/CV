import profile_img from '../Resourses/profile_img.jpg'

function draw() {
    const canvas = document.getElementById('avatar')
    const image = new Image()
    image.onload = () => {
        // @ts-ignore: Object is possibly 'null'.
        const ctx = canvas.getContext('2d')
        // @ts-ignore: Object is possibly 'null'.
        canvas.width = image.width
        // @ts-ignore: Object is possibly 'null'.
        canvas.height = image.height

        const imageCanvas = document.createElement('canvas')
        imageCanvas.width = image.width
        imageCanvas.height = image.height
        const context = imageCanvas.getContext('2d');
        context?.drawImage(image, 0, 0);
        const dat = context?.getImageData(0, 0, image.width, image.height).data;

        //ctx.fillStyle = 'rgb(100, 0, 0)';
        // @ts-ignore
        //ctx.fillRect(0, 0, canvas.width, canvas.height);

        for(let y = 0; y < image.height; y+=5) {
            for (let x = 0; x < image.width; x+=5) {
                let red = dat![((image.width * y) + x) * 4]
                let green = dat![((image.width * y) + x) * 4 + 1]
                let blue = dat![((image.width * y) + x) * 4 + 2]

               if (red + green + blue / 3 > 100) {
                   ctx.fillStyle = 'cyan';
                   ctx.fillRect(x, y, 3, 3);
               }
            }
        }
    }
    image.src =  profile_img;
}

export default draw
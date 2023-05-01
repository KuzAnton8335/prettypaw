import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(['src/img/*.{jpg, png}'], {
	distination: 'src/img/',
	plugins: [
		imageminWebp({
			quality: 70
		}),
	]
});

console.log('Конвертация в webp завершена !');




const input = document.querySelector(".input-file");
const outputContainer = document.querySelector(".output-container");
input.addEventListener("change", (event) => {
    const files = Array.from(event.target.files)
    files.forEach((file, index) => {
        const reader = new FileReader();
        console.log();
        reader.onload = eventFile => {
            let boxImage = document.createElement('div');
            let image = document.createElement('img');
            boxImage.classList = 'output-container__box';
            outputContainer.appendChild(boxImage);
            boxImage.appendChild(image)
            image.classList = 'output-container__image output-container__image--hover'
            image.src = eventFile.target.result;
            boxImage.insertAdjacentHTML("beforeend",
                `<div class="output-container__coverage output-container__coverage--hover">
                            <div class="output-container__coverage-button bg-light">
                                <span class="material-icons-outlined">
                                    close
                                </span>
                            </div>
                        </div>
             `
            );
            document.querySelectorAll('.output-container__coverage-button').forEach((button ,index) => {
               button.addEventListener('click', (event) => {
                 console.log(boxImage[index]);
               })
            });
        }
        reader.readAsDataURL(file)
    })

})

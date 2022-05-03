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

/* insertAdjacentHTML("afterbegin",
                `<div class="output-container__box">
                    <img src="${eventFile.target.result}" class="output-container__image output-container__image--hover"/>
                </div >
                 `
                ) */
/* <script>
import axios from "axios";
export default {
  data() {
    return {
      arrayFiles: [],
      files: null,
      unraw: null,
    };
  },
  methods: {
    async fething() {
      const fethingg = await fetch("/api/posts");
      const data = await fethingg.json();
      console.table(data);
    },
    changeImages(e) {
      this.unraw = e.target.files;
      this.files = Array.from(e.target.files);
      this.files.forEach((file) => {
        console.log(this.unraw.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.arrayFiles.push(event.target.result);
          this.arrayFiles.filter((item, index) => {
            console.log(item);
            return this.arrayFiles.indexOf(item) == index;
          });
        };
      });
    },
    async onsubmit() {
      let formData = new FormData();
      this.unraw.forEach((thatFile, index) => {
        let file = this.unraw[index];
        formData.append(thatFile.name, file);
      });

      axios
        .post("/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          console.log("SUCCESS!!");
        });
    },
    deleteImage(images) {
      this.arrayFiles.splice(this.arrayFiles.indexOf(images), 1);
    },
  },
};
</script> */
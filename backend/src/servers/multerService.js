import axios from "axios";
import formData from "form-data";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/jpg"];
const SIZE_MAX_FILE = 5 * 1024 * 1024;

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: SIZE_MAX_FILE},
    fileFilter(req, file, cb){
        if(ALLOWED_MIME_TYPES.includes(file.mimetype)){
            cb(null, true);
        }
        else{
            cb(new Error("Formato de imagem inválida"), false);
        }
    }

})

async function apiUrl (file) {
    const form = new formData();
    form.append("image", file.toString("base64"));
    try {
        const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API}`,form,
            {
                headers:{
                    ...form.getHeaders()
                }
            }
        )
       return response.data.data.url;
    } catch (error) {
        throw new Error("Error ao carregar imagem no imgBB");
    }

}

export const uploadFileMiddleware = [
    upload.single("file"),
    async(req, res, next)=>{
    try {
        const file = req.file;
        if(!file){
            return next();
        }
        const urlImg = await apiUrl(file.buffer);

        req.body.profilePicture = urlImg;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
]

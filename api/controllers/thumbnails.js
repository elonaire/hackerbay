const EventEmitter = require("events");
const jimp = require("jimp"); //package to download & resize images
const uuidv1 = require("uuid/v1"); //package to generate random & unique image-names

class Job extends EventEmitter {}
let download = new Job();

//add event listener for the job
download.on("done", () => {
  console.log(`Thumbnail created Successfully on ${new Date()}`);
});

exports.create_thumbnail = (req, res, next) => {
  let url = req.body.imgurl;

  if (url !== undefined) {
    let imgname = uuidv1();

    //get MIME type from URL
    let imgExtension = url.split(".").splice(-1, 1)[0];
    console.log(imgExtension);

    //Set default MIME type to png if not found
    if (
      imgExtension !== "jpg" &&
      imgExtension !== "png" &&
      imgExtension !== "jpeg"
    ) {
      imgExtension = "png";
    }

    console.log("Downloading...");

    jimp
      .read(url)
      .then(result => {
        let img = result
          .resize(50, 50)
          .write(`thumbnails/${imgname}.${imgExtension}`);

        //emit done event
        download.emit("done", err => {
          if (err) {
            console.log("Download Failed!");
          }
        });

        res.status(201).json({
          message: "Thumbnail created",
          thumbnail: `${imgname}.${imgExtension}`
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    res.status(400).json({
      message: "You must provide a valid image URL"
    });
  }
};

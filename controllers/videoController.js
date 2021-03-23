import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", { pageTitle : "Home", videos });
    } catch(error){
        console.log(error);
        res.render("home", { pageTitle : "Home", videos: [] });
    }
};

export const search = (req, res) => {
    const { 
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle : "Search", searchingBy, videos});
}
    
// export const videos = (req, res) => 
// res.render("videos", { pageTitle : "Videos"});

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle : "Upload"});
};

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and Save video
    res.redirect(routes.videoDetail(videos[0].id));
};

export const videoDetail = (req, res) => 
    res.render("videoDetail", { pageTitle : "Video Detail"});

export const editVideo = (req, res) => 
    res.render("editVideo", { pageTitle : "Edit Video"});

export const deleteVideo = (req, res) => 
    res.render("deleteVideo", { pageTitle : "Delete Video"});

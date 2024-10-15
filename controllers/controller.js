let storeMemoriesData = [];


const defaultController = (req, res) => {
    console.log("Run Default Controller.");

    res.render('index', { memors: storeMemoriesData });
};




const memorRun = (req, res) => {
    console.log("Run Memor Appp.");


    const memorId = {
        id: storeMemoriesData.length + 1,
        creator: req.body.creator,
        topic: req.body.topic,
        message: req.body.message
    }

    storeMemoriesData = [...storeMemoriesData, memorId];
    console.log(storeMemoriesData);


    res.redirect('/');

}




const editMemorController = (req, res) => {
    console.log("Run Edit Memor Appp.");

    let { id } = req.params;
    const singleMemor = storeMemoriesData.find((data) => {
        return data.id == id
    });
    console.log("Single memor for EDIT", singleMemor.message);
    res.render('edit', { singleMemor });

}




const updateMemorController = (req, res) => {
    console.log("Run Update Memor Appp.");
    let { id } = req.params;
    const { creator, topic, message } = req.body;
    const singleMemor = storeMemoriesData.find((data) => {
        return data.id == id
    });
    singleMemor.creator = creator;
    singleMemor.topic = topic;
    singleMemor.message = message;
    console.log("Updated Memor", singleMemor);
    res.redirect('/');
}



const deleteMemorController = (req, res)=>{
    console.log("Run Delete Memor Appp.");

    let {id} = req.params;

    const deleteMemor = storeMemoriesData.filter((data)=>{
        return data.id != id;
    });

    storeMemoriesData = deleteMemor;
    console.log("Record DELETE Successfully.");
    
    res.redirect('/');
}






module.exports = { defaultController, memorRun, editMemorController, updateMemorController, deleteMemorController };
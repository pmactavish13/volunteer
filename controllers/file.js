var AWS = require('aws-sdk'),
    fs = require('fs');

// http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Credentials_from_Disk
AWS.config.loadFromPath('.../config/aws-config.json');

// assume you already have the S3 Bucket created, and it is called ierg4210-shopxx-photos
var photoBucket = new AWS.S3({params: {Bucket: 'ierg4210-shopxx-photos'}});

function uploadToS3(file, destFileName, callback) {
    photoBucket
        .upload({
            ACL: 'public-read', 
            Body: fs.createReadStream(file.path), 
            Key: destFileName.toString(),
            ContentType: 'application/octet-stream' // force download if it's accessed as a top location
        })
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#httpUploadProgress-event
        // .on('httpUploadProgress', function(evt) { console.log(evt); })
        // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3/ManagedUpload.html#send-property
        .send(callback);
}



var express = require('express'),
    app = express(),
    multer = require('multer');

app.get('/upload', function (req, res) {
    res.status(200)
        .send('<form method="POST" enctype="multipart/form-data">'
            + '<input type="file" name="file1"/><input type="submit"/>'
            + '</form>')
        .end();
})

app.post('/upload', multer({limits: {fileSize:10*1024*1024}}), function (req, res) {

    if (!req.files || !req.files.file1) {
        return res.status(403).send('expect 1 file upload named file1').end();
    }
    var file1 = req.files.file1;

    // this is mainly for user friendliness. this field can be freely tampered by attacker.
    if (!/^image\/(jpe?g|png|gif)$/i.test(file1.mimetype)) {
        return res.status(403).send('expect image file').end();
    }

    var pid = '10000' + parseInt(Math.random() * 10000000);

    uploadToS3(file1, pid, function (err, data) {
        if (err) {
            console.error(err);
            return res.status(500).send('failed to upload to s3').end();
        }
        res.status(200)
            .send('File uploaded to S3: ' 
                    + data.Location.replace(/</g, '&lt;') 
                    + '<br/><img src="' + data.Location.replace(/"/g, '&quot;') + '"/>')
            .end();
    })
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Example Server listening at port ' + (process.env.PORT || 3000));
});
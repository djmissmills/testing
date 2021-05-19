document.addEventListener('DOMContentLoaded', () => {
    let photo = '';
    let publicIDdiv = document.getElementById('publicIDdiv');
    let publicIDvalue = document.getElementById('publicIDvalue');
    publicIDdiv.hidden = true;
    const submitButton = document.getElementById('createPage');
    submitButton.disabled = true;


    const myWidget = cloudinary.createUploadWidget({
        cloudName: 'missmills',
        uploadPreset: 'bcv1xhfb',
        sources: ['local'],
        multiple: false,
        theme: 'minimal',
        styles: {
            palette: {
                link: 'red'
            }
        }
    }, (error, result) => {
        if (!error && result && result.event ==='success'){
            photo = result.info.public_id;
            submitButton.disabled = false;
            publicIDdiv.hidden = false;
            publicIDvalue.value = photo;
        }
    })

    document.getElementById('photo').addEventListener('click', () => myWidget.open());
})
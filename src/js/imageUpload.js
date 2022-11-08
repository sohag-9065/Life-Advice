
const imagestorageKey = '3582de6481b734f98ff58713b1465520';

const imageUpload = imageUrl => {

    const formData = new FormData();
        formData.append('image', imageUrl);
        const url = `https://api.imgbb.com/1/upload?key=${imagestorageKey}`;

        return fetch(url, {
            method: 'POST',
            body: formData
        })

}

export default imageUpload;
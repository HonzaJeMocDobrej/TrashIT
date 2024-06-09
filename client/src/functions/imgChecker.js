export const imgChecker = async (imgPath, baseImg, setter) => {
    fetch(imgPath, { method: 'HEAD' })
    .then(res => {
        if (res.ok) {
            return setter(imgPath);
        } else {
            return setter(baseImg);
        }
    }).catch(err => console.log('Error:', err));
}


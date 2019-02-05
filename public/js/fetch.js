const fetch = (method, url, value, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4)
            if (xhr.status === 200)
                callback(null, JSON.parse(xhr.responseText));
            else
                callback(new Error('Api is not responding'));
    }
    xhr.open(method, url);
    xhr.send(value);
}
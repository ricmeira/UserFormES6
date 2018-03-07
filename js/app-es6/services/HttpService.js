class HttpService {

    _handleErrors(res) {
        if(!res.ok) throw new Error(res.statusText);
        return res;
    }

    /*get(url){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                return xhr.responseText;
            }
        }
        xhr.open('GET', url, true);
        xhr.send(null);
    }*/
    
    get(url) {
        return fetch(url)
        .then(res => this._handleErrors(res))
        .then(res => res.json());       
    }
}
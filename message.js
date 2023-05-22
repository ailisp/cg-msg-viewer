async function renderMessage(group, id) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-post', group + '/' + id);
    document.body.appendChild(script);
}

const urlParams = new URLSearchParams(window.location.search);
const group = urlParams.get('group') || 'cryptonear';
let id = urlParams.get('id');
const iframe = document.createElement('iframe');
iframe.src = 'https://t.me/'+group+'/'+id+'?embed=1&userpic=true';
document.body.appendChild(iframe);
async function renderMessage(group, id) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-post', group + '/' + id);
    document.body.appendChild(script);
}

async function addIframeResizer() {
    // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js"></script>
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.6/iframeResizer.contentWindow.js";
    script.async = true;
    document.body.appendChild(script);
}

async function main() {
    const urlParams = new URLSearchParams(window.location.search);
    const group = urlParams.get('group') || 'cryptonear';
    let id = urlParams.get('id');
    await renderMessage(group, id);
    document.getElementById("loading").remove();
    // await addIframeResizer();
    if ('parentIFrame' in window) {
        console.log('aaa', document.body.scrollHeight);
        parentIFrame.size(document.body.scrollHeight); // Set height to 100px
    } else {
        console.log('no')
    }
}

main();

// const iframe = document.createElement('iframe');
// iframe.src = 'https://t.me/'+group+'/'+id+'?embed=1&userpic=true';
// document.body.appendChild(iframe);



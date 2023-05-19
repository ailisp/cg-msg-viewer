async function getMessageIds(group) {
  let res = await fetch("https://j96g3uepe0.execute-api.us-east-1.amazonaws.com/groups/" + group);
  let {messageIds} = await res.json();
  return messageIds;
}

async function renderMessage(group, id) {
  const script = document.createElement('script');
  script.src = 'https://telegram.org/js/telegram-widget.js?22';
  script.async = true;
  script.setAttribute('data-telegram-post', group + '/' + id);
  document.body.appendChild(script);
}

async function renderMessages() {
  const urlParams = new URLSearchParams(window.location.search);
  const group = urlParams.get('group') || 'cryptonear';
  let messageIds = urlParams.get('messageIds');
  if (messageIds) {
    messageIds = messageIds.split(',');
  } else {
    messageIds = await getMessageIds(group);
  }
  for (let id of messageIds) {
    await renderMessage(group, id);
  }
  document.getElementById("loading").remove();
}

renderMessages();
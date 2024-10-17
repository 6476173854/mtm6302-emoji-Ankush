const emojiGallery = document.getElementById('emoji-gallery');

const emojis = [
    { char: '😀', code: 'U+1F600' },
    { char: '😂', code: 'U+1F602' },
    { char: '😍', code: 'U+1F60D' },
    { char: '😎', code: 'U+1F60E' },
    { char: '🥳', code: 'U+1F973' },
    { char: '🤔', code: 'U+1F914' },
    { char: '🙌', code: 'U+1F64C' },
    { char: '🎉', code: 'U+1F389' },
    { char: '🌟', code: 'U+1F31F' },
    { char: '🔥', code: 'U+1F525' },
    { char: '🌈', code: 'U+1F308' },
    { char: '💖', code: 'U+1F496' },
];

emojis.forEach(emoji => {
    const emojiDiv = document.createElement('div');
    emojiDiv.className = 'emoji';
    emojiDiv.innerHTML = `${emoji.char}<br><span>${emoji.code}</span>`;
    emojiGallery.appendChild(emojiDiv);
});

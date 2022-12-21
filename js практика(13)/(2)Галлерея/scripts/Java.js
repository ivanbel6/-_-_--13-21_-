 thumbs.onclick = function(event) {
            let thumbnail = event.target.closest('a');
//Он будет использовать event.target, чтобы получить элемент, на котором произошло событие, и подсветить его.
            if (!thumbnail) return;
            showThumbnail(thumbnail.href, thumbnail.title);
            event.preventDefault();
        }

        function showThumbnail(href, title) {
            largeImg.src = href;
            largeImg.alt = title;
        }
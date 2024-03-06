async function commentForm(event) {
    event.preventDefault();

    const comment_txt = document.querySelector('input[name="comment-body"]').value.trim();

    const post_ID = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_txt) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_ID,
                comment_txt
            }),
            headers: {
                'info-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentForm);
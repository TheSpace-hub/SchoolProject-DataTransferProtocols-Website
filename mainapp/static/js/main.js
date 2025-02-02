function update_level() {
    let level = document.getElementById('level-input').value
    document.getElementById('level-status').innerText = level.toString()

}

function set_key_status(id, status) {
    if (status)
        document.getElementById(id).innerText = 'ON'
    else
        document.getElementById(id).innerText = 'OFF'
}

setInterval(function () {
    if (document.getElementById('working').checked) {
        fetch("http://127.0.0.1:8000/key_status", {
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: "Fix my bugs",
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                set_key_status('k1-status', json['k1'])
                set_key_status('k2-status', json['k2'])
                set_key_status('k3-status', json['k3'])
                set_key_status('k4-status', json['k4'])
                set_key_status('k5-status', json['k5'])
                set_key_status('k6-status', json['k6'])
                set_key_status('k7-status', json['k7'])
            });
    }
}, 100)


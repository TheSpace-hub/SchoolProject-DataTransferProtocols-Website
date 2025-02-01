function update_level() {
    let level = document.getElementById('level-input').value
    document.getElementById('level-status').innerText = level.toString()
    console.log(level)
}
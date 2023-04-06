function getDefaultIcon() {
    const id = document.getElementById("id").value
    const url = document.getElementById("url").value
    const img = document.getElementById("img")

    const res = `https://${url}/identicon/@${id}@${url}`
    console.log(res)

    img.src = res
}

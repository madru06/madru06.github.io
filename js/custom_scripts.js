
let outside_urls = [
    ["flordeloto","https://madru06.github.io/madru06.flordeloto/"],
    ["streetburguers", "https://madru06.github.io/madru06.streetsburguers/"],
    ["ontv", "https://madru06.github.io/madru06.OnTV/"],
    ["demongapi", "https://github.com/madru06/demo-ng-api"],
    ["vuedemos", "https://github.com/madru06/Vue-Demos"],
    ["meseroapp", "https://github.com/madru06/mesero-app"],
    ["myconverter", "https://madru06.github.io/madru06.MyConverter/"],
    ["mypokeapp", "https://madru06.github.io/MyPokeApp/"]
 ]

function redirecToSite(name) {
    let result_url = outside_urls.filter(x => x[0] === name)
    window.open(result_url[0][1], '_blank');
}


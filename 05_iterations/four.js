const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in obj) {
    // console.log(obj[key])
    console.log(`${key} -> ${obj[key]}`)
}

const languages = ["js", "cpp", "java", "python"]

for (const key in languages) {
    // console.log(key) // it is print the index values of the array
    console.log(languages[key]) // it will print the values associated with index of the array 
}

const map = new Map()
map.set('IN', "Indian")
map.set('USA', "dollar")
map.set('France', "")
map.set('IN', "Indian")

// we can't use for in loop for the maps iteration 
for (const key in map) {
    console.log(map)
}


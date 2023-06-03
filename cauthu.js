var cauthu = ["ronaldo","messi","neymar"]
let bien = prompt("ban co muon nhap them cau thu khong: 'Y' or 'N'")
if(bien == "Y"){
    var cauthus = cauthu.push(prompt("moi ban nhap ten cau thu"))
    alert(cauthu)
}
else if(bien == "N"){
    alert("good bye!")
}
else{prompt("Moi ban nhap lai: 'Y' or 'N'")}
